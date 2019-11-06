import React from 'react';
import data from '../assets/data';
import { Project } from './Project';

export const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {data.projects.map(project => (
        <Project project={project} key={project.title} />
      ))}
    </section>
  );
};
