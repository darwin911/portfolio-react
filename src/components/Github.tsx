import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { DeviceHub, PeopleAlt } from '@material-ui/icons/';
import { styles } from './styles';

interface Props {
  repos: number;
  following: number;
  followers: number;
}

export const Github: React.FC<Props> = ({ repos, following, followers }) => {
  return (
    <Box mb={6}>
      <Typography variant='h3' style={styles.AboutSubHeading}>
        Github
      </Typography>
      <div className='about__github-grid'>
        <div className='about__github-item'>
          <DeviceHub />
          <Typography component='span'>Repositories</Typography>
        </div>
        <Typography className='about__github-item right'>{repos}</Typography>
        <div className='about__github-item'>
          <PeopleAlt />
          <Typography>Following</Typography>
        </div>
        <Typography className='about__github-item right'>
          {following}
        </Typography>
        <div className='about__github-item'>
          <PeopleAlt />
          <Typography>Followers</Typography>
        </div>
        <Typography className='about__github-item right'>
          {followers}
        </Typography>
      </div>
    </Box>
  );
};
