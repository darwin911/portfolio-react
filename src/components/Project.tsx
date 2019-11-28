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
    <article className={`project${isHovered ? ' triggered' : ''}`}>
      <div className={'project__body'}>
        <img className='project__img' src={project.img} alt={project.title} />
        <div className='project__header'>
          <h3 className='project__title'>{project.title}</h3>
          <div className='project__links'>
            <button
              className='project__live-link'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              Live Site
            </button>
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
