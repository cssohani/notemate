import { useState } from 'react'
import axios from 'axios'
import { ArrowPathIcon } from "@heroicons/react/24/outline";


const Home = () => {
    const [url, setUrl] = useState("");
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSummarize = async () => {
        if (!url) return;
        setLoading(true);
        setSummary("");

        try {
        const formData = new FormData();
        formData.append("url", url);

        const res = await axios.post("http://127.0.0.1:8000/summarize/youtube", formData);
        setSummary(res.data.summary || res.data.error || "No summary generated.");
        } catch (err) {
        console.error(err);
        setSummary("Error fetching summary.");
        } finally {
        setLoading(false);
        }
    };

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([summary], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "summary.txt";
        document.body.appendChild(element);
        element.click();
    };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-600 to-sky-400 font-sans p-6">
      <h1 className="text-6xl font-extrabold text-white mb-10 drop-shadow-lg">
        NoteMate
      </h1>

      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-6 space-y-4">
        {/* Input + Button */}
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter YouTube video URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-grow px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />
          <button
            onClick={handleSummarize}
            disabled={loading}
            className={`px-6 py-3 rounded-xl text-white shadow transition w-full sm:w-auto ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <ArrowPathIcon className="w-5 h-5 animate-spin" />
                <span>Summarizing...</span>
              </div>
            ) : (
              "Summarize"
            )}
          </button>
        </div>

        {/* Preview */}
        {summary && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Summary Preview</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-h-80 overflow-y-auto whitespace-pre-wrap">
              {summary}
            </div>
            <button
              onClick={handleDownload}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              Download Summary
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home
