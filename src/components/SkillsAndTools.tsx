import React from 'react';
import {
  Box,
  Typography,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import { ListItem } from './ListItem';
import data from '../assets/data.js';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subheading: {
      margin: theme.spacing(1),
      fontWeight: theme.typography.fontWeightBold
    }
  })
);

export const SkillsAndTools = () => {
  const classes = useStyles();
  return (
    <Box my={6}>
      <Typography
        variant='h3'
        className={classes.subheading}
        style={{
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
