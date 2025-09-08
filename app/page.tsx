import Image from "next/image";
import GithubDark from "@/public/github-mark.svg";
import LinkedInIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profilepic_optimized.webp";
import Link from "next/link";
import BackgroundSVG from "@/public/background.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren } from "react";

export const dynamic = "force-static";

function FancyText({ children, color }: PropsWithChildren<{ color: string }>) {
  return (
    <strong
      className={`hover:text-[${color}] cursor-cell duration-150 hover:animate-pulse`}
    >
      {children}
    </strong>
  );
}

function Avatar() {
  return (
    <Image
      src={ProfilePic}
      alt="Darwin Smith headshot"
      className="size-20 rounded-full border-2 border-card-foreground/20 object-cover shadow-xs sm:size-28 h-sm:size-16"
      priority
      quality={50}
      width={112}
      height={112}
      placeholder="blur"
      sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 112px"
    />
  );
}

export default function Home() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-20 md:py-24 h-sm:pt-44">
      <Image
        className="absolute -z-10 size-full object-cover dark:invert"
        src={BackgroundSVG}
        alt="" // this is a decorative bg image
      />
      <div className="mb-5 mt-10 w-full max-w-7xl">
        <Card className="max-w-3xl bg-card/80 sm:flex sm:flex-col">
          <CardHeader className="w-full flex-row">
            <div className="flex w-full flex-row flex-wrap items-center gap-4">
              <Avatar />
              <div className="flex flex-col items-start justify-center rounded px-2 py-0">
                <CardTitle className="text-3xl font-semibold tracking-tighter text-stone-800 dark:text-zinc-50 dark:drop-shadow-heading-light sm:text-5xl sm:drop-shadow-heading md:text-7xl lg:whitespace-nowrap h-lg:text-4xl h-md:text-3xl h-sm:text-2xl">
                  Darwin Smith
                </CardTitle>
                <CardDescription className="whitespace-nowrap font-light sm:text-xl md:text-2xl h-md:text-base h-sm:text-sm">
                  Software Developer
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-3 flex justify-between">
              <div className="flex items-center gap-1">
                <GlobeAmericasIcon className="size-6" />
                <small>GMT-4 (ET)</small>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://www.github.com/darwin911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Image
                    className="dark:invert"
                    src={GithubDark}
                    alt="Darwin's Github Account"
                    width={24}
                    height={24}
                  />
                  <small>Github</small>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/darwinpsmith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <Image
                    className="grayscale"
                    src={LinkedInIcon}
                    alt="Darwin's LinkedIn Account"
                    width={24}
                    height={24}
                  />
                  <small>LinkedIn</small>
                </Link>
              </div>
            </div>
            <div className="space-y-2 rounded bg-card text-sm leading-relaxed tracking-tighter sm:text-base md:text-lg h-sm:text-sm">
              <p className="inline-block animate-rainbow-scroll bg-linear-to-r from-sky-400 via-green-400 to-sky-400 bg-clip-text text-2xl font-bold text-transparent drop-shadow-xs transition-all dark:invert sm:text-3xl md:text-4xl">
                Hello world!
              </p>
              <p>I enjoy building well built web applications and software.</p>
              <p>
                Lately, my favorite stack includes{" "}
                <FancyText color="#0070f3">Next.js</FancyText>,{" "}
                <FancyText color="#3178c6">TypeScript</FancyText>, and{" "}
                <FancyText color="#06b6d4">Tailwind CSS</FancyText>. I have
                experience with{" "}
                <FancyText color="#3dcf8e">Postgres (Supabase)</FancyText>,{" "}
                <FancyText color="#306998">Python</FancyText>,{" "}
                <FancyText color="#43853d">Node.js (Express)</FancyText> and
                familiar with <FancyText color="#1D63ED">Docker</FancyText> and
                various <FancyText color="#ff9900">AWS</FancyText> services,{" "}
                <FancyText color="#181717">Git/Github</FancyText>, and various
                tracking systems like{" "}
                <FancyText color="#0052cc">Jira</FancyText>/
                <FancyText color="#6563ff">Linear</FancyText>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
