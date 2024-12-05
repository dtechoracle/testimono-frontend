import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import authUsage from "../../../authStore/authUsage";
import "./Styles.css";

const TestimonialPage = () => {
  const { username } = useParams();
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
        console.log("Fetching testimonials for username:", username);
        const data = await authUsage.getTestimonialByUsername(username);
        setTestimonials(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [username]);

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

  const renderStars = (rating) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= rating ? "&#9733;" : "&#9734;";
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
        <div className="w-full overflow-hidden">
          <div
            className={`flex flex-wrap ${
              testimonials.length > 4 ? "justify-start" : "justify-center"
            } gap-6`}
          >
            {testimonials.map((testimony, index) => (
              <div
                key={index}
                className="w-64 bg-white p-4 rounded-lg shadow-lg"
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
        </div>
      )}
    </div>
  );
};

export default TestimonialPage;
