import React, { useState } from 'react';

interface Project {
  img: string;
  title: string;
  link: string;
  description: string;
  github?: string | undefined;
}

interface Props {
  project: Project;
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <article className='project'>
      <div className={'project__body'}>
        <div className='project__img_wrapper'>
          <img className='project__img' src={project.img} alt={project.title} />
        </div>
        <div className='project__header'>
          <h3 className='project__title'>{project.title}</h3>
          <div className='project__links'>
            <button className='project__live-link'>Live Site</button>
            <a href={project.github} target='_blank noreferrer' rel='noopener'>
              <i className='fab fa-github project__github-icon'></i>
            </a>
          </div>
        </div>
        <p className='project__description'>{project.description}</p>
      </div>
    </article>
  );
};
