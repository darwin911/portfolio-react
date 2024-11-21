"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface CarouselProps {
  children: ReactElement | ReactElement[];
}

export interface CarouselChildProps {
  current?: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Carousel({ children }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const previousSlide = useCallback(() => {
    setCurrent((prev) =>
      prev === 0 ? (children as ReactNode[]).length - 1 : current - 1
    );
  }, [children, current]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) =>
      prev === (children as ReactNode[]).length - 1 ? 0 : current + 1
    );
  }, [children, current]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          // Handle left arrow key press
          previousSlide();
          break;
        case "ArrowRight":
          // Handle right arrow key press
          nextSlide();
          break;
        default:
          // Handle other key presses or do nothing
          break;
      }
    },
    [previousSlide, nextSlide]
  );

  useEffect(() => {
    const element = carouselRef.current;

    if (element) {
      element.addEventListener("keydown", handleKeyDown);

      return () => {
        element.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  if (!Array.isArray(children) || !children.length) {
    return null;
  }

  return (
    <div
      className="relative z-0 ring-zinc-800/10 focus-visible:outline-none"
      ref={carouselRef}
      tabIndex={0}
    >
      <div
        className={clsx(
          "ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex snap-x flex-row transition-transform duration-300"
        )}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {React.Children.map(children, (child: React.ReactElement) => {
          return React.cloneElement(child, { setCurrent, current });
        })}
      </div>
      <div className="absolute inset-x-0 top-0 flex aspect-[4/3] flex-col items-center justify-center px-4 md:py-4">
        <div className="mt-auto flex w-full justify-between">
          <Button
            className="rounded-full border border-secondary dark:border-primary dark:bg-muted dark:text-primary lg:size-14"
            size="icon"
            onClick={previousSlide}
          >
            <ChevronLeftIcon className="size-6 lg:size-8" />
          </Button>
          <Button
            className="rounded-full border border-secondary dark:border-primary dark:bg-muted dark:text-primary lg:size-14"
            size="icon"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="size-6 lg:size-8" />
          </Button>
        </div>
        <div className="mt-auto flex justify-center rounded-full">
          {children.map((_, index) => (
            <Button
              variant="ghost"
              className={clsx("p-2 hover:bg-transparent")}
              key={index}
              onClick={() => setCurrent(index)}
            >
              <span
                className={clsx(
                  "block size-4 rounded-full border border-muted-foreground",
                  current === index
                    ? "bg-card/80 dark:bg-card-foreground/80"
                    : "bg-card/25"
                )}
              ></span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
