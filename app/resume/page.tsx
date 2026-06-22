import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExperienceScrollWrapper } from "@/components/experience-scroll-wrapper";

export const metadata: Metadata = {
  title: "Darwin Smith | Senior Software Developer",
  description:
    "Darwin Smith — Senior Software Developer · React / Next.js / TypeScript",
  openGraph: {
    title: "Darwin Smith — Senior Software Developer",
    description:
      "Senior Software Developer with 7 years building React and Next.js applications across startups and scale-ups.",
  },
};

const S = "font-semibold text-foreground";

// ── Timeline layout knobs ─────────────────────────────────────────────────────
const CARD_WIDTH = 640; // px — visual width of each experience card
const CARD_GAP = 80; // px — space between cards
// ─────────────────────────────────────────────────────────────────────────────

const EXPERIENCE: {
  title: string;
  company: string;
  companyHref?: string;
  remote?: boolean;
  location?: string;
  period: string;
  bullets: React.ReactNode[];
  tech?: string[];
}[] = [
  {
    title: "Senior Developer",
    company: "BigPixel",
    companyHref: "https://www.thebigpixel.net/",
    remote: true,
    period: "Jan 2025 – Present",
    bullets: [
      <>
        Led a{" "}
        <strong className={S}>
          mobile and tablet responsiveness initiative
        </strong>{" "}
        across a Bootstrap 3 codebase, resolving 100+ tracked issues spanning
        iOS-specific keyboard, scroll, and layout bugs, modal stacking, and
        viewport layouts.
      </>,
      <>
        Delivered features including a{" "}
        <strong className={S}>
          country selector with SVG flags and keyboard navigation
        </strong>
        , photo capture in private browsing, and dashboard routing improvements.
      </>,
      <>
        Extended <strong className={S}>.NET Core API controllers</strong> and
        improved <strong className={S}>LINQ query performance</strong> against
        Azure SQL, supporting new dashboard endpoints for equipment filtering,
        inspection dates, and work order history.
      </>,
      <>
        Managed releases across test, staging, and production in a
        cross-functional team of ~5.
      </>,
    ],
    tech: ["React", "TypeScript", ".NET Core", "Azure SQL", "LINQ"],
  },
  {
    title: "Founding Engineer",
    company: "Ruffo (YC S22)",
    remote: true,
    period: "Jan 2024 – Nov 2024",
    bullets: [
      <>
        Sole engineer on a greenfield{" "}
        <strong className={S}>Next.js application</strong> self-hosted on AWS,
        owning all architecture and rendering decisions from PoC to
        prospect-ready product.
      </>,
      <>
        Built an <strong className={S}>AI role-play assistant</strong>{" "}
        integrating <strong className={S}>OpenAI</strong> and custom LLMs for
        context-aware web and phone call interactions.
      </>,
      <>
        Ran a parallel{" "}
        <strong className={S}>Python/FastAPI backend on Fly.io</strong>{" "}
        connected to a PostgreSQL database on Supabase.
      </>,
      <>
        Advised co-founders on technical direction across product and
        operations.
      </>,
    ],
    tech: ["Next.js", "Python", "FastAPI", "AWS", "Supabase", "OpenAI"],
  },
  {
    title: "Senior Developer",
    company: "Ironforge (acquired)",
    remote: true,
    period: "Apr 2023 – Oct 2023",
    bullets: [
      <>
        Built core features for a{" "}
        <strong className={S}>Solana developer platform</strong> — program
        management dashboard, RPC Gateway configuration, API key management,
        billing, team management, and webhook integration.
      </>,
      <>
        Developed a shareable <strong className={S}>API Playground</strong> with
        save/restore state, shareable URL generation, and paginated data export.
      </>,
      <>
        Led development of a custom product landing page using{" "}
        <strong className={S}>Framer Motion</strong> and Tailwind with custom
        SVGs designed in Figma.
      </>,
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Playwright",
      "Svix",
      "Stripe",
      "Figma",
    ],
  },
  {
    title: "Software Engineer II",
    company: "RECUR Forever Inc. (shut down)",
    remote: true,
    period: "Jun 2022 – Apr 2023",
    bullets: [
      <>
        Built custom components and features for platform and brand-specific
        clients using{" "}
        <strong className={S}>Next.js, Remix, Tailwind CSS</strong>, and
        Material UI.
      </>,
      <>
        Collaborated with the design team to build and maintain a{" "}
        <strong className={S}>product design system in Figma</strong>.
      </>,
      <>
        Presented feature work in bi-weekly engineering demos across a
        cross-functional team.
      </>,
    ],
    tech: ["Next.js", "Remix", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Lead Developer",
    company: "Freeman Company",
    remote: true,
    period: "Jun 2020 – Jun 2022",
    bullets: [
      <>
        Led development on a{" "}
        <strong className={S}>
          mobile-first, full-stack online event conference application
        </strong>{" "}
        (Online Event Pro) built with React, Express, and AWS Serverless/S3.
      </>,
      <>
        Coordinated 2–3 rotating developers per project sprint through code
        reviews, daily standups, and unblocking sessions.
      </>,
      <>
        Maintained and expanded a custom component library with a focus on{" "}
        <strong className={S}>
          accessibility and cross-browser consistency
        </strong>
        .
      </>,
      <>
        Integrated multiple third-party services and user registration data
        providers.
      </>,
    ],
    tech: ["React", "Express", "AWS Serverless", "S3", "Adobe XD", "Zeplin"],
  },
  {
    title: "Developer",
    company: "Vessel Technologies, Inc.",
    location: "New York, NY",
    period: "Aug 2019 – Jan 2020",
    bullets: [
      <>
        Built a custom <strong className={S}>React product page</strong> and
        contributed to a <strong className={S}>Java codebase</strong> for
        bespoke smart home solutions.
      </>,
    ],
    tech: ["React", "Express", "CSS", "Java", "Heroku", "Netlify"],
  },
  {
    title: "Web Development Immersive Fellow",
    company: "General Assembly NYC",
    period: "Jan 2019 – Apr 2019",
    bullets: [
      <>
        <strong className={S}>CitiBike Stations</strong> — live station map
        consuming NYC Open Data and Google Geocoding APIs, rendered on Mapbox.
      </>,
      <>
        <strong className={S}>Vinyl</strong> — full-stack music app with AWS S3
        audio uploads and custom playback UI controls.
      </>,
    ],
    tech: ["React", "Express", "PostgreSQL", "AWS S3", "Mapbox"],
  },
];

const EDUCATION = [
  {
    degree: "Web Development Immersive",
    school: "General Assembly",
    period: "Jan 2019 – Apr 2019",
    location: "New York, NY",
  },
  {
    degree: "Masters in Fundamental Rights and Public Powers",
    school: "Universidad del País Vasco (UPV)",
    period: "2014 – 2015",
    location: "Bilbao, Spain",
  },
  {
    degree: "Bachelor in Law",
    school: "PUCMM",
    period: "2008 – 2012",
    location: "Santo Domingo, Dominican Republic",
  },
];

const CDN = "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos";

const TECH_ICONS: Record<string, string> = {
  "JavaScript (ES6)": `${CDN}/javascript.svg`,
  TypeScript: `${CDN}/typescript-icon.svg`,
  React: `${CDN}/react.svg`,
  "Next.js": `${CDN}/nextjs-icon.svg`,
  Remix: `${CDN}/remix-icon.svg`,
  "Express / Node.js": `${CDN}/nodejs-icon.svg`,
  "HTML5 / CSS": `${CDN}/html-5.svg`,
  "Tailwind CSS": `${CDN}/tailwindcss-icon.svg`,
  Python: `${CDN}/python.svg`,
  AWS: `${CDN}/aws.svg`,
  "AWS Serverless": `${CDN}/aws.svg`,
  "AWS S3": `${CDN}/aws-s3.svg`,
  S3: `${CDN}/aws-s3.svg`,
  PostgreSQL: `${CDN}/postgresql.svg`,
  Supabase: `${CDN}/supabase-icon.svg`,
  "SQL / MySQL": `${CDN}/mysql.svg`,
  Redux: `${CDN}/redux.svg`,
  "React Query": `${CDN}/react-query-icon.svg`,
  Express: `${CDN}/express.svg`,
  FastAPI: `${CDN}/fastapi.svg`,
  OpenAI: `${CDN}/openai.svg`,
  Playwright: `${CDN}/playwright.svg`,
  Stripe: `${CDN}/stripe.svg`,
  Figma: `${CDN}/figma.svg`,
  "Material UI": `${CDN}/material-ui.svg`,
  "Adobe XD": `${CDN}/adobe-xd.svg`,
  Zeplin: `${CDN}/zeplin.svg`,
  Java: `${CDN}/java.svg`,
  Heroku: `${CDN}/heroku.svg`,
  Netlify: `${CDN}/netlify.svg`,
  Mapbox: `${CDN}/mapbox.svg`,
  ".NET Core": `${CDN}/dotnet.svg`,
  "Azure SQL": `${CDN}/microsoft-azure.svg`,
};

const SKILLS: { name: string; icon?: string }[] = [
  { name: "JavaScript (ES6)" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Remix" },
  { name: "Express / Node.js" },
  { name: "HTML5 / CSS" },
  { name: "Tailwind CSS" },
  { name: "Python" },
  { name: "AWS" },
  { name: "PostgreSQL" },
  { name: "Supabase" },
  { name: "SQL / MySQL" },
  { name: "Redux" },
  { name: "React Query" },
  { name: "Claude / Cursor" },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
      {children}
    </h2>
  );
}

function JobCard({ job }: { job: (typeof EXPERIENCE)[number] }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
          <CardTitle className="text-base font-semibold">{job.title}</CardTitle>
          <span className="shrink-0 text-xs text-muted-foreground">
            {job.period}
          </span>
        </div>
        <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          {job.companyHref ? (
            <Link
              href={job.companyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 hover:underline underline-offset-4"
            >
              {job.company}
            </Link>
          ) : (
            job.company
          )}
          {job.remote && (
            <span className="rounded-full border border-indigo-300 px-2 py-0.5 text-xs font-medium text-indigo-500 dark:border-indigo-700 dark:text-indigo-400">
              Remote
            </span>
          )}
          {job.location && (
            <span className="text-xs font-normal text-muted-foreground">
              {job.location}
            </span>
          )}
        </p>
      </CardHeader>
      <CardContent>
        <ul className="mb-3 space-y-1.5">
          {job.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-indigo-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        {job.tech && (
          <div className="flex flex-wrap gap-1.5 border-t border-border pt-3">
            {job.tech.map((t) => (
              <span
                key={t}
                className="flex items-center gap-1 rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {TECH_ICONS[t] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={TECH_ICONS[t]}
                    alt=""
                    aria-hidden="true"
                    className="size-3 shrink-0"
                  />
                )}
                {t}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-8">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tighter text-indigo-500 dark:text-indigo-400 sm:text-5xl">
            Darwin Smith
          </h1>
          <p className="mt-1 text-lg font-medium tracking-tight text-muted-foreground">
            Senior Software Developer
          </p>
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
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="https://github.com/darwin911"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4 fill-current"
              aria-hidden="true"
            >
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
            <svg
              viewBox="0 0 24 24"
              className="size-4 fill-current"
              aria-hidden="true"
            >
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
          <Button asChild size="sm">
            <a
              href="/DarwinSmithResume-june-2026.pdf"
              download="Darwin-Smith-Resume.pdf"
            >
              <svg
                viewBox="0 0 24 24"
                className="fill-current"
                aria-hidden="true"
              >
                <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
              </svg>
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      <p className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Senior Software Developer with 7 years building production React and
        Next.js applications across startups, scale-ups, and product companies.
        I care about the details that often get skipped: accessibility (WCAG),
        semantic HTML, cross-browser and device compatibility, and UIs that hold
        up under real usage. I&apos;ve led technical direction as a founding
        engineer and shipped across the full stack when the team needed it. AI
        tooling (Claude Code, Cursor) is a core part of how I build and iterate.
      </p>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        <aside className="flex flex-col gap-10 lg:w-64 lg:shrink-0">
          <section>
            <SectionHeading>Skills &amp; Tools</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(({ name }) => (
                <span
                  key={name}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {TECH_ICONS[name] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={TECH_ICONS[name]}
                      alt=""
                      aria-hidden="true"
                      className="size-3.5 shrink-0"
                    />
                  )}
                  {name}
                </span>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading>Education</SectionHeading>
            <div className="flex flex-col gap-4">
              {EDUCATION.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-sm font-semibold leading-snug">
                    {edu.degree}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {edu.school}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {edu.period} · {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <section className="min-w-0 flex-1">
          <SectionHeading>Experience</SectionHeading>

          {/* Desktop: horizontal scrollable timeline */}
          <div className="hidden lg:block">
            {/* direction:rtl anchors scrollLeft=0 to the right edge, so most recent card is visible on load.
                Each card resets to direction:ltr so text and layout are unaffected. */}
            <ExperienceScrollWrapper step={CARD_WIDTH + CARD_GAP}>
              <div className="flex min-w-max [direction:rtl]">
                {EXPERIENCE.map((job) => (
                  <div
                    key={`${job.company}-${job.period}`}
                    className="relative shrink-0 snap-center [scroll-snap-stop:always] [direction:ltr]"
                    style={{
                      width: CARD_WIDTH + CARD_GAP,
                      paddingLeft: CARD_GAP / 2,
                      paddingRight: CARD_GAP / 2,
                    }}
                  >
                    {/* Timeline track segment — inset-x-0 spans the full cell (card + gap) so segments chain */}
                    <div className="absolute inset-x-0 top-6 h-px bg-border" />
                    {/* Timeline dot — centered over the card content, offset by the left padding */}
                    <div
                      className="absolute top-6 z-10 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 ring-2 ring-background"
                      style={{ left: CARD_GAP / 2 + CARD_WIDTH / 2 }}
                    />
                    {/* Timeline label — company + title + period above the dot */}
                    <div className="mb-2 pt-9 text-center">
                      <p className="whitespace-nowrap text-xs font-semibold text-foreground">
                        {job.company}
                      </p>
                      <p className="whitespace-nowrap text-xs text-muted-foreground">
                        {job.title} · {job.period}
                      </p>
                    </div>
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            </ExperienceScrollWrapper>
          </div>

          {/* Mobile: vertical stack */}
          <div className="flex flex-col gap-4 lg:hidden">
            {EXPERIENCE.map((job) => (
              <JobCard key={`${job.company}-${job.period}`} job={job} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
