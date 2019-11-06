import React from 'react';

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
    <article>
      <img className="project-pic" src={project.img} alt={project.title} />
      <div className="project-links">
        <a
          className="live-site"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
        <a href={project.github} target="_blank noreferrer" rel="noopener">
          <i className="fab fa-github project-icon-github"></i>
        </a>
      </div>

      <p className="img-description">{project.description}</p>
    </article>
  );
};
