import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import { Divider, Typography, Tooltip, IconButton } from '@material-ui/core';

const styles = {
  FooterIcon: {
    color: 'black'
  },
  Divider: { marginTop: '1rem', marginBottom: '1rem' }
};

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <Tooltip title='darwinpsmith@gmail.com'>
        <IconButton href='mailto:darwinpsmith@gmail.com'>
          <MailIcon fontSize='large' style={styles.FooterIcon} />
        </IconButton>
      </Tooltip>
      <IconButton href='https://linkedin.com/in/darwinpsmith' target='_blank'>
        <LinkedinIcon fontSize='large' style={styles.FooterIcon} />
      </IconButton>
      <IconButton href={'https://github.com/darwin911'}>
        <GithubIcon fontSize='large' style={styles.FooterIcon} />
      </IconButton>
      <Divider variant='middle' style={styles.Divider} />
      <Typography variant='subtitle2'>
        &copy; Darwin Smith {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};
