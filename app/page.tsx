import Image from "next/image";
import GithubDark from "@/public/github-mark.svg";
import LinkedInIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profilepic_white-bg.jpg";
import Link from "next/link";
import HeroBg from "@/public/hero-bg.jpeg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-20 md:py-24">
      <Image
        className="absolute inset-y-0 left-0 -z-10 min-h-full grow object-cover opacity-30"
        src={HeroBg}
        alt=""
        quality={15}
        placeholder="blur"
        loading="lazy"
      />
      <div className="mb-5 mt-10 w-full max-w-7xl">
        <Card className="max-w-3xl bg-card/80 sm:flex sm:flex-col">
          <CardHeader className="w-full flex-row">
            <div className="flex w-full flex-row flex-wrap items-center gap-4">
              <Image
                src={ProfilePic}
                alt="Darwin Smith headshot"
                className="size-20 rounded-full border-4 border-card-foreground/25 object-cover shadow-sm sm:size-28"
                priority
                quality={80}
                placeholder="blur"
              />
              <div className="flex flex-col items-start justify-center rounded px-2 py-0">
                <CardTitle className="text-3xl font-semibold tracking-tighter text-stone-800 drop-shadow-heading dark:text-zinc-50  dark:drop-shadow-heading-light sm:text-5xl md:text-7xl lg:whitespace-nowrap">
                  Darwin Smith
                </CardTitle>
                <CardDescription className="whitespace-nowrap font-light sm:text-xl md:text-2xl">
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
                  href="/resume-nov-24-2024.pdf"
                  download="darwin-smith-resume.pdf"
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <DocumentArrowDownIcon className="size-6" />
                  <small>Resume</small>
                </Link>
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
                  />
                  <small>LinkedIn</small>
                </Link>
              </div>
            </div>
            <div className="rounded bg-card px-4 py-6 text-sm tracking-tight sm:px-10 sm:text-base md:text-lg">
              <p className="leading-relaxed">
                <span className="inline-block animate-rainbow-scroll bg-gradient-to-r from-sky-400 via-green-400 to-sky-400 bg-clip-text text-lg font-black leading-relaxed tracking-normal text-transparent transition-all">
                  Hello world!
                </span>{" "}
                I&apos;m a software developer with{" "}
                {new Date().getFullYear() - 2019} years of experience who&apos;s
                passionate about creating awesome web applications. Lately, my
                favorite stack includes <strong>Next.js</strong>,{" "}
                <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
                I enjoy making things work well and look great.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
