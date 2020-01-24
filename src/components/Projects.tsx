import React from 'react';
import data from '../assets/data';
import { Project } from './Project';
import { Typography, Container } from '@material-ui/core';
import { styles } from './styles';

export const Projects = () => {
  return (
    <section id='projects' style={{ ...styles.Section, background: '#FDD835' }}>
      <Container maxWidth='md'>
        <Typography variant='h3' component='h2' style={styles.SectionHeading}>
          Projects
        </Typography>
        <div className='projects__container'>
          {data.projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
