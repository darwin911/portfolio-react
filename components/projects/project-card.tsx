"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/components/shared/shared";
import Github from "@/public/github-mark.svg";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { CarouselChildProps } from "@/components/carousel";

interface ProjectCardProps extends Omit<Project, "id">, CarouselChildProps {
  index: number;
}

export default function ProjectCard({
  description,
  href,
  imgSrc,
  title,
  index,
  setCurrent,
}: ProjectCardProps) {
  function handleLinkFocus() {
    if (!setCurrent) {
      console.error("setCurrent is not defined");
      return;
    }

    setCurrent(index);
  }

  return (
    <div className="relative w-96 min-w-full snap-center bg-card md:w-[512px] lg:w-[1024px]">
      <Image
        src={imgSrc}
        alt={title}
        className="h-96 w-96 bg-muted/90 object-contain md:w-[512px] lg:h-[620px] lg:w-[1024px]"
        priority
      />
      <div className="flex max-w-full flex-col items-start p-4">
        <div className="flex w-full items-center justify-between">
          <h2 className="mb-4 text-2xl font-bold tracking-tighter">{title}</h2>

          <div className="flex items-center gap-4 tracking-tighter text-muted-foreground">
            <Link
              href={href}
              target="_blank"
              onFocus={handleLinkFocus}
              className="flex flex-col items-center gap-1 underline underline-offset-2 transition-colors hover:text-primary"
            >
              <GlobeAltIcon className="h-6 w-6" />
              <small>Live Site</small>
            </Link>

            <Link
              href="https://www.github.com/darwin911"
              target="_blank"
              rel="noopener noreferrer"
              onFocus={handleLinkFocus}
              className="flex flex-col items-center justify-center gap-1 underline underline-offset-2"
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
