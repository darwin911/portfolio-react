import React from "react";

interface Project {
  img: string;
  title: string;
  link: string;
  description: string;
  github?: string | undefined;
  commits?: number | undefined;
}

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({
  project: { link, img, title, github, description, commits },
}) => {
  return (
    <div className="project" tabIndex={0}>
      <a className="link" href={link} rel="noreferrer" target="_blank">
        <img
          className="project__img"
          src={img}
          alt={title}
          style={{ maxWidth: "100%" }}
        />
      </a>

      <div className="project__links-container">
        <a
          className="link"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          Live Site
        </a>
        {github && (
          <a
            className="link"
            aria-label="github"
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >
            Source Code
          </a>
        )}
        {commits && (
          <span className="project__commits">Commits: {commits}</span>
        )}
      </div>
      <div className="project__details-container">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
      </div>
    </div>
  );
};
