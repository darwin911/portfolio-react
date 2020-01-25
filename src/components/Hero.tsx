import React from 'react';
import { Typography } from '@material-ui/core';

export const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <article className='hero__text-container'>
        <Typography variant='h1' component='h1'>
          Darwin Smith
        </Typography>
        <Typography variant='h2' component='h2'>
          Full-stack Developer
        </Typography>
      </article>
    </section>
  );
};
