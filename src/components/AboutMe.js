import React from 'react';
import profilePicture from '../assets/profile-pic.jpg';
import data from '../assets/data.js';

import ListItem from './ListItem';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h2>About Me</h2>
      <img
        src={profilePicture}
        alt='Darwin Smith'
        className='profile-picture'
      />

      <p>{data.blurb}</p>

      <h3>Skills and Tools</h3>
      <ul>
        {data.skills.map(item => (
          <ListItem title={item.title} styles={item.styles} key={item.title} />
        ))}
      </ul>
    </section>
  );
};

export default AboutMe;
