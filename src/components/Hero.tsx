import React from 'react';
import { Typography } from '@material-ui/core';

export const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <article className='hero__text-container'>
        <Typography variant='h3' component='h1'>
          Darwin Smith
        </Typography>
        <Typography variant='h5' component='h2'>
          Full-stack Developer
        </Typography>
      </article>
    </section>
  );
};
