import { EnvelopeIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import GithubDark from "@/public/github-mark.svg";
import LinkedInIcon from "@/public/linkedin-icon.svg";

export default function ContactPage() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-20 md:p-0 h-md:py-6 h-sm:py-4">
      <div className="grid size-full place-items-center sm:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-stone-800 drop-shadow-heading dark:text-zinc-50  dark:drop-shadow-heading-light sm:text-5xl md:text-7xl lg:whitespace-nowrap h-lg:text-4xl h-md:text-3xl h-sm:text-2xl">
            Contact
          </h1>
          <p className="mt-2 text-sm font-medium text-stone-600 dark:text-zinc-300 sm:text-base">
            I&apos;m currently open to new opportunities.
          </p>
        </div>
        <div className="flex size-full items-center justify-center bg-card invert">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <span className="sr-only">Email:</span>
              <EnvelopeIcon className="size-6" />
              <Link href="mailto:darwinpsmith@gmail.com">
                darwinpsmith@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="sr-only">GitHub:</span>
              <Image src={GithubDark} alt="" width={24} height={24} />
              <Link
                href="https://www.github.com/darwin911"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/darwin911
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="sr-only">LinkedIn:</span>
              <Image
                src={LinkedInIcon}
                alt=""
                width={24}
                height={24}
                className="grayscale"
              />
              <Link
                href="https://www.linkedin.com/in/darwinpsmith/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/darwinpsmith
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="sr-only">Resume:</span>
              <DocumentTextIcon className="size-6" />
              <Link href="/resume">View resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
