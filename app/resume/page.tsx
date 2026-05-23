import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resume | Darwin Smith",
  robots: { index: false, follow: false },
};

const S = "font-semibold text-foreground";

const EXPERIENCE: {
  title: string;
  company: string;
  companyHref?: string;
  remote?: boolean;
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
      <>Delivered full-stack features across a <strong className={S}>React/TypeScript</strong> dashboard and mobile app for an industrial asset management platform.</>,
      <>Owned a <strong className={S}>mobile/tablet responsiveness overhaul</strong> across two applications — resolving iOS-specific keyboard, scroll, and layout issues across dozens of views, forms, and components.</>,
      <>Shipped new <strong className={S}>API endpoints</strong> for equipment filtering, inspection dates, and work order history; added <strong className={S}>CSV export</strong> for event history used by hundreds of field service users and admins.</>,
      <>Contributed to a <strong className={S}>~50% reduction in initial page load time</strong> through SQL query restructuring and frontend architecture improvements.</>,
      <>Acted as the <strong className={S}>front-end authority</strong> on the team — advising on implementation approaches and pushing back on PM and client requests that lacked technical or design grounding.</>,
    ],
    tech: ["React", "TypeScript", ".NET Core", "Azure SQL", "LINQ"],
  },
  {
    title: "Founding Engineer",
    company: "Ruffo (YC S22)",
    remote: true,
    period: "Feb 2024 – Nov 2024",
    bullets: [
      <>Built and launched a custom <strong className={S}>marketing landing page</strong> and dashboard backed by Postgres on <strong className={S}>Supabase</strong>.</>,
      <>Developed a greenfield <strong className={S}>AI product</strong> integrating <strong className={S}>OpenAI</strong> and custom LLMs for context-aware role-play assistants on web and phone.</>,
      <>Advised product and operations teams on technical direction for features and development priorities.</>,
    ],
    tech: ["Next.js", "Python", "FastAPI", "AWS", "Supabase", "OpenAI"],
  },
  {
    title: "Senior Developer",
    company: "Ironforge",
    remote: true,
    period: "Apr 2023 – Oct 2023",
    bullets: [
      <>Built core features of a <strong className={S}>Solana developer platform</strong> — program management dashboard with client-side search, multi-step program creation flow, <strong className={S}>RPC Gateway</strong> configuration, and a settings system covering API keys, billing, team management, and <strong className={S}>webhook integration via Svix</strong>.</>,
      <>Developed a shareable <strong className={S}>API Playground</strong> (Requests Library) — implementing save/restore of requests, shareable URL generation, collection management, and paginated data export modes for RPC calls.</>,
      <>Designed and shipped the <strong className={S}>marketing site</strong> from Figma wireframes, including custom animated SVG hero assets, a pricing page with dynamic formatting logic, and a contact/demo form.</>,
      <>Established <strong className={S}>Playwright E2E test infrastructure</strong> from scratch; wrote reference tests covering core user flows across the dashboard.</>,
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Playwright", "Svix", "Stripe", "Figma"],
  },
  {
    title: "Software Engineer II",
    company: "RECUR Forever Inc.",
    remote: true,
    period: "Jun 2022 – Apr 2023",
    bullets: [
      <>Built custom platform components and <strong className={S}>brand-specific features</strong> end-to-end across multiple client codebases.</>,
      <>Co-created a <strong className={S}>product design system in Figma</strong> with the design team; presented feature work in bi-weekly engineering demos.</>,
    ],
    tech: ["Next.js", "Remix", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Lead Developer",
    company: "Freeman Company",
    remote: true,
    period: "Jun 2020 – May 2022",
    bullets: [
      <>Delivered client-specific virtual conference experiences on the <strong className={S}>Online Event Pro</strong> platform — adapting features and UI to each client&apos;s spec during the rapid industry shift to remote events in 2020.</>,
      <>Maintained and expanded a custom component library aligned to design systems in <strong className={S}>Adobe XD</strong> and <strong className={S}>Zeplin</strong>.</>,
      <>Led cross-functional meetings for feature planning, bug triage, and client requests.</>,
      <>Integrated multiple <strong className={S}>third-party services</strong> and user registration data providers.</>,
    ],
    tech: ["React", "Express", "AWS Serverless", "S3", "Adobe XD", "Zeplin"],
  },
  {
    title: "Developer",
    company: "Vessel Technologies, Inc.",
    period: "Jun 2019 – Jan 2020",
    bullets: [
      <>Built a mobile-first marketing page with a <strong className={S}>custom carousel</strong> and interactive home builder tool.</>,
      <>Migrated a <strong className={S}>Vaadin (Android) Java</strong> control panel UI to a modern responsive web interface.</>,
    ],
    tech: ["React", "Express", "CSS", "Java", "Heroku", "Netlify"],
  },
  {
    title: "Web Development Immersive Fellow",
    company: "General Assembly NYC",
    period: "Jan 2019 – Apr 2019",
    bullets: [
      <><strong className={S}>CitiBike Stations</strong> — live station map consuming NYC Open Data and Google Geocoding APIs, rendered on Mapbox.</>,
      <><strong className={S}>Vinyl</strong> — full-stack music app with AWS S3 audio uploads and custom playback UI controls.</>,
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

const SKILLS = [
  "JavaScript (ES6)",
  "TypeScript",
  "React",
  "Next.js",
  "Remix",
  "Express / Node.js",
  "HTML5 / CSS",
  "Tailwind CSS",
  "Python",
  "AWS",
  "PostgreSQL",
  "Supabase",
  "SQL / MySQL",
  "Claude / Cursor",
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
      {children}
    </h2>
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
        YC-backed AI company, and at established product teams serving
        hundreds of users in the field. I&apos;m known for bridging the gap
        between technical and non-technical stakeholders — translating
        tradeoffs into clear decisions for founders, PMs, and clients, and
        pushing back when a proposed approach would hurt the product.
        Comfortable owning features end-to-end, moving fast in greenfield
        codebases, and bringing clarity to legacy ones.
      </p>

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        <aside className="flex flex-col gap-10 lg:w-64 lg:shrink-0">
          <section>
            <SectionHeading>Skills &amp; Tools</SectionHeading>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {skill}
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
          <div className="flex flex-col gap-4">
            {EXPERIENCE.map((job) => (
              <Card key={`${job.company}-${job.period}`}>
                <CardHeader className="pb-2">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <CardTitle className="text-base font-semibold">
                      {job.title}
                    </CardTitle>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
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
                          className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
