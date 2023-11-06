"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/components/shared/shared";
import Github from "@/public/github-mark.svg";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { CarouselChildProps } from "@/components/carousel";
import clsx from "clsx";

interface ProjectCardProps extends Omit<Project, "id">, CarouselChildProps {
  index: number;
}

export default function ProjectCard({
  description,
  href,
  imgSrc,
  title,
  index,
  current,
}: ProjectCardProps) {
  const isCurrent = index === current;
  return (
    <div
      className={clsx(
        "relative w-96 min-w-full snap-center overflow-hidden rounded-xl border transition-all duration-200  md:w-[512px] lg:w-[1024px]",
        isCurrent
          ? "animate-in zoom-in-75"
          : "rotate-12 scale-75 opacity-0 zoom-in-90"
      )}
    >
      <Image
        src={imgSrc}
        alt={title}
        className="aspect-[4/3] w-full bg-muted/90 object-contain md:w-[512px] lg:w-[1024px]"
        placeholder="blur"
      />
      <div className="max-w-full shrink p-4 lg:p-8">
        <div className="flex w-full flex-wrap items-center justify-between">
          <h2 className="mb-4 text-2xl font-bold tracking-tighter">{title}</h2>
          <div className="flex items-center gap-4 tracking-tighter text-muted-foreground">
            <Link
              href={href}
              target="_blank"
              className="flex flex-col items-center gap-1 underline underline-offset-2 transition-colors hover:text-primary"
            >
              <GlobeAltIcon className="h-6 w-6" />
              <small>Live Site</small>
            </Link>

            <Link
              href="https://www.github.com/darwin911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 underline underline-offset-2 transition-colors hover:text-primary"
            >
              <Image
                className="dark:invert"
                src={Github}
                alt="Darwin's Github Account"
                width={24}
              />
              <small>Github</small>
            </Link>
          </div>
        </div>

        <p className="max-w-full pt-3">{description} </p>
      </div>
    </div>
  );
}
