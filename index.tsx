import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Home() {
  const handleDownloadClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download_click', {
        event_category: 'engagement',
        event_label: 'Agentic AI Learning Plan PDF',
      });
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="https://assets.mixkit.co/videos/preview/mixkit-hologram-projection-of-a-man-9613-large.mp4" type="video/mp4" />
      </video>
      <audio autoPlay loop className="hidden">
        <source src="https://assets.mixkit.co/sfx/preview/mixkit-ambient-sci-fi-tones-1103.mp3" type="audio/mp3" />
      </audio>

      <div className="relative z-10 bg-black/60 min-h-screen p-6 md:p-12 backdrop-blur">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower CIOs with Agentic AI</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Learn how Agentic AI is transforming enterprise decision-making, operations, and future-proofing digital strategy. Tailored for CIOs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card><CardContent className="p-6"><h2 className="text-2xl font-semibold mb-2">📘 What is Agentic AI?</h2><p>Understand the fundamentals of Agentic AI—how autonomous agents can reason, plan, and take action across complex business systems.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-2xl font-semibold mb-2">🚀 Use Cases for CIOs</h2><p>Discover real-world enterprise applications in cybersecurity, IT operations, cloud orchestration, and digital transformation.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-2xl font-semibold mb-2">🎓 Masterclass & Certification</h2><p>Get access to exclusive content, masterclasses, and a certification pathway designed for strategic technology leaders.</p></CardContent></Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">🧠 Learn Agentic AI for Free</h3>
          <ul className="space-y-3 text-left text-white text-md">
            <li>✅ <a className="underline text-blue-300" href="https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z" target="_blank">Stanford CS25 – Agents that Reason and Learn</a></li>
            <li>✅ <a className="underline text-blue-300" href="https://www.langchain.com/education" target="_blank">LangChain University – Build Agentic Workflows</a></li>
            <li>✅ <a className="underline text-blue-300" href="https://github.com/Torantulino/Auto-GPT" target="_blank">Auto-GPT – GitHub Open Agent Code</a></li>
            <li>✅ <a className="underline text-blue-300" href="https://learn.deeplearning.ai/chatgpt-prompt-eng/" target="_blank">Prompt Engineering – DeepLearning.AI Free Course</a></li>
            <li>✅ <a className="underline text-blue-300" href="https://openai.com/blog" target="_blank">OpenAI Technical Blog – Agentic AI Concepts</a></li>
          </ul>
          <div className="mt-6">
            <a onClick={handleDownloadClick} href="https://drive.google.com/file/d/1kHkB7M1G0TzXX0iZ3T7uAjI9x3KLEgH1/view?usp=sharing" target="_blank" className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition">📥 Download 4-Week Agentic AI Learning Plan</a>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">💬 What CIOs Are Saying</h3>
          <div className="bg-white/80 text-black p-6 rounded-xl shadow">
            <p className="italic text-lg">"Agentic AI has completely transformed how we approach IT strategy—it's like having a digital co-pilot for decision-making."</p>
            <p className="mt-4 font-semibold">— Priya Desai, CIO at TechNova</p>
          </div>
        </div>

        <div className="mt-16 max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">📅 Schedule a Free Consultation</h3>
          <p className="mb-4">Want a personalized Agentic AI roadmap for your organization?</p>
          <a href="https://calendly.com/abhisekbanerjee/agentic-ai-consult" target="_blank" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">Book a Call</a>
        </div>
      </div>
    </div>
  );
}
