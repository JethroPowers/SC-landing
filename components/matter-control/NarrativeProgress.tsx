"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import type { KeyboardEvent } from "react";
import type { MatterControlNarrativeChapter } from "@/lib/matter-control-fixture";
import styles from "./MatterControl.module.css";

type NarrativeProgressProps = {
  chapters: MatterControlNarrativeChapter[];
  activeChapter: number;
  overallProgress: number;
  onChapterChange: (index: number) => void;
};

export function NarrativeProgress({
  chapters,
  activeChapter,
  overallProgress,
  onChapterChange
}: NarrativeProgressProps) {
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const chapter = chapters[activeChapter];

  function move(index: number) {
    const next = Math.max(0, Math.min(chapters.length - 1, index));
    onChapterChange(next);
    buttons.current[next]?.focus({ preventScroll: true });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      move(Math.min(chapters.length - 1, index + 1));
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      move(Math.max(0, index - 1));
    }
    if (event.key === "Home") {
      event.preventDefault();
      move(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      move(chapters.length - 1);
    }
  }

  return (
    <div className={styles.narrativeProgress}>
      <div className={styles.narrativeProgressCurrent} aria-live="polite">
        <span>{chapter.label} / 10</span>
        <strong>{chapter.shortLabel}</strong>
      </div>

      <div
        aria-label="Matter-control narrative chapters"
        className={styles.narrativeProgressRail}
        role="tablist"
      >
        <span
          aria-hidden="true"
          className={styles.narrativeProgressFill}
          style={{ transform: `scaleX(${Math.max(0.03, overallProgress)})` }}
        />
        {chapters.map((item, index) => (
          <button
            aria-label={`${item.label}. ${item.navigationLabel}`}
            aria-selected={activeChapter === index}
            className={activeChapter === index ? styles.chapterDotActive : styles.chapterDot}
            data-tooltip={item.navigationLabel}
            key={item.id}
            onClick={() => onChapterChange(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            ref={(node) => {
              buttons.current[index] = node;
            }}
            role="tab"
            tabIndex={activeChapter === index ? 0 : -1}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.narrativeProgressActions}>
        <button
          aria-label="Previous chapter"
          disabled={activeChapter === 0}
          onClick={() => onChapterChange(activeChapter - 1)}
          type="button"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Previous</span>
        </button>
        <button
          aria-label="Next chapter"
          disabled={activeChapter === chapters.length - 1}
          onClick={() => onChapterChange(activeChapter + 1)}
          type="button"
        >
          <span>Next</span>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
