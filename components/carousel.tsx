"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { ReactElement, ReactNode, useState } from "react";

interface CarouselProps {
  children: ReactElement | ReactElement[];
}

export interface CarouselChildProps {
  current?: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Carousel({ children }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  if (!Array.isArray(children) || !children.length) {
    return null;
  }

  function previousSlide() {
    setCurrent((prev) =>
      prev === 0 ? (children as ReactNode[]).length - 1 : current - 1
    );
  }

  function nextSlide() {
    setCurrent((prev) =>
      prev === (children as ReactNode[]).length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="relative z-0 ring-zinc-800/10">
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
      <div className="absolute inset-x-0 top-1/3 flex items-center justify-between px-4 md:py-4">
        <Button
          className="rounded-full border border-secondary lg:h-14 lg:w-14"
          size="icon"
          onClick={previousSlide}
        >
          <ChevronLeftIcon className="h-6 w-6 lg:h-8 lg:w-8" />
        </Button>
        <Button
          className="rounded-full border border-secondary lg:h-14 lg:w-14"
          size="icon"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-6 w-6 lg:h-8 lg:w-8" />
        </Button>
      </div>
    </div>
  );
}
