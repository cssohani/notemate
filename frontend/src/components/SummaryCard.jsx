import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function SummaryCard({ summary, loading, error }) {
  // Nothing to show yet
  if (!loading && !error && summary === "") return null;

  const handleDownload = () => {
    if (!summary) return;
    const file = new Blob([summary], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "NoteMate_Summary.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 my-8 text-gray-800 animate-fadeIn">
      <h2 className="text-2xl font-bold text-indigo-700 mb-3">Summary</h2>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center gap-3 text-indigo-700 py-10">
          <ArrowPathIcon className="w-6 h-6 animate-spin" />
          <span className="font-medium">Generating your notes…</span>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4">
          {error}
        </div>
      )}

      {/* Display Summary */}
      {!loading && !error && summary && (
        <>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-h-80 overflow-y-auto whitespace-pre-wrap leading-relaxed text-gray-700 shadow-inner">
            {summary}
          </div>
          <button
            onClick={handleDownload}
            className="mt-5 w-full bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition shadow-md hover:shadow-lg"
          >
            Download Summary
          </button>
        </>
      )}
    </section>
  );
}

