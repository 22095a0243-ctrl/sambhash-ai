"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LiveCallModal from "./LiveCallModal";
import {
  ArrowRight,
  Phone,
  Mic,
  Sparkles,
  Play,
  Pause,
  CheckCircle2,
  Clock,
  Volume2,
  TrendingUp,
  Shield,
  Zap,
  Building,
  GraduationCap,
  Briefcase,
  ChevronRight,
  PhoneCall,
  Flame,
  BadgeCheck,
} from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);
  const [callTimer, setCallTimer] = useState(138); // 02:18
  const [isLiveCallModalOpen, setIsLiveCallModalOpen] = useState(false);

  const agents = [
    {
      name: "Maya",
      title: "Real Estate Specialist",
      tag: "Hinglish / English",
      industry: "Real Estate",
      avatarBg: "bg-indigo-600",
      avatarInitials: "MY",
      avatarImage: "/images/avatar-maya.svg",
      leadName: "Vikramaditya S.",
      leadPhone: "+91 98450 •••••",
      campaign: "Q4 Prime Residency Outreach",
      budget: "₹1.8 – 2.2 Cr",
      intent: "High Intent (96%)",
      transcript: [
        {
          sender: "Maya (AI)",
          text: "Namaste Vikram ji! I saw you checked out our 3BHK flats at Outer Ring Road. Are you looking for self-use or investment?",
          time: "00:14",
        },
        {
          sender: "Customer",
          text: "Hey Maya! We're planning to move in by Diwali next year. We need a spacious balcony and 2 car parkings.",
          time: "00:22",
        },
        {
          sender: "Maya (AI)",
          text: "Perfect! Tower B fits this exact criteria with East-facing balconies. Can I arrange a VIP site visit for you this Saturday at 11:30 AM?",
          time: "00:33",
        },
      ],
      aiAction: "Site visit confirmed for Saturday 11:30 AM. Brochure & location pin dispatched via WhatsApp.",
    },
    {
      name: "Kabir",
      title: "EdTech Admissions Counsellor",
      tag: "Hindi / English",
      industry: "EdTech",
      avatarBg: "bg-emerald-600",
      avatarInitials: "KB",
      avatarImage: "/images/avatar-arjun.svg",
      leadName: "Ananya Deshmukh",
      leadPhone: "+91 97120 •••••",
      campaign: "Executive Data Science Batch '26",
      budget: "₹2.5 Lakhs",
      intent: "Qualified Candidate",
      transcript: [
        {
          sender: "Kabir (AI)",
          text: "Hi Ananya, this is Kabir from the admissions desk. Did you get a chance to review the Data Science syllabus?",
          time: "00:08",
        },
        {
          sender: "Customer",
          text: "Yes, I wanted to know if weekend live mentoring sessions with industry leaders are included?",
          time: "00:18",
        },
        {
          sender: "Kabir (AI)",
          text: "Absolutely! Every Saturday from 10 AM to 1 PM. Would you like me to book your 1-on-1 career counselling slot with our Dean?",
          time: "00:27",
        },
      ],
      aiAction: "Counselling slot booked for Thursday 6 PM. Scholarship brochure sent to email.",
    },
    {
      name: "Priya",
      title: "FinTech Loan Specialist",
      tag: "English / Tamil",
      industry: "FinTech & Banking",
      avatarBg: "bg-violet-600",
      avatarInitials: "PR",
      avatarImage: "/images/avatar-maya.svg",
      leadName: "Karthik Rajan",
      leadPhone: "+91 94440 •••••",
      campaign: "Pre-approved SME Credit Lines",
      budget: "₹25 Lakhs Pre-approved",
      intent: "Immediate Requirement",
      transcript: [
        {
          sender: "Priya (AI)",
          text: "Good afternoon Karthik! Your business credit line of ₹25 Lakhs is pre-approved with zero collateral requirement.",
          time: "00:09",
        },
        {
          sender: "Customer",
          text: "What would be the interest rate and how soon can the funds be disbursed to our current account?",
          time: "00:19",
        },
        {
          sender: "Priya (AI)",
          text: "Rates start at 1.15% per month reducing balance, and funds are disbursed in just 4 business hours after quick OTP verification.",
          time: "00:30",
        },
      ],
      aiAction: "KYC link generated. Verified business turnover & sent approval link via SMS.",
    },
  ];

  const currentAgent = agents[activeAgentIndex];

  // Increment call timer slightly when playing
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCallTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-slate-50/50 border-b border-slate-200/70">
      {/* Background Decorative Ambient Blobs & Dot Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/5 blur-3xl rounded-full pointer-events-none"></div>
      {/* Hero Banner Illustration */}
      <img src="/images/hero-banner.svg" alt="AI Voice Calls illustration" className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-semibold text-indigo-700 shadow-sm hover:bg-indigo-100/70 transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-ping"></span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Next-Gen Indian Voice AI Platform • Sub-650ms Latency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Turn Every Phone Call Into a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600">
                High-Converting
              </span>{" "}
              Opportunity.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Deploy human-grade AI voice agents that speak fluent <strong className="text-slate-800 font-semibold">Hindi, Hinglish, & regional accents</strong>. Qualify leads within 15 seconds, automate follow-ups, and integrate with CRM & WhatsApp at just <strong className="text-indigo-600 font-semibold">₹3.50/min</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:-translate-y-0.5"
              >
                <span>Start Free Trial (Get ₹100 Credits)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setIsLiveCallModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-indigo-400 rounded-xl shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 group"
              >
                <div className="relative flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="absolute w-3.5 h-3.5 rounded-full border border-emerald-400 animate-ping"></span>
                </div>
                <span>Experience Live Call in Browser</span>
                <ChevronRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 pt-1 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                No setup fees or hidden contracts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                TRAI & DND compliant
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Instant n8n & CRM Webhooks
              </span>
            </div>

            {/* Metrics Counters */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-sm">
                <div className="text-2xl font-extrabold text-slate-900 tracking-tight">1.4M+</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Calls Automated</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-sm">
                <div className="text-2xl font-extrabold text-indigo-600 tracking-tight">&lt;650ms</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Voice Latency</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/80 shadow-sm">
                <div className="text-2xl font-extrabold text-emerald-600 tracking-tight">72%</div>
                <div className="text-[11px] font-medium text-slate-500 mt-0.5">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Voice Agent Simulation */}
          <div className="lg:col-span-6 relative">
            
            {/* Floating Live Latency Badge (Animated) */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -top-5 -right-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-lg shadow-indigo-900/10 animate-float text-xs font-semibold text-slate-800">
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="absolute w-4 h-4 rounded-full border border-emerald-400 animate-ping"></span>
              </div>
              <span>Turn Latency: <strong className="text-indigo-600">420ms</strong></span>
              <span className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded font-mono font-bold">Live Stream</span>
            </div>

            {/* Floating Live Lead Outcome Badge (Animated) */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -left-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-200/90 shadow-lg shadow-indigo-900/10 animate-float-slow text-xs font-semibold text-slate-800">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-900">Prospect Qualified</div>
                <div className="text-[10px] text-slate-500">Site visit booked • WhatsApp dispatched</div>
              </div>
            </div>

            <div className="relative mx-auto max-w-xl lg:max-w-none rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-5 sm:p-6 shadow-2xl shadow-indigo-900/10 ring-1 ring-slate-900/5">
              
              {/* Header Bar with Agent Switcher Tabs */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    live.sambhashai.com
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsLiveCallModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all transform hover:scale-105"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>Speak Live with Maya</span>
                  </button>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Active Stream</span>
                  </span>
                </div>
              </div>

              {/* Agent Selector Badges */}
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex-shrink-0">
                  Switch Agent:
                </span>
                {agents.map((ag, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveAgentIndex(idx);
                      setCallTimer(95 + idx * 30);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex-shrink-0 flex items-center gap-1.5 ${
                      activeAgentIndex === idx
                        ? "bg-indigo-600 text-white shadow-sm font-semibold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <span>{ag.name}</span>
                    <span className="text-[10px] opacity-80">({ag.industry})</span>
                  </button>
                ))}
              </div>

              {/* Active Voice Agent Profile Card */}
              <div className="rounded-xl bg-gradient-to-r from-slate-50 via-indigo-50/30 to-purple-50/20 border border-slate-200/80 p-4 mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      {isPlaying && (
                        <div className="sound-ring w-14 h-14 -top-1 -left-1 pointer-events-none"></div>
                      )}
                      <div className={`w-12 h-12 rounded-xl ${currentAgent.avatarBg} text-white font-bold flex items-center justify-center text-base shadow-sm overflow-hidden relative border border-white/20`}>
                        {currentAgent.avatarImage ? (
                          <img
                            src={currentAgent.avatarImage}
                            alt={currentAgent.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = "none";
                            }}
                          />
                        ) : null}
                        <span className="absolute inset-0 flex items-center justify-center -z-10 font-bold">
                          {currentAgent.avatarInitials}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-slate-900">{currentAgent.name}</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                          {currentAgent.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{currentAgent.title}</p>
                    </div>
                  </div>

                  {/* Audio Controls & Equalizer */}
                  <div className="flex items-center gap-3 bg-white border border-slate-200/80 px-3 py-2 rounded-xl shadow-sm">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition-colors"
                      title={isPlaying ? "Pause simulated voice" : "Play voice"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-indigo-600" />}
                    </button>

                    {/* Waveform Visualization */}
                    <div className="flex items-center gap-1 h-6">
                      <span className={`w-1 bg-indigo-500 rounded-full ${isPlaying ? "animate-waveform-1" : "h-2"}`}></span>
                      <span className={`w-1 bg-indigo-500 rounded-full ${isPlaying ? "animate-waveform-2" : "h-3"}`}></span>
                      <span className={`w-1 bg-indigo-600 rounded-full ${isPlaying ? "animate-waveform-3" : "h-5"}`}></span>
                      <span className={`w-1 bg-indigo-600 rounded-full ${isPlaying ? "animate-waveform-4" : "h-3"}`}></span>
                      <span className={`w-1 bg-indigo-400 rounded-full ${isPlaying ? "animate-waveform-5" : "h-4"}`}></span>
                      <span className={`w-1 bg-indigo-500 rounded-full ${isPlaying ? "animate-waveform-6" : "h-2"}`}></span>
                    </div>

                    <div className="text-xs font-mono font-semibold text-slate-700 flex items-center gap-1 border-l border-slate-200 pl-2">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {formatTimer(callTimer)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead & Campaign Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Connected Prospect</div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5">{currentAgent.leadName}</div>
                  <div className="text-xs text-slate-500">{currentAgent.leadPhone}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <BadgeCheck className="w-3 h-3" />
                    <span>{currentAgent.intent}</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Campaign & Budget</div>
                  <div className="font-bold text-slate-900 text-sm mt-0.5 truncate">{currentAgent.campaign}</div>
                  <div className="text-xs text-slate-500">Value: {currentAgent.budget}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                    <Zap className="w-3 h-3 text-indigo-600" />
                    <span>480ms AI Latency</span>
                  </div>
                </div>
              </div>

              {/* Live Speech-to-Text Conversation Transcript Box */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 mb-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 border-b border-slate-200/80 pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-indigo-600" />
                    Live Audio Dialogue & Natural Flow
                  </span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    Zero Hallucination Guarantee
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {currentAgent.transcript.map((msg, mIdx) => (
                    <div
                      key={mIdx}
                      className={`p-2.5 rounded-lg border ${
                        msg.sender.includes("AI")
                          ? "bg-white border-indigo-100 text-slate-800 shadow-2xs"
                          : "bg-indigo-50/60 border-indigo-200/60 text-slate-900 font-medium ml-4"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1 text-[10px]">
                        <span className="font-bold text-indigo-700">{msg.sender}</span>
                        <span className="text-slate-400 font-mono">{msg.time}</span>
                      </div>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Auto-Action & Webhook Notification */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 flex items-start gap-2.5 text-xs text-emerald-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="font-semibold text-emerald-950 flex items-center justify-between">
                    <span>Instant Workflow Execution</span>
                    <span className="text-[10px] font-mono text-emerald-700">Webhook Status: 200 OK</span>
                  </div>
                  <p className="text-emerald-800 mt-0.5 leading-relaxed">{currentAgent.aiAction}</p>
                </div>
              </div>

              {/* Subtle footer label */}
              <div className="mt-3 text-center">
                <span className="text-[11px] text-slate-400">
                  ⚡ Interactive voice preview simulator • Click agents above to view real multi-industry conversations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Social Proof Logos & Trust Bar */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Empowering modern sales & calling operations across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
              <Building className="w-4 h-4 text-indigo-600" />
              <span>Godrej Properties Partners</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Allen & Aakash Institutes</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <span>Square Yards Network</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
              <PhoneCall className="w-4 h-4 text-indigo-600" />
              <span>500+ Active Outbound Call Desks</span>
            </div>
          </div>
        </div>
        {/* Live Call Simulation Modal */}
        <LiveCallModal
          isOpen={isLiveCallModalOpen}
          onClose={() => setIsLiveCallModalOpen(false)}
        />
      </div>
    </section>
  );
}