

import { useState } from "react";
import { fetchGitHubUsers } from "./services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  // Build GitHub search query string
  const buildQuery = () => {
    let query = username.trim();
    if (location.trim()) query += ` location:${location.trim()}`;
    if (minRepos.trim()) query += ` repos:>=${minRepos.trim()}`;
    return query;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setUsers([]);
    setPage(1);
    fetchUserData(1, true);
  };

  // Fetch users from API
  const fetchUserData = async (pageNumber, reset = false) => {
    setLoading(true);
    setError(false);

    try {
      const query = buildQuery();
      const perPage = 10;
      const data = await fetchGitHubUsers(query, pageNumber, perPage);

      if (!data.items.length) {
        setError(true);
      } else {
        if (reset) {
          setUsers(data.items);
        } else {
          setUsers((prev) => [...prev, ...data.items]);
        }
        setHasMore(data.total_count > pageNumber * perPage);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUserData(nextPage);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Location (optional)
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., San Francisco"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="minRepos" className="block text-gray-700 text-sm font-bold mb-2">
            Minimum Repositories (optional)
          </label>
          <input
            id="minRepos"
            type="number"
            min="0"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="0"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          Search
        </button>
      </form>

      {/* Status Messages */}
      {loading && <p className="text-gray-500 text-center">Loading...</p>}
      {error && (
        <p className="text-red-500 text-center">
          Looks like we cant find the user
        </p>
      )}

      {/* User List */}
      {users.length > 0 && (
        <div className="space-y-4 mt-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white shadow-md rounded px-6 py-4 text-center">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-bold mt-2">{user.login}</h2>
              {user.location && <p className="text-gray-600">{user.location}</p>}
              <p className="text-gray-600">Public Repos: {user.public_repos ?? "N/A"}</p>
              <p className="mt-2">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View GitHub Profile
                </a>
              </p>
            </div>
          ))}

          {hasMore && (
            <div className="text-center mt-4">
              <button
                onClick={handleLoadMore}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-300"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
