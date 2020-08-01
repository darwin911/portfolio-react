import React from 'react';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { Countdown } from './Countdown';

export const Hero: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-25%' },
  }
  return (
    <section className='hero'>
      <motion.article
        className='hero__text-container'
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.0 }}
        onAnimationComplete={() => setVisible(true)}>
        <Typography variant='h2' component='h1'>
          Darwin Smith
        </Typography>
        <motion.span
          initial={{opacity: 0, y: '150%'}}
          animate={visible ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Typography variant='h5' component='h2'>
          Full-stack | Developer | New York City
          </Typography>
        </motion.span>
      </motion.article>
      <Countdown />
    </section>
  );
};
