import axios from "axios";

const github = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const fetchGithubData = async () => {
  try {
    const resp = await github.get("/users/darwin911");
    return resp.data;
  } catch (error) {
    console.error(error);
  }
};
