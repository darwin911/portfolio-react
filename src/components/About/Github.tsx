import React, { useEffect, useState } from "react";

import { fetchGithubData } from "../../helpers/github";

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
    <div className="about__github">
      <h3 className="about__sub-heading">Github</h3>
      <div className="about__github-grid">
        <div className="about__github-item">
          <p>Public Repositories</p>
        </div>
        <span className="about__github-item right" data-testid="repo-count">
          {githubData?.public_repos}
        </span>
        <div className="about__github-item">
          <p>Following</p>
        </div>
        <p className="about__github-item right">{githubData?.following}</p>
        <div className="about__github-item">
          <p>Followers</p>
        </div>
        <p className="about__github-item right">{githubData?.followers}</p>
      </div>
    </div>
  );
};
