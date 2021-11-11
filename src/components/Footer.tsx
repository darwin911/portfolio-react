import { Divider, IconButton, Tooltip, Typography } from "@material-ui/core";

import GithubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import React from "react";
import { styles } from "./styles";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Tooltip title="darwinpsmith@gmail.com">
        <IconButton href="mailto:darwinpsmith@gmail.com">
          <MailIcon style={styles.FooterIcon} />
        </IconButton>
      </Tooltip>
      <IconButton
        href="https://linkedin.com/in/darwinpsmith"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon style={styles.FooterIcon} />
      </IconButton>
      <IconButton
        href="https://github.com/darwin911"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon style={styles.FooterIcon} />
      </IconButton>
      <Divider variant="middle" style={styles.Divider} />
      <Typography variant="subtitle2">
        &copy; Darwin Smith {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};
