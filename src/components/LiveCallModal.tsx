"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  PhoneOff,
  Mic,
  Volume2,
  Sparkles,
  CheckCircle2,
  Clock,
  Zap,
  X,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  Smile,
  Flame,
} from "lucide-react";

interface LiveCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveCallModal({ isOpen, onClose }: LiveCallModalProps) {
  const [callState, setCallState] = useState<"ringing" | "connected" | "ended">("ringing");
  const [callDuration, setCallDuration] = useState(0);
  const [selectedResponseIndex, setSelectedResponseIndex] = useState<number | null>(null);
  const [aiIsSpeaking, setAiIsSpeaking] = useState(false);
  const [currentAiSpeech, setCurrentAiSpeech] = useState(
    "Namaste! This is Maya from Sambhash AI. I noticed your interest in our premium 3BHK residences at Outer Ring Road. Are you looking for immediate possession or an upcoming investment?"
  );
  const [conversationHistory, setConversationHistory] = useState<
    { sender: "ai" | "user"; text: string; time: string }[]
  >([
    {
      sender: "ai",
      text: "Namaste! This is Maya from Sambhash AI. I noticed your interest in our premium 3BHK residences at Outer Ring Road. Are you looking for immediate possession or an upcoming investment?",
      time: "00:03",
    },
  ]);

  const userOptions = [
    {
      text: "We're looking for our own family, budget around ₹1.8 to 2.2 Cr. When is possession?",
      aiReply:
        "That's wonderful! Tower B has East-facing 3BHK units in this exact budget with handover by Diwali next year. All units are 100% Vastu compliant and RERA certified.",
      intent: "High Intent • Budget Qualified",
    },
    {
      text: "Is the project RERA approved and are home loans available from SBI and HDFC?",
      aiReply:
        "Yes, absolutely! The project is approved under Karnataka RERA PRM/KA/RERA/1251/446. Pre-approved 8.4% home loans are available from SBI, HDFC, and ICICI Bank with zero processing fees this month.",
      intent: "Compliance Verification • Financing Need",
    },
    {
      text: "Can you send the floor plan on WhatsApp and schedule a site visit for Saturday morning?",
      aiReply:
        "Certainly! I've just triggered our automated system to send the high-res floor plans and site location pin to your WhatsApp. I've also reserved your VIP walkthrough slot for this Saturday at 11:30 AM.",
      intent: "Site Visit Confirmed • WhatsApp Sent",
    },
  ];

  // Web Speech API helper
  const speakText = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 1.05;

      // Try finding an Indian English or female voice
      const voices = window.speechSynthesis.getVoices();
      const indianVoice = voices.find(
        (v) =>
          v.lang.includes("en-IN") ||
          v.name.includes("India") ||
          v.lang.includes("hi") ||
          v.name.includes("Female") ||
          v.name.includes("Google")
      );
      if (indianVoice) {
        utterance.voice = indianVoice;
      }

