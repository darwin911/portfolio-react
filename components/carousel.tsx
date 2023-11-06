"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { ReactNode, useState } from "react";

export default function Carousel({ children }: { children: ReactNode[] }) {
  const [current, setCurrent] = useState<number>(0);

  if (!Array.isArray(children) || !children.length) {
    return null;
  }

  function previousSlide() {
    setCurrent((prev) => (prev === 0 ? children?.length - 1 : current - 1));
  }

  function nextSlide() {
    setCurrent((prev) => (prev === children?.length - 1 ? 0 : current + 1));
  }

  return (
    <div className="relative z-10 overflow-hidden rounded-xl shadow-md ring-1 ring-zinc-800/10">
      <div
        className={clsx(
          "flex flex-row transition-transform duration-150 ease-in-out"
        )}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {children}
      </div>
      <div className="pointer-events-auto absolute inset-x-0 inset-y-1/2 flex items-center justify-between p-4">
        <Button className="rounded-full" size="icon" onClick={previousSlide}>
          <ChevronLeftIcon className="h-6 w-6" />
        </Button>
        <Button className="rounded-full" size="icon" onClick={nextSlide}>
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
