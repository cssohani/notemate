import React, { useState, useRef } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SummaryCard from "./components/SummaryCard";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const summaryRef = useRef(null);

  const handleSummarize = async (url) => {
    if (!url) return;
    setLoading(true);
    setError("");
    setSummary("");

    try {
      const formData = new FormData();
      formData.append("url", url);

      const res = await axios.post("http://127.0.0.1:8000/summarize/youtube", formData);
      console.log("Backend response:", res.data);

      const s = res.data.summary || res.data.result || res.data.data?.summary;
      if (s) {
        setSummary(s);
      } else {
        setError(res.data.error || "No summary generated.");
      }
    } catch (e) {
      console.error(e);
      setError("Error fetching summary. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => summaryRef.current?.scrollIntoView({ behavior: "smooth" }), 200);
    }
  };

  return (
    <div className="font-['Alan_Sans'] text-gray-800 bg-gradient-to-b from-indigo-600 to-sky-400 min-h-screen">
      <Navbar />
      <Hero onSummarize={handleSummarize} loading={loading} />
      <div ref={summaryRef}>
        <SummaryCard summary={summary} loading={loading} error={error} />
      </div>
      <Features />
      <HowItWorks />
      
      <Contact />
      <Footer />
    </div>
  );
}

