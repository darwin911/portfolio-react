import React from 'react';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <motion.article
        className='hero__text-container'
        animate={{ opacity: 1, y: 0 }}
        style={{ opacity: 0, y: 20 }}
        transition={{ duration: 2.25 }}>
        <Typography variant='h1' component='h1'>
          Darwin Smith
        </Typography>
        <Typography variant='h3' component='h2'>
          <motion.span>Full-stack</motion.span> Developer
        </Typography>
      </motion.article>
    </section>
  );
};
