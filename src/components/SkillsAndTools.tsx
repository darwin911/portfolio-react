import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ListItem } from './ListItem';
import data from '../assets/data.js';
import { styles } from './styles';

export const SkillsAndTools = () => {
  return (
    <Box mb={6}>
      <Typography variant='h3' style={styles.AboutSubHeading}>
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
