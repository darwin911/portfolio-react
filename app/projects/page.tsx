import Carousel from "@/components/carousel";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS } from "@/components/shared/shared";

export default function ProjectsPage() {
  return (
    <main className="relative flex h-full flex-col items-center justify-center overflow-hidden px-4 py-8 sm:px-8 sm:py-20 md:py-24">
      <h1 className="mb-10 text-3xl font-semibold tracking-tighter text-stone-800 drop-shadow-heading  dark:text-zinc-50 dark:drop-shadow-heading-light sm:text-5xl md:text-7xl lg:whitespace-nowrap">
        Projects
      </h1>
      <div className="max-w-sm md:max-w-lg lg:max-w-5xl">
        <Carousel>
          {PROJECTS.map((data) => {
            return (
              <ProjectCard
                key={data.id}
                href={data.href}
                imgSrc={data.imgSrc}
                title={data.title}
                description={data.description}
                githubLink={data.githubLink}
              />
            );
          })}
        </Carousel>
      </div>
    </main>
  );
}
