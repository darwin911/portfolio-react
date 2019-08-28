import React from 'react';

const Projects = () => {
  return (
    <section className='projects'>
      <h2>Projects</h2>

      <img class='project-pic' src='img/vinyl.png' alt='Vinyl' />
      <div class='project-links'>
        <a
          class='live-site'
          href='https://vinyl.surge.sh'
          target='_blank'
          rel='noopener noreferrer'>
          Live Site
        </a>
        <a
          href='https://github.com/darwin911/vinyl-express'
          target='_blank noreferrer'
          rel='noopener'>
          <i class='fab fa-github project-icon-github'></i>
        </a>
      </div>

      <p class='img-description'>
        Vinyl, a CRUD app, built with an Express server and a React front-end.
        The UI controls are custom made and controlled with state. Tracks are
        uploaded through the express server to an AWS S3 Bucket.
      </p>
    </section>
  );
};

export default Projects;
