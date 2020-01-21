import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import Divider from '@material-ui/core/Divider';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__contact-icons'>
        <MailIcon className='footer__mail-icon' />
        <LinkedinIcon className='footer__linkedin-icon' />
        <GithubIcon className='footer__github-icon' />
      </div>
      <Divider variant='middle' light={true} />
      <p>&copy; Darwin Smith 2020</p>
    </footer>
  );
};
