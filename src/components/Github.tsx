import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import { DeviceHub, PeopleAlt } from '@material-ui/icons/';
import { styles } from './styles';
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

export const Github: React.FC = () => {
  const [githubData, setGithubData] = useState({
    public_repos: 0,
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    const loadGithubData = async () => {
      const resp = await github.get('/users/darwin911');
      setGithubData(resp.data);
    };
    loadGithubData();
  }, []);

  return (
    <Box mb={6}>
      <Typography variant='h3' style={styles.AboutSubHeading}>
        Github
      </Typography>
      <div className='about__github-grid'>
        <div className='about__github-item'>
          <DeviceHub />
          <Typography variant='h6'>Public Repositories</Typography>
        </div>
        <Typography className='about__github-item right'>{githubData.public_repos}</Typography>
        <div className='about__github-item'>
          <PeopleAlt />
          <Typography variant='h6'>Following</Typography>
        </div>
        <Typography className='about__github-item right'>{githubData.following}</Typography>
        <div className='about__github-item'>
          <PeopleAlt />
          <Typography variant='h6'>Followers</Typography>
        </div>
        <Typography className='about__github-item right'>{githubData.followers}</Typography>
      </div>
    </Box>
  );
};
