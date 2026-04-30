"use client";

import { useEffect, useRef, useCallback, useState } from "react";

/**
 * Tracks scroll progress within a container element.
 * Returns a value between 0 and 1 representing how far through
 * the container's scrollable height the user has scrolled.
 * 
 * Uses requestAnimationFrame for smooth, throttled updates.
 */
export function useScrollProgress(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  const update = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerHeight = containerRef.current.offsetHeight;
    const scrollableHeight = containerHeight - windowHeight;

    if (scrollableHeight <= 0) return;

    const scrolled = -rect.top;
    const raw = scrolled / scrollableHeight;
    const clamped = Math.min(Math.max(raw, 0), 1);

    setProgress(clamped);
    ticking.current = false;
  }, [containerRef]);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(update);
  }, [update]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial read
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return progress;
}
