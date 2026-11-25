"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  Clock,
  Sparkles,
  CheckCircle2,
  Smile,
  AlertCircle,
  FileText,
  BadgeCheck,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

export default function CallIntelligenceScrubber() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(14); // seconds
  const totalDuration = 138; // 02:18

  const chapters = [
    { time: 0, label: "00:00 - Greeting & Lead Verification", sentiment: "positive", color: "bg-emerald-500" },
    { time: 35, label: "00:35 - Budget Band & 3BHK Filter", sentiment: "neutral", color: "bg-amber-500" },
    { time: 75, label: "01:15 - Objection: Vastu & RERA", sentiment: "positive", color: "bg-emerald-500" },
    { time: 110, label: "01:50 - Site Visit Booking", sentiment: "converted", color: "bg-indigo-600" },
  ];

  const transcript = [
    {
      timeSec: 0,
      timestamp: "00:04",
      speaker: "Maya (AI Agent)",
      text: "Namaste Vikram ji! I saw you checked out our 3BHK luxury residences at Outer Ring Road. Are you looking for self-use or investment?",
      sentiment: "Positive",
    },
    {
      timeSec: 22,
      timestamp: "00:22",
      speaker: "Vikramaditya (Prospect)",
      text: "Hey Maya! We're planning to move in by Diwali next year. We need a spacious balcony and 2 car parkings.",
      sentiment: "High Intent",
    },
    {
      timeSec: 42,
      timestamp: "00:42",
      speaker: "Maya (AI Agent)",
      text: "Understood! Tower B fits this exact criteria with East-facing balconies. Our price band is ₹1.85 to 2.2 Crores. Does that match your planned budget?",
      sentiment: "Budget Qualification",
    },
    {
      timeSec: 68,
      timestamp: "01:08",
      speaker: "Vikramaditya (Prospect)",
      text: "Yes, that fits our budget. Is the tower RERA approved and on schedule?",
      sentiment: "Verification",
    },
    {
      timeSec: 85,
      timestamp: "01:25",
      speaker: "Maya (AI Agent)",
      text: "100%! Karnataka RERA PRM/KA/RERA/1251/446, on schedule for handover in Q4 2027. Can I arrange a VIP site tour for you this Saturday at 11:30 AM?",
      sentiment: "Objection Handled",
    },
    {
      timeSec: 115,
      timestamp: "01:55",
      speaker: "Vikramaditya (Prospect)",
      text: "Saturday 11:30 AM works great for me and my wife. Please share the location on WhatsApp.",
      sentiment: "Converted • Meeting Confirmed",
    },
  ];

  // Auto-play timer simulator
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return totalDuration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const jumpToTime = (sec: number) => {
    setCurrentTime(sec);
    setIsPlaying(true);
  };

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Call Intelligence & Sentiment Player</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            Audio & Sentiment Audit for Every Single Call.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Scrub through audio recordings, jump directly to objections, inspect real-time sentiment scoring, and review automatically extracted CRM fields.
          </p>
        </div>

        {/* Player Container */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-900 text-white p-4 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          
          {/* Top Bar with Call Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-slate-800 gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-white">#SB-98214: Vikramaditya S.</span>
                <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Site Visit Confirmed
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                Outer Ring Road 3BHK • Line: +91 80 4712 ••••
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-[11px] sm:text-xs text-slate-400 font-mono">
                Sentiment: <strong className="text-emerald-400">96/100</strong>
              </span>
              <span className="text-[10px] sm:text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-lg border border-indigo-500/30 font-semibold font-mono">
                Cost: ₹4.85
              </span>
            </div>
          </div>

          {/* Interactive Waveform Audio Scrubber */}
          <div className="py-4 sm:py-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-indigo-400 font-bold text-sm">{formatTime(currentTime)}</span>
              <span>Total: {formatTime(totalDuration)}</span>
            </div>

            {/* Scrubber Progress Bar */}
            <div
              className="relative w-full h-3 bg-slate-800 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                jumpToTime(Math.round(pos * totalDuration));
              }}
            >
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-150"
                style={{ width: `${(currentTime / totalDuration) * 100}%` }}
              ></div>
            </div>

            {/* Chapter Buttons Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 pt-1">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToTime(ch.time)}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-left text-[10px] sm:text-[11px] font-semibold transition-all border ${
                    currentTime >= ch.time && (idx === chapters.length - 1 || currentTime < chapters[idx + 1].time)
                      ? "bg-indigo-600 text-white border-indigo-400 shadow-md"
                      : "bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${ch.color}`}></span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-slate-400">{ch.label.split(" - ")[0]}</span>
                  </div>
                  <span className="truncate block">{ch.label.split(" - ")[1]}</span>
                </button>
              ))}
            </div>

            {/* Play / Pause Controls */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-white" />}
                </button>
                <button
                  onClick={() => jumpToTime(0)}
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Restart Call"
                >
                  <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400">
                <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>HD Audio (16kHz)</span>
              </div>
            </div>
          </div>

          {/* Transcript & Extracted Fields Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 pt-4 border-t border-slate-800">
            
            {/* Left: Synchronized Transcript List */}
            <div className="lg:col-span-7 space-y-2 max-h-56 sm:max-h-64 overflow-y-auto pr-1 scrollbar-none">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Live Speech Dialogue Sync:
              </span>
              {transcript.map((line, lIdx) => {
                const isCurrent =
                  currentTime >= line.timeSec &&
                  (lIdx === transcript.length - 1 || currentTime < transcript[lIdx + 1].timeSec);
                return (
                  <div
                    key={lIdx}
                    onClick={() => jumpToTime(line.timeSec)}
                    className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs leading-relaxed border cursor-pointer transition-all ${
                      isCurrent
                        ? "bg-indigo-950/80 border-indigo-500 text-white shadow-md shadow-indigo-900/20"
                        : "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:border-slate-600"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-indigo-300 text-[10px] sm:text-[11px]">{line.speaker}</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono">{line.timestamp}</span>
                        <span className="text-[9px] sm:text-[10px] bg-slate-700 px-1 py-0.2 rounded text-slate-300">
                          {line.sentiment}
                        </span>
                      </div>
                    </div>
                    <p>{line.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Right: Instant Extracted CRM Fields */}
            <div className="lg:col-span-5 bg-slate-800/60 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-700 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1 mb-2.5">
                  <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Auto-Extracted CRM Variables</span>
                </span>

                <div className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-700/60">
                    <span className="text-slate-400">Prospect:</span>
                    <span className="font-bold text-white">Vikramaditya S.</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/60">
                    <span className="text-slate-400">Configuration:</span>
                    <span className="font-bold text-white truncate max-w-[170px]">3BHK East Balcony</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/60">
                    <span className="text-slate-400">Budget:</span>
                    <span className="font-bold text-emerald-400">₹1.85 – 2.2 Cr</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-700/60">
                    <span className="text-slate-400">Financing:</span>
                    <span className="font-bold text-white">Pre-approved</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Site Visit:</span>
                    <span className="font-bold text-indigo-300">Sat @ 11:30 AM</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-indigo-950/80 rounded-xl border border-indigo-800 text-[10px] sm:text-[11px] text-indigo-300 flex items-center justify-between">
                <span>Webhook Status: Synced</span>
                <span className="font-bold text-emerald-400">200 OK</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
