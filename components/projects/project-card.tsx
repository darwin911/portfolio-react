import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/components/shared/shared";
import Github from "@/public/github-mark.svg";

export default function ProjectCard({
  description,
  href,
  imgSrc,
  title,
}: Omit<Project, "id">) {
  return (
    <div className="relative w-96 min-w-full bg-card md:w-[512px] lg:w-[1024px]">
      <Image
        src={imgSrc}
        alt={title}
        className="h-96 w-96 bg-muted/90 object-contain md:w-[512px] lg:h-[620px] lg:w-[1024px]"
        priority
      />
      <div className="flex max-w-full flex-col items-start  p-4">
        <h2 className="mb-4 text-2xl font-bold tracking-tighter">{title}</h2>
        <Link
          href={href}
          target="_blank"
          className="text-muted-foreground underline underline-offset-2"
        >
          Live Site
        </Link>

        <Link
          href="https://www.github.com/darwin911"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2"
        >
          <Image
            className="dark:invert"
            src={Github}
            alt="Darwin's Github Account"
            width={24}
          />
          <small>Github</small>
        </Link>
        <p className="max-w-sm pt-3">{description} </p>
      </div>
    </div>
  );
}
