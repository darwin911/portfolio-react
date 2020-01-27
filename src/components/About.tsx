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
  Container,
  Box
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
      <Container maxWidth='md'>
        <Typography
          variant='h1'
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
            style={{
              boxShadow:
                '1px 4px 2px rgba(0, 0, 0, 0.25), -2px 3px 8px rgba(0, 0, 0, 0.25)'
            }}
          />
          <Typography
            variant='h5'
            component='p'
            align='left'
            style={{
              padding: '0 1rem',
              lineHeight: 1,
              fontWeight: 900,
              margin: '1.75vw 0'
            }}>
            Hi, I'm Darwin!
          </Typography>

          <Typography
            variant='body1'
            align='justify'
            gutterBottom
            style={styles.Blurb}>
            {data.blurb}
          </Typography>
        </header>
        <Box my={6}>
          <Typography
            variant='h3'
            className={classes.subheading}
            style={{
              textShadow:
                'rgba(0, 0, 0, 0.1) 1px 4px 2px, rgba(0, 0, 0, 0.1) -2px 3px 8px'
            }}>
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
        </Box>
        {/* <Typography
          variant='h3'
          component='h3'
          className={classes.subheading}
          style={{
            textShadow:
              'rgba(0, 0, 0, 0.1) 1px 4px 2px, rgba(0, 0, 0, 0.1) -2px 3px 8px'
          }}>
          Experience
        </Typography> */}
      </Container>
    </section>
  );
};
