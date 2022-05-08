import { Box, Typography } from "@material-ui/core";
import { DeviceHub, PeopleAlt } from "@material-ui/icons/";
import React, { useEffect, useState } from "react";

import { fetchGithubData } from "../../helpers/github";
import { styles } from "../styles";

interface GitHubData {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
}

export const Github: React.FC = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);

  const fetchData = async () => {
    const data = await fetchGithubData();
    if (data) {
      setGithubData(data);
    }
  };

  useEffect(() => {
    if (!githubData) {
      fetchData();
    }
  }, [githubData]);

  if (!githubData) {
    return null;
  }

  return (
    <Box mb={6}>
      <Typography variant="h3" style={styles.AboutSubHeading}>
        Github
      </Typography>
      <div className="about__github-grid">
        <div className="about__github-item">
          <DeviceHub />
          <Typography variant="h6">Public Repositories</Typography>
        </div>
        <span className="about__github-item right" data-testid="repo-count">
          {githubData?.public_repos}
        </span>
        <div className="about__github-item">
          <PeopleAlt />
          <Typography variant="h6">Following</Typography>
        </div>
        <Typography className="about__github-item right">
          {githubData?.following}
        </Typography>
        <div className="about__github-item">
          <PeopleAlt />
          <Typography variant="h6">Followers</Typography>
        </div>
        <Typography className="about__github-item right">
          {githubData?.followers}
        </Typography>
      </div>
    </Box>
  );
};
