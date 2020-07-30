import React from 'react';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className='hero'>
      <motion.article
        className='hero__text-container'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.25 }}>
        <Typography variant='h2' component='h1'>
          Darwin Smith
        </Typography>
        <Typography variant='h4' component='h2'>
          <motion.span>Full-stack</motion.span> Developer | New York City
        </Typography>
      </motion.article>
    </section>
  );
};
