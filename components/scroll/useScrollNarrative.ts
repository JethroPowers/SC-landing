"use client";

import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll
} from "motion/react";
import { useCallback, useRef, useState } from "react";

export function useScrollNarrative(chapterCount: number) {
  const trackRef = useRef<HTMLElement>(null);
  const [activeChapter, setActiveChapter] = useState(0);
  const [chapterProgress, setChapterProgress] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const lastChapterProgress = useRef(0);
  const lastOverallProgress = useRef(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reducedMotion) return;
    if (
      typeof window !== "undefined" &&
      !window.matchMedia(
        "(min-width: 1100px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)"
      ).matches
    ) {
      return;
    }

    const bounded = Math.max(0, Math.min(0.999999, latest));
    const scaled = bounded * chapterCount;
    const nextChapter = Math.min(chapterCount - 1, Math.floor(scaled));
    const nextChapterProgress = scaled - nextChapter;

    setActiveChapter((current) =>
      current === nextChapter ? current : nextChapter
    );

    if (Math.abs(lastChapterProgress.current - nextChapterProgress) > 0.025) {
      lastChapterProgress.current = nextChapterProgress;
      setChapterProgress(nextChapterProgress);
    }

    if (Math.abs(lastOverallProgress.current - bounded) > 0.005) {
      lastOverallProgress.current = bounded;
      setOverallProgress(bounded);
    }
  });

  const activateChapter = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(chapterCount - 1, index));
      setActiveChapter(next);
      setChapterProgress(0.56);
      setOverallProgress((next + 0.56) / chapterCount);
    },
    [chapterCount]
  );

  const scrollToChapter = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const next = Math.max(0, Math.min(chapterCount - 1, index));
      activateChapter(next);

      if (!track) return;

      const mobileTarget = document.getElementById(`matter-chapter-${next}`);
      const cinematic = window.matchMedia(
        "(min-width: 1100px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)"
      ).matches;

      if (!cinematic && mobileTarget) {
        mobileTarget.scrollIntoView({ block: "start", behavior: "auto" });
        return;
      }

      const start = window.scrollY + track.getBoundingClientRect().top;
      const travel = Math.max(0, track.offsetHeight - window.innerHeight);
      const position = start + travel * ((next + 0.56) / chapterCount);
      window.scrollTo({ top: position, behavior: "auto" });
    },
    [activateChapter, chapterCount]
  );

  return {
    activeChapter,
    activateChapter,
    chapterProgress,
    overallProgress,
    reducedMotion: Boolean(reducedMotion),
    scrollToChapter,
    trackRef
  };
}
