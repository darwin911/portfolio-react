import React, { useEffect, useState } from 'react';
import profilePicture from '../assets/images/profile-pic.jpg';
import data from '../assets/data.js';
import { styles } from './styles';
import { SkillsAndTools } from './SkillsAndTools';
import { Github } from './Github';
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Avatar,
  Container
} from '@material-ui/core';
import axios from 'axios';

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
  const [githubData, setGithubData] = useState();

  const loadGithubData = async () => {
    const resp = await axios(
      `https://api.github.com/users/darwin911?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setGithubData(resp.data);
  };

  useEffect(() => {
    loadGithubData();
  }, []);
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
            variant='caption'
            component='p'
            align='left'
            style={{
              padding: '0 1rem',
              fontWeight: 900
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

        {githubData && (
          <Github
            repos={githubData.public_repos}
            followers={githubData.followers}
            following={githubData.following}
          />
        )}
        <SkillsAndTools />

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