      utterance.onstart = () => setAiIsSpeaking(true);
      utterance.onend = () => setAiIsSpeaking(false);
      utterance.onerror = () => setAiIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  // When call connects, speak first line
  useEffect(() => {
    if (isOpen) {
      setCallState("ringing");
      setCallDuration(0);
      setSelectedResponseIndex(null);
      setConversationHistory([
        {
          sender: "ai",
          text: "Namaste! This is Maya from Sambhash AI. I noticed your interest in our premium 3BHK residences at Outer Ring Road. Are you looking for immediate possession or an upcoming investment?",
          time: "00:03",
        },
      ]);

      // Auto connect after 2.5s ringing or let user click
      const timer = setTimeout(() => {
        setCallState("connected");
        speakText(
          "Namaste! This is Maya from Sambhash AI. I noticed your interest in our premium 3BHK residences at Outer Ring Road. Are you looking for immediate possession or an upcoming investment?"
        );
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
  }, [isOpen]);

  // Call timer
  useEffect(() => {
    let interval: any;
    if (callState === "connected") {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callState]);

  const handleUserSelect = (index: number) => {
    if (callState !== "connected" || selectedResponseIndex !== null) return;
    setSelectedResponseIndex(index);

    const chosen = userOptions[index];
    const userTime = formatTime(callDuration + 2);

    // Append user response
    setConversationHistory((prev) => [
      ...prev,
      { sender: "user", text: chosen.text, time: userTime },
    ]);

    // AI replies after brief ultra-low latency (450ms)
    setTimeout(() => {
      const aiTime = formatTime(callDuration + 4);
      setCurrentAiSpeech(chosen.aiReply);
      setConversationHistory((prev) => [
        ...prev,
        { sender: "ai", text: chosen.aiReply, time: aiTime },
      ]);
      speakText(chosen.aiReply);
    }, 450);
  };

  const handleEndCall = () => {
    setCallState("ended");
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-white">
        
        {/* Close Button */}
        <button
          onClick={() => {
            if (typeof window !== "undefined" && "speechSynthesis" in window) {
              window.speechSynthesis.cancel();
            }
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Bar */}
        <div className="bg-slate-800/80 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Interactive Live Voice Agent Sandbox
            </span>
          </div>
          <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800">
            Latency: 420ms
          </span>
        </div>

        {/* Ringing Screen */}
        {callState === "ringing" && (
          <div className="p-8 text-center space-y-6">
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
              <div className="sound-ring w-28 h-28 pointer-events-none"></div>
              <div className="sound-ring-delayed w-28 h-28 pointer-events-none"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-500 flex items-center justify-center text-white shadow-xl shadow-indigo-600/30 overflow-hidden border-2 border-indigo-300">
                <img
                  src="/images/avatar-maya.svg"
                  alt="Maya AI"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">Maya (Sambhash AI)</h3>
              <p className="text-xs text-indigo-300 mt-1">Real Estate Property Advisor</p>
              <p className="text-xs text-slate-400 font-mono mt-3 animate-pulse">
                Incoming AI Voice Call...
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4">
              <button
                onClick={() => {
                  setCallState("connected");
                  speakText(currentAiSpeech);
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Accept Call</span>
              </button>
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all"
              >
                <PhoneOff className="w-4 h-4" />
                <span>Decline</span>
              </button>
            </div>
          </div>
        )}

        {/* Connected Call Screen */}
        {callState === "connected" && (
          <div className="p-6 space-y-4">
            
            {/* Top Call Info */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {aiIsSpeaking && (
                    <div className="sound-ring w-12 h-12 -top-1 -left-1 pointer-events-none"></div>
                  )}
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-indigo-600 border border-indigo-400">
                    <img src="/images/avatar-maya.svg" alt="Maya" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-white flex items-center gap-2">
                    <span>Maya</span>
                    <span className="text-[10px] bg-indigo-900/60 text-indigo-300 px-1.5 py-0.2 rounded border border-indigo-700">
                      AI Speaking
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{formatTime(callDuration)}</span>
                  </div>
                </div>
              </div>

              {/* Waveform Equalizer */}
              <div className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                <Volume2 className="w-3.5 h-3.5 text-indigo-400 mr-1" />
                <span className={`w-1 bg-indigo-500 rounded-full ${aiIsSpeaking ? "animate-waveform-1" : "h-2"}`}></span>
                <span className={`w-1 bg-indigo-500 rounded-full ${aiIsSpeaking ? "animate-waveform-2" : "h-3"}`}></span>
                <span className={`w-1 bg-indigo-400 rounded-full ${aiIsSpeaking ? "animate-waveform-3" : "h-5"}`}></span>
                <span className={`w-1 bg-indigo-500 rounded-full ${aiIsSpeaking ? "animate-waveform-4" : "h-3"}`}></span>
                <span className={`w-1 bg-indigo-400 rounded-full ${aiIsSpeaking ? "animate-waveform-5" : "h-2"}`}></span>
              </div>
            </div>

            {/* Live Conversation Transcript Stream */}
            <div className="max-h-56 overflow-y-auto space-y-2.5 pr-1 scrollbar-thin">
              {conversationHistory.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl text-xs leading-relaxed border ${
                    item.sender === "ai"
                      ? "bg-slate-800/90 border-slate-700 text-slate-200"
                      : "bg-indigo-600/30 border-indigo-500/40 text-indigo-100 ml-6"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold text-indigo-400 mb-1">
                    <span>{item.sender === "ai" ? "Maya (AI Agent)" : "You (Prospect)"}</span>
                    <span className="text-slate-500 font-mono">{item.time}</span>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Interactive Response Prompt Options */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Tap a response to reply to Maya:
              </span>
              <div className="space-y-2">
                {userOptions.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleUserSelect(oIdx)}
                    disabled={selectedResponseIndex !== null}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between group ${
                      selectedResponseIndex === oIdx
                        ? "bg-indigo-600 text-white border-indigo-400 shadow-md"
                        : selectedResponseIndex !== null
                        ? "bg-slate-800/50 border-slate-800 text-slate-500 cursor-not-allowed"
                        : "bg-slate-800/90 border-slate-700 hover:border-indigo-500 hover:bg-slate-800 text-slate-200"
                    }`}
                  >
                    <span className="line-clamp-2 pr-2">"{opt.text}"</span>
                    <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* End Call Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={handleEndCall}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors"
              >
                <PhoneOff className="w-4 h-4" />
                <span>End Call Simulation</span>
              </button>
            </div>
          </div>
        )}

        {/* Call Ended Summary Screen */}
        {callState === "ended" && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Call Completed Successfully</h3>
              <p className="text-xs text-slate-400 mt-1">Total Duration: {formatTime(callDuration)}</p>
            </div>

            {/* AI Extracted Lead Summary Box */}
            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-emerald-400">
                <span>AI Call Intelligence Extracted:</span>
                <span className="bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  Status: High Intent (98%)
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Prospect interested in 3BHK flat near Outer Ring Road. Budget verified. Instant WhatsApp brochure dispatched & site visit confirmed for Saturday at 11:30 AM.
              </p>
              <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>HubSpot Sync: 200 OK</span>
                <span>Cost: ₹{((callDuration / 60) * 3.5).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setCallState("ringing");
                  setCallDuration(0);
                  setSelectedResponseIndex(null);
                  setTimeout(() => {
                    setCallState("connected");
                    speakText(currentAiSpeech);
                  }, 1500);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-bold text-xs text-white transition-colors"
              >
                Try Call Again
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-xs text-slate-300 transition-colors"
              >
                Close Simulator
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-slate-950/80 px-6 py-2.5 border-t border-slate-800 text-center text-[10px] text-slate-400">
          Powered by Sambhash AI low-latency voice synthesis & natural turn-taking engine
        </div>
      </div>
    </div>
  );
}