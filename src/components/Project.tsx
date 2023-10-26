import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

type ProjectProps = {
  img: string;
  title: string;
  link: string;
  description: string;
  github?: string | undefined;
  commits?: number | undefined;
};

export const Project = ({ project }: { project: ProjectProps }) => {
  const { link, img, title, github, description, commits } = project;
  return (
    <Card className="project" tabIndex={0}>
      <CardActionArea
        style={{ borderRadius: 10 }}
        href={link}
        rel="noopener"
        target="_blank"
      >
        <CardMedia image={img} title={title} className="project__img" />
      </CardActionArea>

      <CardActions>
        <Button
          size="small"
          color="default"
          href={link}
          target="_blank noreferrer"
          rel="noopener"
        >
          Live Site
        </Button>
        {github && (
          <Button
            aria-label="github"
            size="small"
            color="default"
            href={github}
            target="_blank noreferrer"
            rel="noopener"
            endIcon={<GitHubIcon style={{ color: "black" }} />}
          >
            Source Code
          </Button>
        )}
        {commits && (
          <span className="project__commits">Commits: {commits}</span>
        )}
      </CardActions>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h3" align="left">
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="textPrimary"
          component="p"
          align="left"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
