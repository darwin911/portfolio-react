"use client";

import { useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  step: number;
}

export function ExperienceScrollWrapper({ children, step }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const TRANSITION = "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    let scrollEndTimer: ReturnType<typeof setTimeout>;

    function getItems() {
      return Array.from(
        container!.querySelectorAll<HTMLElement>(".snap-center")
      );
    }

    function setOpacities(transition: string) {
      const items = getItems();
      const { left, width } = container!.getBoundingClientRect();
      const containerCenter = left + width / 2;

      items.forEach((item) => {
        item.style.transition = transition;
        const r = item.getBoundingClientRect();
        const itemCenter = r.left + r.width / 2;
        const distance = Math.abs(itemCenter - containerCenter);
        const ratio = Math.max(0, 1 - distance / (r.width * 0.5));
        item.style.opacity = (0.35 + 0.65 * ratio).toFixed(3);
      });
    }

    function onScroll() {
      // Track in real-time while scrolling — no transition lag
      setOpacities("none");

      // Re-enable cubic-bezier transition once scroll settles
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => setOpacities(TRANSITION), 80);
    }

    setOpacities(TRANSITION);
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      clearTimeout(scrollEndTimer);
    };
  }, []);

  function scrollPrev() {
    // Scroll left (toward older entries)
    ref.current?.scrollBy({ left: -step, behavior: "smooth" });
  }

  function scrollNext() {
    // Scroll right (toward newer entries)
    ref.current?.scrollBy({ left: step, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={ref}
        className="overflow-x-auto pb-4 [direction:rtl] [scrollbar-color:theme(colors.border)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-track]:bg-transparent snap-x snap-mandatory"
      >
        {children}
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          onClick={scrollPrev}
          aria-label="Older experience"
          className="flex size-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-indigo-400 hover:text-indigo-500 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4 fill-none stroke-current stroke-2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          aria-label="Newer experience"
          className="flex size-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-indigo-400 hover:text-indigo-500 dark:hover:border-indigo-500 dark:hover:text-indigo-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4 fill-none stroke-current stroke-2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
