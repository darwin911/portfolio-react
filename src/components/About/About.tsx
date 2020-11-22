import { Container, Typography } from '@material-ui/core';

import { DonateButton } from './Donate';
import { Github } from './Github';
import React from 'react';
import { SkillsAndTools } from './SkillsAndTools';
import data from '../../assets/data.js';
import profilePicture from '../../assets/images/profilepic_white-bg.jpg';
import { styles } from '../styles';

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
            <h6 className='about__avatar-headline'>Darwin Smith</h6>
            <DonateButton />
          </div>

          <p className='about__blurb'>{data.blurb}</p>
        </div>

        <Github />
        <SkillsAndTools />
      </Container>
    </section>
  );
};

