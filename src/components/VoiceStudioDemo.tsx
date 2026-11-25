"use client";

import { useState } from "react";
import {
  Volume2,
  Play,
  Pause,
  Sparkles,
  Globe,
  Sliders,
  CheckCircle,
  Radio,
  Zap,
  RotateCcw,
  Languages,
} from "lucide-react";

export default function VoiceStudioDemo() {
  const [activeVoice, setActiveVoice] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState("1.0x");
  const [selectedScenario, setSelectedScenario] = useState("qualification");

  const playVoiceAudio = (text: string, vIndex: number, speedVal: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const cleaned = text.replace(/[“”"]/g, "");
      const utterance = new SpeechSynthesisUtterance(cleaned);
      const rateNumber = speedVal === "1.15x" ? 1.15 : speedVal === "0.9x" ? 0.9 : 1.0;
      utterance.rate = rateNumber;
      utterance.pitch = voices[vIndex].gender === "Female" ? 1.05 : 0.95;

      const voicesList = window.speechSynthesis.getVoices();
      const vObj = voices[vIndex];
      const matched = voicesList.find((v) => {
        if (vObj.gender === "Female") {
          return (
            v.name.toLowerCase().includes("female") ||
            v.name.toLowerCase().includes("zira") ||
            v.lang.includes("en-IN") ||
            v.lang.includes("hi")
          );
        } else {
          return (
            v.name.toLowerCase().includes("male") ||
            v.name.toLowerCase().includes("david") ||
            v.lang.includes("en-IN") ||
            v.lang.includes("hi")
          );
        }
      });
      if (matched) utterance.voice = matched;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlaying(true);
    }
  };

  const togglePlayback = () => {
    if (isPlaying) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      playVoiceAudio(current.sampleLine, activeVoice, speed);
    }
  };

  const voices = [
    {
      id: "maya",
      name: "Maya",
      gender: "Female",
      language: "Hinglish (Urban Metros)",
      tone: "Warm, Persuasive & Empathetic",
      image: "/images/avatar-maya.svg",
      useCase: "Real Estate & High-Ticket Consultations",
      sampleLine:
        "“Haanji Rohit ji, bilkul! Main aapko Tower B ke 3BHK flats ka detailed floor plan aur payment breakdown WhatsApp pe bhej rahi hoon. Kya kal dopahar 3 baje hum ek quick virtual walkthrough arrange kar sakte hain?”",
      characteristics: ["Natural Hindi-English code-switching", "Pleasant conversational cadence", "Sub-500ms response"],
    },
    {
      id: "arjun",
      name: "Arjun",
      gender: "Male",
      language: "Hindi (Corporate & Conversational)",
      tone: "Confident, Clear & Professional",
      image: "/images/avatar-arjun.svg",
      useCase: "EdTech, Course Counselling & Admissions",
      sampleLine:
        "“Namaste Priya ji! Sambhash Learning se Arjun baat kar raha hoon. Aapne Executive MBA program ke liye enquire kiya tha. Is weekend hamara scholarship aptitude round hai, kya main aapka slot reserve kar doon?”",
      characteristics: ["Articulate Hindi pronunciation", "Polite professional demeanor", "High conversion framing"],
    },
    {
      id: "priya",
      name: "Priya",
      gender: "Female",
      language: "Indian English (Neutral Accent)",
      tone: "Crisp, Articulate & Executive",
      image: "/images/avatar-maya.svg",
      useCase: "B2B SaaS, IT Services & Product Demos",
      sampleLine:
        "“Hello Sandeep! Thanks for checking out our enterprise automation tools. I see you manage a team of 45 SDRs. Would you like a 15-minute tailored workflow walkthrough with our solutions architect on Wednesday?”",
      characteristics: ["Global standard Indian English", "Executive-level clarity", "Ideal for B2B buyers"],
    },
    {
      id: "karthik",
      name: "Karthik",
      gender: "Male",
      language: "Tamil / English Bilingual",
      tone: "Helpful, Courteous & Prompt",
      image: "/images/avatar-arjun.svg",
      useCase: "BFSI, KYC Verification & Payment Reminders",
      sampleLine:
        "“Vanakkam Suresh sir, idhu HDFC credit services la irundhu pesren. Ungaloda business loan approval aayirukku. Instant verification-ku link SMS panni irukken, adhai check pannungalaen?”",
      characteristics: ["Authentic Tamil inflections", "High compliance adherence", "Zero mispronunciations"],
    },
  ];

  const current = voices[activeVoice];

  return (
    <section id="voice-studio" className="py-20 sm:py-24 bg-white border-b border-slate-200/70 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Languages className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Voice & Accent Studio</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Voices That Sound Like Your Best Sales Reps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate robotic robotic-sounding speech. Sambhash AI utilizes cutting-edge Indian speech synthesis with realistic breaths, subtle pauses, and fluent regional dialect nuances.
          </p>
        </div>

        {/* Voice Studio Interactive Container */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 p-6 sm:p-10 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Voice Selection Cards */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Select AI Voice Personality:
              </span>
              {voices.map((v, idx) => (
                <div
                  key={v.id}
                  onClick={() => {
                    setActiveVoice(idx);
                    playVoiceAudio(v.sampleLine, idx, speed);
                  }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    activeVoice === idx
                      ? "bg-white border-indigo-600 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-600"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center text-sm overflow-hidden relative ${
                          activeVoice === idx
                            ? "bg-indigo-600 text-white shadow-sm"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {v.image ? (
                          <img
                            src={v.image}
                            alt={v.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = "none";
                            }}
                          />
                        ) : null}
                        <span className="absolute inset-0 flex items-center justify-center -z-10">
                          {v.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm">{v.name}</h4>
                          <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                            {v.gender}
                          </span>
                        </div>
                        <p className="text-xs text-indigo-600 font-medium">{v.language}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600">
                        {activeVoice === idx && isPlaying ? (
                          <Volume2 className="w-4 h-4 text-indigo-600 animate-pulse" />
                        ) : (
                          <Play className="w-3.5 h-3.5 ml-0.5 text-slate-600" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Active Voice Player & Sample Simulator */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {isPlaying && (
                      <div className="sound-ring w-14 h-14 -top-1 -left-1 pointer-events-none"></div>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-base shadow-sm overflow-hidden relative">
                      {current.image ? (
                        <img
                          src={current.image}
                          alt={current.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.currentTarget as HTMLElement).style.display = "none";
                          }}
                        />
                      ) : null}
                      <span className="absolute inset-0 flex items-center justify-center -z-10">
                        {current.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-extrabold text-slate-900">{current.name}</h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {current.tone}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Recommended for: <strong className="text-slate-700">{current.useCase}</strong></p>
                  </div>
                </div>

                {/* Speed Controls */}
                <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-lg border border-slate-200 text-xs">
                  {["0.9x", "1.0x", "1.15x"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSpeed(s)}
                      className={`px-2 py-1 rounded font-medium transition-colors ${
                        speed === s
                          ? "bg-white text-indigo-600 shadow-2xs font-semibold"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Speech Line */}
              <div className="bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200/80 mb-5 relative">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Radio className="w-3.5 h-3.5 text-indigo-600" />
                    Live Speech Output Stream
                  </span>
                  <span className="text-emerald-600 font-mono text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Latency: 490ms TTFT
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 font-serif italic leading-relaxed">
                  {current.sampleLine}
                </p>
              </div>

              {/* Audio Controls Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-indigo-50/40 p-4 rounded-xl border border-indigo-100">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={togglePlayback}
                    className="w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-md shadow-indigo-600/20 transition-all flex-shrink-0"
                    title={isPlaying ? "Stop speech" : "Play speech aloud"}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5 fill-white" />}
                  </button>

                  <div className="flex-1 sm:w-48">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                      <span>{isPlaying ? "Generating Audio..." : "Ready to play"}</span>
                      <span className="font-mono text-indigo-600 font-semibold">{speed} Speed</span>
                    </div>

                    {/* Equalizer animation bars */}
                    <div className="flex items-center gap-1.5 h-6">
                      <span className={`w-1 bg-indigo-500 rounded-full transition-all ${isPlaying ? "animate-waveform-1" : "h-1"}`}></span>
                      <span className={`w-1 bg-indigo-500 rounded-full transition-all ${isPlaying ? "animate-waveform-2" : "h-2"}`}></span>
                      <span className={`w-1 bg-indigo-600 rounded-full transition-all ${isPlaying ? "animate-waveform-3" : "h-4"}`}></span>
                      <span className={`w-1 bg-indigo-600 rounded-full transition-all ${isPlaying ? "animate-waveform-4" : "h-2"}`}></span>
                      <span className={`w-1 bg-indigo-400 rounded-full transition-all ${isPlaying ? "animate-waveform-5" : "h-3"}`}></span>
                      <span className={`w-1 bg-indigo-500 rounded-full transition-all ${isPlaying ? "animate-waveform-6" : "h-1"}`}></span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Supports live caller interruption</span>
                </div>
              </div>

              {/* Characteristic Checkmarks */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-100">
                {current.characteristics.map((c, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}