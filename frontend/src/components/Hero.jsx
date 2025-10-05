import React, { useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Hero({ onSummarize, loading }) {
  const [url, setUrl] = useState("");

  const handleClick = () => {
    if (!loading) onSummarize(url);
  };

  return (
    <section className="flex flex-col pt-50 pb-20 text-center w-full h-150 justify-center items-center text-white max-w-3xl mx-auto px-4">
      <h1 className="text-6xl font-extrabold mb-6 drop-shadow-md">NoteMate</h1>
      <p className="text-lg font-light mb-10 opacity-90">
        Turn your lectures and videos into clear, concise notes — powered by AI.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Enter YouTube video URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow w-100 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-700"
        />
        <button
          onClick={handleClick}
          disabled={loading}
          className={`px-8 py-3 rounded-xl font-medium text-indigo-700 transition-all ${
            loading ? "bg-white cursor-not-allowed" : "bg-white hover:bg-gray-200"
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <ArrowPathIcon className="w-5 h-5 animate-spin" />
              Summarizing…
            </span>
          ) : (
            "Summarize"
          )}
        </button>
      </div>
    </section>
  );
}

