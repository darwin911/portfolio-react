import { ProjectCard } from "./ProjectCard";
import React from "react";
import { data } from "../assets/data";

export const Projects = () => {
  return (
    <section className="projects">
      <div className="container-md">
        <h2 className="section-heading">Projects</h2>
        <div className="projects__container">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
