import React from 'react';
import data from '../assets/data';
import { Project } from './Project';
import { Typography, Container } from '@material-ui/core';

const styles = {
  Section: {
    padding: '4rem 0'
  },
  SectionHeading: {
    marginBottom: '1.5rem',
    fontWeight: 700
  }
};

export const Projects = () => {
  return (
    <section id='projects' style={{ ...styles.Section, background: '#FDD835' }}>
      <Container maxWidth='md'>
        <Typography variant='h3' component='h2' style={styles.SectionHeading}>
          Projects
        </Typography>
        {data.projects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </Container>
    </section>
  );
};
