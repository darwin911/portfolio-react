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
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article className='project'>
      <img className='project__img' src={project.img} alt={project.title} />

      <div className={`project__body${isHovered ? ' triggered' : ''}`}>
        <h3 className='project__title'>{project.title}</h3>
        <p className='project__description'>{project.description}</p>
        <div className='project__links'>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <a
              className='project__live-link'
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'>
              Live Site
            </a>
          </button>
          <a href={project.github} target='_blank noreferrer' rel='noopener'>
            <i className='fab fa-github project__github-icon'></i>
          </a>
        </div>
      </div>
    </article>
  );
};
