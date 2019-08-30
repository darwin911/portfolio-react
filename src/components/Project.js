import React from 'react';

const Project = ({ project }) => {
  return (
    <article>
      <img className='project-pic' src={project.img} alt={project.title} />
      <div className='project-links'>
        <a
          className='live-site'
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'>
          Live Site
        </a>
        <a href={project.github} target='_blank noreferrer' rel='noopener'>
          <i className='fab fa-github project-icon-github'></i>
        </a>
      </div>

      <p className='img-description'>{project.description}</p>
    </article>
  );
};

export default Project;
