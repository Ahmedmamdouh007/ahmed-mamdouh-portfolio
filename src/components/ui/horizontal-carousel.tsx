"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";

type HorizontalCarouselProps<T> = {
  items: readonly T[];
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  renderSlide: (item: T, isActive: boolean, index: number) => ReactNode;
  prevLabel?: string;
  nextLabel?: string;
  dotLabel?: (item: T) => string;
};

export function HorizontalCarousel<T>({
  items,
  getKey,
  getLabel,
  renderSlide,
  prevLabel = "Previous slide",
  nextLabel = "Next slide",
  dotLabel,
}: HorizontalCarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  const scrollToIndex = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(items.length - 1, next)));
  }, [items.length]);

  useEffect(() => {
    setIndex(0);
  }, [items]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight") scrollToIndex(index + 1);
      if (e.key === "ArrowLeft") scrollToIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, scrollToIndex]);

  const current = items[index];
  const slideKey = current ? getKey(current) : "empty";

  return (
    <div className="relative flex flex-col text-cyprus">
      <div className="flex shrink-0 items-center justify-between border-b border-cyprus/15 px-4 py-2.5 md:px-6 md:py-3">
        <p className="truncate pr-3 font-display text-[9px] uppercase tracking-[0.18em] text-cyprus/60 sm:text-[10px] sm:tracking-[0.2em]">
          {current ? getLabel(current) : ""}
        </p>
        <span className="shrink-0 font-display text-[10px] text-cyprus/50">
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollToIndex(index - 1)}
          disabled={index === 0}
          aria-label={prevLabel}
          className="touch-target absolute left-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-cyprus/15 bg-white/80 text-cyprus shadow-md transition-[opacity,transform,background-color] hover:bg-white disabled:pointer-events-none disabled:opacity-30 sm:left-3 sm:h-11 sm:w-11 md:left-5"
        >
          <ChevronLeft size={18} aria-hidden className="sm:hidden" />
          <ChevronLeft size={20} aria-hidden className="hidden sm:block" />
        </button>

        <button
          type="button"
          onClick={() => scrollToIndex(index + 1)}
          disabled={index === items.length - 1}
          aria-label={nextLabel}
          className="touch-target absolute right-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-cyprus/15 bg-white/80 text-cyprus shadow-md transition-[opacity,transform,background-color] hover:bg-white disabled:pointer-events-none disabled:opacity-30 sm:right-3 sm:h-11 sm:w-11 md:right-5"
        >
          <ChevronRight size={18} aria-hidden className="sm:hidden" />
          <ChevronRight size={20} aria-hidden className="hidden sm:block" />
        </button>

        <motion.div
          layout={!reduce}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="px-1 sm:px-2"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={slideKey}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -28 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {current ? renderSlide(current, true, index) : null}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex shrink-0 items-center justify-center gap-2 border-t border-cyprus/15 py-3">
        {items.map((item, i) => (
          <button
            key={getKey(item)}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={dotLabel ? dotLabel(item) : getLabel(item)}
            aria-current={i === index ? "true" : undefined}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-8 bg-cyprus shadow-[0_0_12px_color-mix(in_oklch,var(--color-cyprus)_35%,transparent)]"
                : "w-1.5 bg-cyprus/20 hover:bg-cyprus/35",
            )}
          />
        ))}
      </div>
    </div>
  );
}
