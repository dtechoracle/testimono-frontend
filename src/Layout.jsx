import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center text-gray-800 font-sans">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src={viteLogo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">Testimono</h1>
          </div>
          <nav className="hidden sm:flex space-x-4">
            <Link className="hover:text-gray-300" to="/#">
              Features
            </Link>
            <Link className="hover:text-gray-300" to="/#">
              Testimonials
            </Link>
            <Link className="hover:text-gray-300" to="/register">
              Get Started
            </Link>
          </nav>
        </div>
        <div className="text-center py-12 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Build Trust. Gain Credibility.
          </h1>
          <p className="text-lg mt-4">
            Collect authentic testimonials and showcase them seamlessly on your
            website.
          </p>
          <Link to="/register">
            <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Get Started for Free
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="mt-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Why Choose Testimono?</h2>
        <p className="text-gray-600 mt-2">
          A simple, powerful platform to help creators build trust through
          testimonials.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">
              Easy Collection
            </h3>
            <p className="text-gray-700 mt-2">
              Quickly gather testimonials from your audience through a simple
              form.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-600">
              Embed Anywhere
            </h3>
            <p className="text-gray-700 mt-2">
              Use our iframe embed code to display testimonials on any website
              seamlessly.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Build Trust</h3>
            <p className="text-gray-700 mt-2">
              Showcase positive feedback to establish credibility with new
              audiences.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600">
              Analytics Insights
            </h3>
            <p className="text-gray-700 mt-2">
              Monitor the impact of your testimonials with real-time analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-16 px-6 bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              "Testimono made it so easy to collect and showcase testimonials. I
              love it!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Sarah Johnson</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              "An amazing tool for building trust with my audience. Highly
              recommended!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Alex Martinez</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-700">
              "The embedding process was seamless, and the support team is
              fantastic!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Priya Gupta</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-gray-600 mt-2">
          Join thousands of creators who trust Testimono.
        </p>
        <Link to="/register">
          <button className="mt-6 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Sign Up for Free
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 w-full bg-blue-600 text-white text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Testimono. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <Link to="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
