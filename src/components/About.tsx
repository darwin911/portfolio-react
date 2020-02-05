import React, { useEffect, useState } from 'react';
import profilePicture from '../assets/images/profilepic_white-bg.jpg';
import data from '../assets/data.js';
import { styles } from './styles';
import { SkillsAndTools } from './SkillsAndTools';
import { Github } from './Github';
import { Typography, Container } from '@material-ui/core';
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

export const About: React.FC = () => {
  const [githubData, setGithubData] = useState();

  const loadGithubData = async () => {
    const resp = await github.get('/users/darwin911');
    setGithubData(resp.data);
  };

  useEffect(() => {
    loadGithubData();
  }, []);

  return (
    <section
      className='about'
      style={{ ...styles.Section, background: 'white' }}>
      <Container maxWidth='sm'>
        <Typography
          variant='h1'
          component='h2'
          gutterBottom
          style={styles.SectionHeading}>
          About
        </Typography>
        <div className='about__card'>
          <div className='about__card-inner-container'>
            <img
              src={profilePicture}
              alt="Darwin Smith's profile"
              className='about__avatar'
            />
            <h6 className='about__avatar-headline'>Hi, I'm Darwin!</h6>
          </div>

          <p className='about__blurb'>{data.blurb}</p>
        </div>

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
