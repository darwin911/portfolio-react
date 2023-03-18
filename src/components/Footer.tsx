import React from "react";
import { ReactComponent as EmailIcon } from "./../assets/email.svg";
import { ReactComponent as GithubIcon } from "./../assets/github.svg";
import { ReactComponent as LinkedInIcon } from "./../assets/linkedin.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__link-container">
        <a href="mailto:darwinpsmith@gmail.com" className="icon-link">
          <EmailIcon />
        </a>
        <a
          href="https://linkedin.com/in/darwinpsmith"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/darwin911"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <GithubIcon />
        </a>
      </div>
      <hr />
      <small>
        <sup>&copy;</sup> Darwin Smith {new Date().getFullYear()}
      </small>
    </footer>
  );
};
