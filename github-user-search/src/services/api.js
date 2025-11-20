

import axios from "axios";

// Access the GitHub API key from environment variables
const githubApiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Function to fetch GitHub user data by username
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: githubApiKey
        ? { Authorization: `token ${githubApiKey}` }
        : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};

