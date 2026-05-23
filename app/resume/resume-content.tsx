"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const S = "font-semibold text-foreground";

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
      <>Delivered full-stack features across a <strong className={S}>React/TypeScript</strong> dashboard and mobile app for <strong className={S}>MyMedGas</strong>, an industrial asset management platform for the medical gas industry.</>,
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
      <>Built brand-specific <strong className={S}>NFT storefront</strong> experiences end-to-end for major entertainment IP (ViacomCBS, Sanrio, Paramount) — adapting shared platform components to each brand&apos;s design spec across multiple client codebases.</>,
      <>Contributed to a <strong className={S}>mobile-first NFT marketplace</strong> that abstracted wallet and crypto complexity into familiar e-commerce patterns, enabling a mainstream consumer experience across all brand storefronts.</>,
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
      <>Delivered client-specific <strong className={S}>virtual conference experiences</strong> on Freeman&apos;s Online Event Pro platform — building custom homepage modules, virtual exhibit halls, and session flows for enterprise clients during the industry&apos;s rapid 2020 pivot to remote events.</>,
      <>Integrated <strong className={S}>Stream Chat</strong> for real-time conference messaging alongside multiple third-party <strong className={S}>user registration</strong> and data providers.</>,
      <>Maintained and expanded a custom component library aligned to design systems in <strong className={S}>Adobe XD</strong> and <strong className={S}>Zeplin</strong>.</>,
      <>Led cross-functional meetings for feature planning, bug triage, and client requests.</>,
    ],
    tech: ["React", "Express", "AWS Serverless", "S3", "Adobe XD", "Zeplin"],
  },
  {
    title: "Developer",
    company: "Vessel Technologies, Inc.",
    location: "Manhattan, New York, NY",
    period: "Jun 2019 – Jan 2020",
    bullets: [
      <>Built a <strong className={S}>mobile-first marketing site</strong> for a modular net-zero housing startup — including a custom carousel and an interactive home configurator tool.</>,
      <>Migrated a legacy <strong className={S}>Vaadin (Java)</strong> control panel to a modern responsive web interface for the company&apos;s <strong className={S}>smart building management platform</strong> (vOS).</>,
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

function normalizeSkill(skill: string): string[] {
  return skill
    .toLowerCase()
    .replace(/\s*\([^)]*\)/g, "")
    .split(" / ")
    .map((s) => s.trim());
}

function matchesSkill(skill: string, tech: string): boolean {
  const parts = normalizeSkill(skill);
  const t = tech.toLowerCase();
  return parts.some((p) => t === p || t.includes(p) || p.includes(t));
}

// Prefer exact part match over partial match to avoid e.g. "CSS" matching "Tailwind CSS"
function skillForTech(tech: string): string | undefined {
  const t = tech.toLowerCase();
  const exact = SKILLS.find((s) =>
    normalizeSkill(s).some((p) => p === t)
  );
  return exact ?? SKILLS.find((s) => matchesSkill(s, tech));
}

export function ResumeContent() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = timelineRef.current;
    const line = lineRef.current;
    if (!el || !line) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) line.style.height = "100%";
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
      {/* Sidebar */}
      <aside className="flex flex-col gap-10 lg:w-64 lg:shrink-0">
        <section>
          <SectionHeading>Skills &amp; Tools</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => {
              const active = hoveredSkill === skill;
              const dimmed = hoveredSkill !== null && !active;
              return (
                <span
                  key={skill}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={[
                    "cursor-default rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-150",
                    active
                      ? "border-indigo-400 bg-indigo-50 text-indigo-600 dark:border-indigo-500 dark:bg-indigo-950 dark:text-indigo-300"
                      : dimmed
                        ? "border-border bg-muted text-muted-foreground/30"
                        : "border-border bg-muted text-muted-foreground",
                  ].join(" ")}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </section>

        <section>
          <SectionHeading>Education</SectionHeading>
          <div className="flex flex-col gap-4">
            {EDUCATION.map((edu) => (
              <div key={edu.degree}>
                <p className="text-sm font-semibold leading-snug">{edu.degree}</p>
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

      {/* Experience */}
      <section className="min-w-0 flex-1">
        <SectionHeading>Experience</SectionHeading>
        <div ref={timelineRef} className="relative flex flex-col gap-4 pl-5">
          {/* Vertical timeline line — animates height into view */}
          <div
            ref={lineRef}
            style={{ height: 0 }}
            className="pointer-events-none absolute left-[9px] top-0 w-px bg-gradient-to-b from-indigo-400 via-indigo-300 to-transparent transition-[height] duration-[1400ms] ease-out dark:from-indigo-600 dark:via-indigo-800"
          />

          {EXPERIENCE.map((job) => {
            const cardMatches =
              hoveredSkill !== null &&
              (job.tech?.some((t) => matchesSkill(hoveredSkill, t)) ?? false);
            const cardDimmed = hoveredSkill !== null && !cardMatches;

            return (
              <div key={`${job.company}-${job.period}`} className="relative">
                {/* Timeline dot */}
                <span
                  className={[
                    "absolute left-0 top-5 size-2 -translate-x-1/2 rounded-full ring-2 ring-background transition-colors duration-150",
                    cardMatches
                      ? "bg-indigo-500 dark:bg-indigo-400"
                      : "bg-indigo-300 dark:bg-indigo-700",
                  ].join(" ")}
                />

                <Card
                  className={[
                    "transition-opacity duration-200",
                    cardDimmed ? "opacity-40" : "opacity-100",
                  ].join(" ")}
                >
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
                        {job.tech.map((t) => {
                          const techMatches =
                            hoveredSkill !== null && matchesSkill(hoveredSkill, t);
                          const techDimmed =
                            hoveredSkill !== null && !techMatches;
                          return (
                            <span
                              key={t}
                              onMouseEnter={() => {
                                const match = skillForTech(t);
                                if (match) setHoveredSkill(match);
                              }}
                              onMouseLeave={() => setHoveredSkill(null)}
                              className={[
                                "cursor-default rounded px-2 py-0.5 text-xs font-medium transition-colors duration-150",
                                techMatches
                                  ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300"
                                  : techDimmed
                                    ? "bg-muted text-muted-foreground/25"
                                    : "bg-muted text-muted-foreground",
                              ].join(" ")}
                            >
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
