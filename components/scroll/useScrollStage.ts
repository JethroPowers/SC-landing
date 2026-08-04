"use client";

import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState } from "react";

export function useScrollStage(stageCount: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reducedMotion) return;
    const next = Math.min(stageCount - 1, Math.floor(latest * stageCount));
    setActive((current) => (current === next ? current : next));
  });

  function scrollToStage(index: number) {
    const track = trackRef.current;
    if (!track) return;

    const next = Math.max(0, Math.min(stageCount - 1, index));
    const start = window.scrollY + track.getBoundingClientRect().top;
    const travel = Math.max(0, track.offsetHeight - window.innerHeight);
    const position = start + travel * ((next + 0.5) / stageCount);

    setActive(next);
    window.scrollTo({ top: position, behavior: "auto" });
  }

  return {
    active,
    reducedMotion: Boolean(reducedMotion),
    scrollToStage,
    trackRef
  };
}
