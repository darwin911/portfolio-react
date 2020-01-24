import React from 'react';
import data from '../assets/data';
import { Project } from './Project';
import { Typography, Container, Grid } from '@material-ui/core';
import { styles } from './styles';

export const Projects = () => {
  return (
    <section id='projects' style={{ ...styles.Section, background: '#FDD835' }}>
      <Container maxWidth='md'>
        <Typography variant='h3' component='h2' style={styles.SectionHeading}>
          Projects
        </Typography>
        <Grid
          style={styles.GridContainer}
          container
          spacing={2}
          direction='row'>
          {data.projects.map(project => (
            <Grid item key={project.id} sm={12} alignContent='center'>
              <Project project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
