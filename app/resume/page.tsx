import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Resume | Darwin Smith",
  robots: { index: false, follow: false },
};

const EXPERIENCE = [
  {
    title: "Senior Developer",
    company: "BigPixel",
    period: "Jan 2025 – Present",
    bullets: [
      "Contributed full-stack development on a React/TypeScript web dashboard and mobile web application for an industrial asset management platform, backed by a .NET Core API and Azure SQL.",
      "Led a significant mobile and tablet responsiveness initiative — resolving iOS-specific keyboard, scroll, and layout bugs.",
      "Extended .NET Core API controllers to support new endpoints for equipment filtering, inspection dates, work order history, and facility contacts. Fixed data integrity issues in merge/queue operations, added CSV export for event history, and improved LINQ queries against Azure SQL.",
      "Worked across the full delivery pipeline — from SQL query tuning and controller-level logic to React component state, responsive CSS, and cross-browser compatibility — managing release versioning and deploying through test, staging, and production environments.",
    ],
  },
  {
    title: "Founding Engineer",
    company: "Ruffo (YC S22)",
    period: "Feb 2024 – Nov 2024",
    bullets: [
      "Developed custom landing page and dashboard UI backed by a Postgres database deployed on Supabase.",
      "Developed greenfield product integrating with LLMs (OpenAI and custom models) to provide context-aware role-play with AI assistants for web and phone calls.",
      "Supported and advised product and operations team members with technical direction on product features and development.",
      "Next.js self-hosted on AWS, and a Python FastAPI server on Fly.io instances.",
    ],
  },
  {
    title: "Senior Developer",
    company: "Ironforge",
    period: "Apr 2023 – Oct 2023",
    bullets: [
      "Led development of a bespoke product landing page, crafting custom SVGs and utilizing Figma to generate wireframe/base designs. (framer-motion, Tailwind)",
      "Improved and refactored pages and UI components, prioritizing reusability for future development. Implemented and maintained a robust tech stack leveraging Next.js (13.4+), TypeScript, and Tailwind CSS to enhance scalability and maintainability.",
    ],
  },
  {
    title: "Software Engineer II",
    company: "RECUR Forever Inc.",
    period: "Jun 2022 – Apr 2023",
    bullets: [
      "Developed custom components and features for platform and brand-specific clients using Next.js, Remix, Tailwind CSS, and Material UI. Integrated features end-to-end across various codebases.",
      "Collaborated with developers and non-technical team members to refine and deliver platform features, including working with the design team to create a product design system in Figma. Presented feature work in bi-weekly technical engineering demos.",
    ],
  },
  {
    title: "Lead Developer",
    company: "Freeman Company",
    period: "Jun 2020 – May 2022",
    bullets: [
      "Developed mobile-first responsive, full-stack online event conference application (Online Event Pro) using React, Express, and AWS Serverless / S3.",
      "Contributed, maintained, and expanded custom components based on design systems implemented in Adobe XD and Zeplin. Worked with designers to improve consistency and accessibility of the design system.",
      "Wrote internal documentation for process and development portions of the web application.",
      "Led technical and non-technical meetings for product features, bugs, and client requests.",
      "Integrated with multiple third-party applications, services, and user registration data providers.",
    ],
  },
  {
    title: "Developer",
    company: "Vessel Technologies, Inc.",
    period: "Jun 2019 – Jan 2020",
    bullets: [
      "Designed mobile-first responsive UI/UX for a product marketing page with custom carousel and interactive home builder. Developed using React, Express, and CSS. Deployed backend to Heroku and Netlify.",
      "Migrated, restyled, and developed UI for a Java app from Vaadin (Android) for a Smart Affordable Container Homes control panel.",
    ],
  },
  {
    title: "Web Development Immersive Fellow",
    company: "General Assembly NYC",
    period: "Jan 2019 – Apr 2019",
    bullets: [
      "CitiBike Stations: Consumed NYC Open Data API to provide live data, using Google Geocoding API to convert user input to locations on a Mapbox map.",
      "Vinyl: React, Express, and PostgreSQL app connected to AWS S3 for audio uploads with custom UI controls.",
    ],
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

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-24 sm:px-8">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tighter text-emerald-500 dark:text-emerald-300 sm:text-5xl">
            Darwin Smith
          </h1>
          <p className="mt-1 text-lg font-medium tracking-tight text-muted-foreground">
            Software Developer · 7 years experience
          </p>
        </div>
        <Link
          href="/contact"
          className="text-sm text-sky-700 underline underline-offset-4 hover:text-sky-500 dark:text-sky-400"
        >
          Get in touch →
        </Link>
      </div>

      <p className="mb-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
        I specialize in building modern web applications with current tech
        stacks. I have a track record of delivering responsive front-end and
        full-stack solutions across legacy and greenfield codebases.
      </p>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Skills &amp; Tools
        </h2>
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

      {/* Experience */}
      <section className="mb-10">
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Experience
        </h2>
        <div className="flex flex-col gap-4">
          {EXPERIENCE.map((job) => (
            <Card key={`${job.company}-${job.period}`}>
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <CardTitle className="text-base font-semibold">
                    {job.title}
                  </CardTitle>
                  <span className="text-xs text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
                  {job.company}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Education
        </h2>
        <div className="flex flex-col gap-4">
          {EDUCATION.map((edu) => (
            <Card key={edu.degree}>
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <CardTitle className="text-base font-semibold">
                    {edu.degree}
                  </CardTitle>
                  <span className="text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
                  {edu.school}
                  <span className="ml-2 font-normal text-muted-foreground">
                    · {edu.location}
                  </span>
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
