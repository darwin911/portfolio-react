"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Render immediately without the scroll-in animation (e.g. above-the-fold). */
  disabled?: boolean;
}

/**
 * Wraps content with a subtle fade + rise entrance animation when it scrolls
 * into view. Respects reduced-motion via {@link useInView}.
 */
export function Reveal({ children, className, disabled }: RevealProps) {
  const { ref, inView } = useInView({ once: true });

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-[opacity,translate] motion-reduce:transition-none",
        inView
          ? "opacity-100 translate-y-[0%]"
          : "opacity-25 translate-y-[25%]",
        className,
      )}
    >
      {children}
    </div>
  );
}
