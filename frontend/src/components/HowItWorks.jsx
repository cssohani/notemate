import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-lg p-10 my-16">
      <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">
        How NoteMate Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-indigo-600">1. Upload or Link</h3>
          <p>Provide a YouTube link or upload a video — NoteMate extracts and prepares the audio for transcription.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-indigo-600">2. Transcribe</h3>
          <p>OpenAI Whisper accurately converts spoken content into text, even for long lectures.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-indigo-600">3. Summarize & Download</h3>
          <p>GPT generates detailed, structured notes that you can instantly download.</p>
        </div>
      </div>
      <p className="text-gray-600 italic text-center mt-8">
         Longer videos (10+ minutes) may take a bit longer — NoteMate is transcribing and summarizing thoroughly.
      </p>
    </section>
  );
}
