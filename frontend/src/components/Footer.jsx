import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-white/80 mt-10 bg-indigo-700">
      <p>© {new Date().getFullYear()} NoteMate — All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-2 text-white/90">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
    </footer>
  );
}
