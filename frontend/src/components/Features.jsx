import React from "react";

export default function Features() {
  return (
    <section id="features" className="w-full  mx-auto bg-white/90 rounded-2xl text-center py-20 px-6 text-gray-800">
      <h2 className="text-4xl font-bold text-indigo-700 mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Upload or Link", text: "Upload a lecture or paste a YouTube link — NoteMate extracts the audio automatically." },
          { title: "AI Summarization", text: "Our AI condenses complex lectures into clean, easy-to-read notes." },
          { title: "Save or Share", text: "Download your summaries instantly or share them with classmates." },
        ].map((f, i) => (
          <div key={i} className="bg-white/80 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
