import { Container, Typography } from '@material-ui/core';

import { Github } from './Github';
import React from 'react';
import { SkillsAndTools } from './SkillsAndTools';
import data from '../assets/data.js';
import profilePicture from '../assets/images/profilepic_white-bg.jpg';
import { styles } from './styles';

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

const DonateButton = () => {
  return (
    <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
      <input type='hidden' name='cmd' value='_donations' />
      <input type='hidden' name='business' value='74AG6PY82VARU' />
      <input type='hidden' name='currency_code' value='USD' />
      <input
        type='image'
        src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif'
        name='submit'
        title='PayPal - The safer, easier way to pay online!'
        alt='Donate with PayPal button'
      />
      <img alt='' src='https://www.paypal.com/en_US/i/scr/pixel.gif' width='1' height='1' />
    </form>
  );
};
