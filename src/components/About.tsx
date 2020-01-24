import React from 'react';
import profilePicture from '../assets/images/profile-pic.jpg';
import data from '../assets/data.js';
import { styles } from './styles';

import { ListItem } from './ListItem';
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Avatar,
  Container
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      margin: theme.spacing(2)
    },
    subheading: {
      margin: theme.spacing(1),
      fontWeight: theme.typography.fontWeightBold
    },
    blurb: {
      margin: theme.spacing(2)
    },
    avatar: {
      margin: theme.spacing(2),
      width: 100,
      height: 100
    }
  })
);

export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <section
      className='about'
      style={{ ...styles.Section, background: 'white' }}>
      <Container maxWidth='sm'>
        <Typography
          variant='h3'
          component='h2'
          gutterBottom
          style={styles.SectionHeading}>
          About
        </Typography>
        <header className='about__header'>
          <Avatar
            src={profilePicture}
            alt='Darwin Smith Avatar'
            className={classes.avatar}
          />

          <Typography
            variant='body1'
            align='justify'
            gutterBottom
            style={styles.Blurb}>
            {data.blurb}
          </Typography>
        </header>
        <Typography variant='h5' component='h3' className={classes.subheading}>
          Skills and Tools
        </Typography>
        <ul className='about__skill-list'>
          {data.skills.map(item => (
            <ListItem
              title={item.title}
              styles={item.styles}
              key={item.title}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};
