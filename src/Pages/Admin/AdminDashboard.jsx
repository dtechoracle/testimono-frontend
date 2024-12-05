import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { getDashboardDetails } from "../../../authStore/authUsage";

function AdminDashboard() {
  const [userData, setUserData] = useState(null);
  const [analytics, setAnalytics] = useState({
    totalTestimonials: 0,
    totalUsers: 0,
    averageRating: 0,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const [showCopiedAlert, setShowCopiedAlert] = useState(false); // State for copied alert visibility
  const navigate = useNavigate(); // Hook to redirect the user

  // Fetch username from localStorage
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        navigate("/login"); // Redirect to login page if not authenticated
        return;
      }

      try {
        const response = await getDashboardDetails(token);
        console.log("Response from API:", response);

        // Check if the response is valid and contains testimonials
        if (response && response.length > 0) {
          setUserData(response); // Directly set the full response
          setAnalytics({
            totalTestimonials: response.length,
            totalUsers: response[0]?.totalUsers || 0, // Ensure it falls back safely
            averageRating: calculateAverageRating(response), // Pass the full array for average calculation
          });
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          console.error("No testimonials found in the response");
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error.message);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]); // Include navigate in the dependency array to handle redirection

  const calculateAverageRating = (testimonials) => {
    const totalRatings = testimonials.reduce((acc, testimonial) => {
      return acc + parseInt(testimonial.rating, 10); // Ensure proper integer parsing
    }, 0);

    return testimonials.length > 0 ? totalRatings / testimonials.length : 0;
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    localStorage.removeItem("username");
    navigate("/login"); // Redirect to login page
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text); // Copy the provided text to clipboard
    setShowCopiedAlert(true); // Show the custom copied alert
    setTimeout(() => setShowCopiedAlert(false), 2000); // Hide the alert after 2 seconds
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Show custom copied alert */}
      {showCopiedAlert && (
        <div className="fixed top-0 right-0 m-4 bg-blue-600 text-white p-2 rounded-md shadow-lg">
          Copied to clipboard!
        </div>
      )}

      {/* Navbar and Admin Info */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Welcome, 👋</h1>
        <div className="flex items-center space-x-2 relative">
          <img
            src="/img/profile-image.png"
            alt="Admin"
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
            className="text-gray-800 font-medium"
          >
            Admin
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Analytics Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          Analytics Overview
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-lg font-medium">Total Testimonials</p>
            <p className="text-2xl font-bold text-blue-600">
              {analytics.totalTestimonials}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-lg font-medium">Total Registered Users</p>
            <p className="text-2xl font-bold text-blue-600">
              {analytics.totalUsers}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-lg font-medium">Average Rating</p>
            <p className="text-2xl font-bold text-blue-600">
              {analytics.averageRating} / 5
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800">
          All Testimonials
        </h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Testimonial</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Rating</th>
              </tr>
            </thead>
            <tbody>
              {userData && userData.length > 0 ? (
                userData.map((testimonial) => (
                  <tr key={testimonial.id} className="border-b">
                    <td className="py-2 px-4 border">{testimonial.fullname}</td>
                    <td className="py-2 px-4 border">{testimonial.message}</td>
                    <td className="py-2 px-4 border">{testimonial.email}</td>
                    <td className="py-2 px-4 border">{testimonial.rating}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-2 px-4 border">
                    No testimonials available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sections for Copying Profile Link & iFrame */}
      <section className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Copy Profile Link
        </h2>
        <div className="flex items-center justify-between">
          <input
            type="text"
            readOnly
            value={`https://testimono.vercel.app/testimony/me/${username}`} // Use the username to dynamically update the profile link
            className="border p-2 rounded-md w-full"
          />
          <button
            onClick={() =>
              handleCopy(
                `https://testimono.vercel.app/testimonies/me/${username}`
              )
            } // Copy the updated profile link
            className="ml-2 bg-blue-600 text-white p-2 rounded-md"
          >
            Copy
          </button>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Embed iFrame
        </h2>
        <div className="flex items-center justify-between">
          <input
            type="text"
            readOnly
            value={`<iframe src='https://testimono.vercel.app/testimony/view/${username}'></iframe>`} // Use the username to dynamically update the iframe URL
            className="border p-2 rounded-md w-full"
          />
          <button
            onClick={() =>
              handleCopy(
                `<iframe src='https://testimono.vercel.app/testimony/view/${username}'></iframe>`
              )
            } // Copy the iframe code
            className="ml-2 bg-blue-600 text-white p-2 rounded-md"
          >
            Copy
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
