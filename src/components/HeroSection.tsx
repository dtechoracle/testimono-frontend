import React from "react";
import { Link } from "react-router-dom";
import TextWrapper from "./TextWrapper";

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#f7f7f7,#e6e6e6)] overflow-hidden">
      {/* Background Gridlines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent)]"></div>

      {/* Navbar Placeholder */}
      <header className=" sticky left-0  top-0 backdrop-blur-sm z-[99999] w-full flex justify-between items-center px-8 py-6">
        <h1 className="text-xl font-bold">YourLogo</h1>
        <nav className="space-x-6">
          <Link to="#" className="text-gray-700 hover:text-black">
            Features
          </Link>
          <Link to="#" className="text-gray-700 hover:text-black">
            Testimonials
          </Link>
        </nav>
        <Link to="/login">
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-black/70 transition">
            Sign In
          </button>
        </Link>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen space-y-6 px-6">
        <TextWrapper text="Introducing the next authentic testimonials  on your website." />
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight max-w-4xl">
          Build Trust <br /> Gain Credibility.
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Collect authentic testimonials and showcase them seamlessly on your
          website.
        </p>
        <div className="flex gap-4 mt-4">
          <Link to="/register">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-black/70 transition">
              Get For Free
            </button>
          </Link>
          <Link to="#">
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Illustration Placeholder */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl">
        <img
          src="https://via.placeholder.com/800x300" // Replace with your illustration
          alt="Illustration"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export default HeroSection;
