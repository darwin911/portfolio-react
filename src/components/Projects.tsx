import { Container } from '@material-ui/core';
import { Project } from './Project';
import React from 'react';
import data from '../assets/data';
import { styles } from './styles';

export const Projects = () => {
  return (
    <section
      className='projects'
      style={{ ...styles.Section,  }}>
      <Container maxWidth='md'>
        <h2 className="section-heading">
          Projects
        </h2>
        <div className='projects__container'>
          {data.projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
