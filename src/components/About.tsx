import React from 'react';
import profilePicture from '../assets/images/profilepic_white-bg.jpg';
import data from '../assets/data.js';
import { styles } from './styles';
import { SkillsAndTools } from './SkillsAndTools';
import { Github } from './Github';
import { Typography, Container } from '@material-ui/core';

export const About: React.FC = () => {
  return (
    <section className='about'>
      <Container maxWidth='sm'>
        <Typography variant='h1' component='h2' gutterBottom style={styles.SectionHeading}>
          About
        </Typography>
        <div className='about__card'>
          <div className='about__card-inner-container'>
            <img src={profilePicture} alt="Darwin Smith's profile" className='about__avatar' />
            <h6 className='about__avatar-headline'>Hi, I'm Darwin!</h6>
          </div>

          <p className='about__blurb'>{data.blurb}</p>
        </div>

        <Github />

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
