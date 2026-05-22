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
  period: string;
  bullets: React.ReactNode[];
  tech?: string[];
}[] = [
  {
    title: "Senior Developer",
    company: "BigPixel",
    period: "Jan 2025 – Present",
    bullets: [
      <>Delivered full-stack features across a <strong className={S}>React/TypeScript</strong> dashboard and mobile app for an industrial asset management platform.</>,
      <>Owned a <strong className={S}>mobile/tablet responsiveness overhaul</strong> — eliminating iOS-specific keyboard, scroll, and layout bugs across the product.</>,
      <>Shipped new <strong className={S}>API endpoints</strong> for equipment filtering, inspection dates, and work order history; fixed data integrity bugs in merge/queue flows and added <strong className={S}>CSV export</strong> for event history.</>,
      <>Worked end-to-end — <strong className={S}>SQL query tuning</strong>, .NET controller logic, React state, and responsive CSS — through test, staging, and production.</>,
    ],
    tech: ["React", "TypeScript", ".NET Core", "Azure SQL", "LINQ"],
  },
  {
    title: "Founding Engineer",
    company: "Ruffo (YC S22)",
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
    period: "Apr 2023 – Oct 2023",
    bullets: [
      <>Designed and built a bespoke product landing page from <strong className={S}>Figma</strong> wireframes, including <strong className={S}>custom SVGs</strong> and scroll animations.</>,
      <>Refactored and modernized UI components for reusability; established a clean, consistent <strong className={S}>Next.js 13.4+</strong> / TypeScript / Tailwind codebase.</>,
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "framer-motion", "Figma"],
  },
  {
    title: "Software Engineer II",
    company: "RECUR Forever Inc.",
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
    period: "Jun 2020 – May 2022",
    bullets: [
      <>Delivered client-specific virtual conference experiences on the <strong className={S}>Online Event Pro</strong> platform — adapting features and UI to each client's spec during the rapid industry shift to remote events in 2020.</>,
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
        <Link
          href="/contact"
          className="text-sm font-medium text-indigo-600 underline underline-offset-4 hover:text-indigo-400 dark:text-indigo-400"
        >
          Get in touch →
        </Link>
      </div>

      <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        I specialize in building modern web applications with current tech
        stacks. I have a track record of delivering responsive front-end and
        full-stack solutions across legacy and greenfield codebases.
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
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {job.company}
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
