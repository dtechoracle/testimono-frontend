import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Use react-router-dom's useParams
import authUsage from "../../../authStore/authUsage";

const TestimonialPage = () => {
  const { username } = useParams(); // Capture username from the URL
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setError("Username is required.");
      setLoading(false);
      return;
    }

    const fetchTestimonials = async () => {
      try {
        console.log("Fetching testimonials for username:", username); // Log the username to ensure it's correct
        const data = await authUsage.getTestimonialByUsername(username);
        setTestimonials(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [username]); // Re-fetch when the username changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Function to generate star ratings using HTML codes
  const renderStars = (rating) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars += "&#9733;"; // Filled star (gold)
      } else {
        stars += "&#9734;"; // Empty star
      }
    }
    return (
      <span
        className="text-yellow-500"
        dangerouslySetInnerHTML={{ __html: stars }}
      />
    );
  };

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Testimonials for {username}
      </h1>
      {testimonials.length === 0 ? (
        <p className="text-center text-gray-600">No testimonials available.</p>
      ) : (
        <div
          className={`flex ${
            testimonials.length > 4 ? "overflow-x-auto" : "justify-center"
          } space-x-6`}
        >
          {testimonials.map((testimony, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white p-4 rounded-lg shadow-lg"
            >
              <p className="text-gray-800 font-semibold">
                {testimony.fullname}
              </p>
              <p className="text-gray-600 mt-2">{testimony.message}</p>
              <div className="flex mt-2">
                {renderStars(Number(testimony.rating))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialPage;
