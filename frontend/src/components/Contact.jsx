import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-center py-20 bg-white/80 backdrop-blur-md">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Stay in Touch</h2>
      <p className="text-gray-700 mb-6">Get updates or share feedback with the NoteMate team.</p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 w-72 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
        />
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition">
          Subscribe
        </button>
      </form>
    </section>
  );
}
