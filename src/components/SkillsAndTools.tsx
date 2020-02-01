import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ListItem } from './ListItem';
import data from '../assets/data.js';

export const SkillsAndTools = () => {
  return (
    <Box my={6}>
      <Typography
        variant='h3'
        style={{
          fontWeight: 'bold',
          margin: 8,
          textShadow:
            'rgba(0, 0, 0, 0.1) 1px 4px 2px, rgba(0, 0, 0, 0.1) -2px 3px 8px'
        }}>
        Skills and Tools
      </Typography>
      <ul className='about__skill-list'>
        {data.skills.map(item => (
          <ListItem title={item.title} styles={item.styles} key={item.title} />
        ))}
      </ul>
    </Box>
  );
};
