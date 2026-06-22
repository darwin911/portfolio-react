"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

/**
 * Reveal-on-scroll helper built on IntersectionObserver.
 *
 * Returns a ref to attach to the observed element and an `inView` flag.
 * To keep content accessible, `inView` resolves to `true` immediately when the
 * user prefers reduced motion or IntersectionObserver is unavailable, so the
 * element is never left hidden.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  once = false,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView };
}
