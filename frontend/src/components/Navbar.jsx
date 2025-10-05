import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">NoteMate</h1>
        <nav className="hidden md:flex space-x-8 text-zinc-800">
          <a href="#features" className="hover:underline underline-offset-8 hover:text-indigo-700">Features</a>
          <a href="#how-it-works" className="hover:underline underline-offset-8 hover:text-indigo-700">How It Works</a>
          <a href="#contact" className="hover:underline underline-offset-8 hover:text-indigo-700">Contact</a>
        </nav>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </header>
  );
}
