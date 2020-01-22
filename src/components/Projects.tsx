import React from 'react';
import data from '../assets/data';
import { Project } from './Project';
import { Typography, Container } from '@material-ui/core';

export const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <Typography variant='h3' component='h2'>
        Projects
      </Typography>
      <Container className='projects__container'>
        {data.projects.map(project => (
          <Project project={project} key={project.title} />
        ))}
      </Container>
    </section>
  );
};
