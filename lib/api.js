// lib/api.js
const API_BASE_URL = "https://testimono.buildhubb.com/api/v1/";

// Function to get the authentication token from local storage (if needed)
const getAuthToken = () => localStorage.getItem("token") || null;

// Base function for API requests
const apiRequest = async (
  endpoint,
  { method = "GET", body, headers = {} } = {}
) => {
  const authToken = getAuthToken();
  const url = `${API_BASE_URL}${endpoint}`;

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}), // Add token if available
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };

  try {
    const response = await fetch(url, config);

    // Handle the response, parse JSON if successful
    if (response.ok) {
      return await response.json();
    } else {
      // Throw error for non-2xx status codes
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

// GET request function
export const get = (endpoint, options) =>
  apiRequest(endpoint, { ...options, method: "GET" });

// POST request function
export const post = (endpoint, body, options) =>
  apiRequest(endpoint, { ...options, method: "POST", body });

// PUT request function
export const put = (endpoint, body, options) =>
  apiRequest(endpoint, { ...options, method: "PUT", body });

// DELETE request function
export const del = (endpoint, options) =>
  apiRequest(endpoint, { ...options, method: "DELETE" });

export default {
  get,
  post,
  put,
  del,
};
