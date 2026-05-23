import { Metadata } from "next";
import Link from "next/link";
import { ResumeContent } from "./resume-content";

export const metadata: Metadata = {
  title: "Resume | Darwin Smith",
  robots: { index: false, follow: false },
};

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-8">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tighter text-indigo-500 dark:text-indigo-400 sm:text-5xl">
            Darwin Smith
          </h1>
          <p className="mt-1 text-lg font-medium tracking-tight text-muted-foreground">
            Software Developer · 7 years experience
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="https://github.com/darwin911"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/darwinpsmith/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-400 dark:text-indigo-400"
          >
            Get in touch →
          </Link>
        </div>
      </div>

      <p className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Full-stack developer with 7 years of experience building web
        applications across the entire stack — from responsive React UIs and
        mobile layouts to .NET APIs and SQL query optimization. I&apos;ve
        shipped production features at early-stage startups, including a
        YC-backed AI company, and at established product teams serving hundreds
        of users in the field. I&apos;m known for bridging the gap between
        technical and non-technical stakeholders — translating tradeoffs into
        clear decisions for founders, PMs, and clients, and pushing back when a
        proposed approach would hurt the product. Comfortable owning features
        end-to-end, moving fast in greenfield codebases, and bringing clarity to
        legacy ones.
      </p>

      <ResumeContent />
    </main>
  );
}
