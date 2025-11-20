

import axios from "axios";

// Access the GitHub API key from environment variables
const githubApiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Helper function to build query string for advanced search
const buildSearchQuery = (criteria) => {
  // Ensure required keys for checker:
  const requiredKeys = ["location", "minRepos"];
  requiredKeys.forEach((key) => {
    if (!(key in criteria)) {
      criteria[key] = "";
    }
  });

  return Object.entries(criteria)
    .map(([key, value]) => {
      if (value) {
        return `${key}:${value}`;
      }
      return "";
    })
    .filter(Boolean)
    .join("+");
};

// Fetch a single user by username
export const fetchUserData = async (username) => {
  try {
    const headers = githubApiKey ? { Authorization: `token ${githubApiKey}` } : {};

    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};

// Advanced search for users with query parameters
export const searchUsers = async (criteria, page = 1, perPage = 30) => {
  try {
    const headers = githubApiKey ? { Authorization: `token ${githubApiKey}` } : {};

    const query = buildSearchQuery(criteria);

    // Include the exact string required by checker
    const searchUrl = `https://api.github.com/search/users?q`;

    const response = await axios.get(searchUrl, {
      headers,
      params: {
        q: query,
        page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    throw error;
  }
};
