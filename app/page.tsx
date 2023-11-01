import Image from "next/image";
// import GithubLight from "@/public/github-mark-white.svg";
import GithubDark from "@/public/github-mark.svg";
import LinkedInIcon from "@/public/linkedin-icon.svg";
import ProfilePic from "@/public/profilepic_white-bg.jpg";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center overflow-hidden p-8 sm:p-20 md:p-24">
      <Image
        className="absolute inset-y-0 left-0 -z-10 min-h-full grow object-cover opacity-30"
        src="https://images.pexels.com/photos/2120040/pexels-photo-2120040.jpeg?auto=compress"
        alt="bg"
        width={3000}
        height={1987}
        priority
      />
      <div className="mt-10 w-full max-w-7xl">
        <Card className="max-w-3xl bg-card/80 sm:flex sm:flex-col">
          <CardHeader className="w-full flex-row">
            <div className="flex w-full flex-col items-center gap-4 md:flex-row">
              <Image
                src={ProfilePic}
                alt="Darwin Smith headshot"
                className="border-current/50 h-28 w-28 rounded-full border-4 object-cover shadow-sm"
                width={96}
                height={96}
              />
              <div className="flex flex-col items-start justify-center rounded px-2 py-0">
                <CardTitle className="text-2xl font-semibold tracking-tighter text-stone-800 drop-shadow-heading sm:text-5xl md:text-7xl lg:whitespace-nowrap">
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
                <GlobeAmericasIcon className="h-6 w-6" />
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
            <p className="rounded bg-card px-10 py-6 text-lg leading-relaxed tracking-tighter">
              Hey there! I&apos;m a software developer with 4 years of
              experience who&apos;s passionate about creating awesome web
              applications. Right now, my jam is building with{" "}
              <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>Tailwind</strong>. I&apos;ve got a knack for making things
              look great and ensuring a top-notch user experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
