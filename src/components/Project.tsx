import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button
} from '@material-ui/core';

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

const styles = {
  Card: {
    maxWidth: 400,
    margin: '100px auto',
    borderRadius: 5,
    backgroundColor: 'transparent'
  },
  CardImg: {
    height: '250px',
    backgroundPosition: 'top'
  }
};

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <Card raised style={styles.Card}>
      <CardMedia image={project.img} title='Vinyl' style={styles.CardImg} />
      <CardContent style={{ backgroundColor: 'white' }}>
        <Typography gutterBottom variant='h5' component='h2' align='left'>
          {project.title}
        </Typography>

        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          align='left'>
          {project.description}
        </Typography>
      </CardContent>

      <CardActions style={{ backgroundColor: 'white' }}>
        <Button
          size='small'
          color='default'
          href={project.link}
          target='_blank noreferrer'
          rel='noopener'>
          Live Site
        </Button>
        {project.github && (
          <Button
            aria-label='github'
            size='small'
            color='default'
            href={project.github}
            target='_blank noreferrer'
            rel='noopener'
            endIcon={<GitHubIcon style={{ color: 'black' }} />}>
            Source Code
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
