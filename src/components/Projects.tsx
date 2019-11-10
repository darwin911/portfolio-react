import React from 'react';
import data from '../assets/data';
import { Project } from './Project';

export const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='projects__heading'>Projects</h2>
      <div className='projects__container'>
        {data.projects.map(project => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};
