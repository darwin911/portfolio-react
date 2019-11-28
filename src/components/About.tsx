import React from 'react';
import profilePicture from '../assets/images/profile-pic.jpg';
import data from '../assets/data.js';

import { ListItem } from './ListItem';

export const About: React.FC = () => {
  return (
    <section className='about'>
      <div className='about__container'>
        <h2 className='about__heading'>About Me</h2>
        <article className='about__header'>
          <div className='about__profile-picture-container'>
            <img
              src={profilePicture}
              alt='Darwin Smith'
              className='about__profile-picture'
            />
          </div>

          <p className='about__blurb'>{data.blurb}</p>
        </article>
        <h3>Skills and Tools</h3>
        <ul className='about__skill-list'>
          {data.skills.map(item => (
            <ListItem
              title={item.title}
              styles={item.styles}
              key={item.title}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
