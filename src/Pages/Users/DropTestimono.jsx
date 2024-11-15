import { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to grab dynamic route params
import { SubmitTestimonial } from "../../../authStore/authUsage";

function TestimonyForm() {
  const { username } = useParams(); // Grab username from the URL (e.g., "dtechoracle")
  const [fullname, setFullname] = useState(""); // Use fullname for user input
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    try {
      const response = await SubmitTestimonial(
        username, // username from the URL
        fullname, // the user's full name input
        email,
        message,
        rating
      );
      if (response) {
        setSuccessMessage("Thank you for your testimony!");
        // Reset form
        setFullname("");
        setEmail("");
        setRating(5);
        setMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to submit testimony. Please try again.");
    } finally {
      setIsLoading(false); // Set loading state back to false after processing
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Submit Your Testimony for {username}{" "}
          {/* Display username in the header */}
        </h1>

        {successMessage && (
          <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-gray-700 font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label
              htmlFor="rating"
              className="block text-gray-700 font-medium mb-1"
            >
              Rating
            </label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              required
            >
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Testimony
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium p-2 rounded-md hover:bg-blue-700 transition duration-300"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? "Loading..." : "Submit Testimony"}{" "}
            {/* Show loading text when isLoading is true */}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TestimonyForm;
