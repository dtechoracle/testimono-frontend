import api from "../lib/api";

// Login function
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/users/login.php", { email, password });
    // Save the token to local storage if login is successful
    if (response.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("username", response.username);
      console.log("User logged in successfully:", response);
    }
    return response; // Return the response data for further usage in the UI
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error; // Throw the error to be handled by the calling component
  }
};

// Register function
export const RegisterUser = async (username, email, password) => {
  try {
    const response = await api.post("/users/signup.php", {
      username,
      email,
      password,
    });

    // Check if the response data is available and structured as expected
    if (response) {
      return response;
    } else {
      // If no status or an error is returned, throw an error with a meaningful message
      throw new Error(
        response?.data?.message || "Signup failed. Please try again."
      );
    }
  } catch (error) {
    // If the error is from the API response, log and throw the message
    if (error.response) {
      console.error("Signup Failed:", error.response.data);
      throw new Error(
        error.response.data.message || "Signup failed. Please try again."
      );
    } else {
      // If there's no response (e.g., network error), handle that case
      console.error("Signup Failed:", error.message);
      throw new Error("Signup failed. Please try again.");
    }
  }
};

// Submit Testimonial function
export const SubmitTestimonial = async (
  username,
  fullname,
  email,
  message,
  rating
) => {
  try {
    const response = await api.post("/testimony/submit.php", {
      username,
      fullname,
      email,
      message,
      rating,
    });

    if (response.token) {
      //   localStorage.setItem("token", response.token);
      console.log("Testimony submitted successfully:", response);
    }
    return response;
  } catch (error) {
    console.log("Signup Failed:", error.message);
    throw error;
  }
};

// Function to fetch testimonials based on the username (no authentication required)
export const getTestimonialByUsername = async (username) => {
  try {
    const response = await api.get(
      `/testimony/get_all.php?username=${username}`
    );

    // Log the full response to inspect its structure
    console.log("Full response:", response);

    // Directly check if the response is an array
    if (Array.isArray(response)) {
      console.log("Testimonials fetched successfully:", response);
      return response; // Return the array of testimonials
    }

    // If the response is not an array, throw an error
    throw new Error("Unexpected response format while fetching testimonials.");
  } catch (error) {
    console.error("Failed to fetch testimonials:", error.message);
    console.error("Full error:", error);
    throw error;
  }
};

// Function to fetch dashboard details (requires authentication)
export const getDashboardDetails = async () => {
  try {
    const token = localStorage.getItem("token");

    // Ensure token is available in the headers
    if (!token) {
      throw new Error("No token found. Please log in.");
    }

    // Send the token in the Authorization header
    const response = await api.get("/admin/get_details.php", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Check if the response data contains an error
    if (response.data && response.data.status === "error") {
      throw new Error(
        response.data.message || "An error occurred while fetching data."
      );
    }

    console.log("Dashboard data fetched successfully:", response.data);
    return response.data; // Return the dashboard data if successful
  } catch (error) {
    console.error("Failed to fetch dashboard details:", error.message);
    throw error; // Throw error to be handled by the calling component
  }
};

// Function to log out the user and remove the token from local storage
export const logoutUser = () => {
  localStorage.removeItem("token");
  console.log("User logged out successfully.");
};

// Function to check if the user is authenticated
export const isAuthenticated = () => !!localStorage.getItem("token");

export default {
  loginUser,
  RegisterUser,
  SubmitTestimonial,
  getTestimonialByUsername,
  getDashboardDetails,
  logoutUser,
  isAuthenticated,
};
