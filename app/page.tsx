import Image from "next/image";
import GithubDark from "@/public/github-mark.svg";
import LinkedInIcon from "@/public/linkedin-icon.svg";
import Link from "next/link";
import BackgroundSVG from "@/public/background.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import { PropsWithChildren } from "react";
import Avatar from "@/app/avatar";

export const dynamic = "force-static";

function FancyText({ children, color }: PropsWithChildren<{ color: string }>) {
  return (
    <strong
      className={`hover:text-[${color}] cursor-cell duration-150 motion-safe:hover:animate-pulse`}
    >
      {children}
    </strong>
  );
}

export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-repeat opacity-80 dark:invert"
        style={{ backgroundImage: `url(${BackgroundSVG.src})` }}
      />
      <main className="relative flex flex-col items-center">
        <div className="mb-5 w-full max-w-7xl 2xl:max-w-8xl">
          <Card className="max-w-3xl bg-transparent shadow-none border-none sm:flex sm:flex-col lg:max-w-4xl xl:max-w-6xl xl:p-20">
            <CardHeader className="w-full flex-row">
              <div className="flex w-full flex-row flex-wrap items-center justify-between gap-4">
                <div className="flex flex-row items-center gap-4">
                  <Avatar />
                  <div className="flex flex-col items-start justify-center rounded px-2 py-0">
                    <h1 className="text-3xl font-semibold leading-none tracking-tight text-indigo-500 dark:text-indigo-400 sm:text-5xl md:text-6xl lg:whitespace-nowrap h-lg:text-4xl h-md:text-3xl h-sm:text-2xl">
                      Darwin Smith
                    </h1>
                    <CardDescription className="whitespace-nowrap flex items-center gap-4 justify-between w-full ">
                      <span className="tracking-tight sm:text-xl md:text-2xl h-md:text-base h-sm:text-sm text-foreground">
                        Senior Software Developer
                      </span>
                    </CardDescription>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-4 shrink-0 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                      </svg>
                      Girona, Spain · CET (UTC+1)
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Open to work
                  </span>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.github.com/darwin911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 text-muted-foreground"
                    >
                      <Image
                        className="dark:invert"
                        src={GithubDark}
                        alt=""
                        width={20}
                        height={20}
                      />
                      <small>
                        Github
                        <span className="sr-only"> (opens in new tab)</span>
                      </small>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/darwinpsmith/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 text-muted-foreground"
                    >
                      <Image
                        className="grayscale"
                        src={LinkedInIcon}
                        alt=""
                        width={20}
                        height={20}
                      />
                      <small>
                        LinkedIn
                        <span className="sr-only"> (opens in new tab)</span>
                      </small>
                    </Link>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-3 inline-block animate-rainbow-scroll tracking-tight bg-linear-to-r from-indigo-500 via-orange-400 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent drop-shadow-xs transition-all dark:invert sm:text-3xl lg:text-4xl">
                Hello world!
              </p>
              <div className="space-y-2 md:space-y-4 lg:space-y-6 rounded-2xl border border-indigo-500/20 bg-card p-8 text-sm leading-relaxed tracking-tight text-muted-foreground shadow-sm sm:text-base md:text-lg lg:text-xl h-lg:text-base h-md:text-sm h-sm:text-sm">
                <p>
                  I specialize in building accessible, high-performance web
                  applications with clean, maintainable code and exceptional
                  user experiences. I care about the details that often get
                  skipped —{" "}
                  <FancyText color="#3dcf8e">accessibility (WCAG)</FancyText>,
                  semantic HTML, and cross-browser and device compatibility.
                </p>
                <p>
                  I&apos;m comfortable working across both legacy and modern
                  codebases, from older{" "}
                  <FancyText color="#61dafb">React</FancyText> applications with{" "}
                  <FancyText color="#1d365d">CSS preprocessors</FancyText> to
                  modern projects using:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <FancyText color="#0070f3">Next.js</FancyText> for
                    full-stack React applications
                  </li>
                  <li>
                    <FancyText color="#3178c6">TypeScript</FancyText> for
                    type-safe development
                  </li>
                  <li>
                    <FancyText color="#06b6d4">Tailwind CSS</FancyText> for
                    responsive design
                  </li>
                </ul>
                <p>
                  I&apos;ve shipped across the full stack when the team needed
                  it — <FancyText color="#306998">Python (FastAPI)</FancyText>{" "}
                  backed by{" "}
                  <FancyText color="#3dcf8e">Postgres (Supabase)</FancyText>,
                  and <FancyText color="#43853d">Node.js (Express)</FancyText>{" "}
                  on AWS, with some .NET Core work along the way.
                </p>
                <p>
                  I&apos;ve led technical direction as a founding engineer. AI
                  tooling like{" "}
                  <FancyText color="#d97757">Claude Code</FancyText> and{" "}
                  <FancyText color="#000000">Cursor</FancyText> is a core part
                  of how I build and iterate today.
                </p>
                <p>
                  Most recently, I worked as a Senior Developer at{" "}
                  <Link
                    href="https://www.thebigpixel.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-underline text-[#EE7523] hover:text-[#EE7523]/80"
                  >
                    <strong>The Big Pixel</strong>
                    <span className="sr-only"> (opens in new tab)</span>
                  </Link>
                  . I&apos;m currently open to new opportunities —{" "}
                  <Link
                    href="/contact"
                    className="text-underline text-indigo-500 hover:text-indigo-500/80 dark:text-indigo-400"
                  >
                    let&apos;s talk
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
