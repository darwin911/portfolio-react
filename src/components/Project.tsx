import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { styles } from './styles';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CardActionArea
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

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <Card style={styles.Card} className='project' tabIndex={0}>
      <CardActionArea
        style={{ borderRadius: 10 }}
        href={project.link}
        target='_blank'>
        <CardMedia
          image={project.img}
          title='Vinyl'
          style={styles.CardImg}
          className='project__img'
        />
      </CardActionArea>
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

      <CardActions>
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
