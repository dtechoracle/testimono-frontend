import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Layout() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-800 font-sans">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 w-full">
        <div className="flex items-center space-x-4 mb-4">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="w-12 h-12" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="w-12 h-12" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome to Testimono
        </h1>
        <p className="text-lg text-white mt-2">
          Collect authentic testimonials and showcase them seamlessly on your
          website.
        </p>
        <Link to="/register">
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </Link>
      </header>

      {/* Features Section */}
      <section className="mt-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Why Choose Testimono?
        </h2>
        <p className="text-gray-600 mt-2">
          A simple, powerful platform to help creators build trust through
          testimonials.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 w-full bg-blue-600 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Testimono. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
