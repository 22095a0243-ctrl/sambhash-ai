"use client";

import { useState } from "react";
import {
  PhoneIncoming,
  Clock,
  Zap,
  PhoneForwarded,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
  Headphones,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function InboundReceptionist() {
  const [activeScenario, setActiveScenario] = useState<"afterhours" | "overflow" | "transfer">("afterhours");

  const scenarios = {
    afterhours: {
      title: "After-Hours & Weekend Answering (24/7)",
      time: "Sunday, 10:45 PM",
      caller: "Dr. Arvind Mehta (HNI Buyer)",
      agentGreeting: "“Good evening Dr. Mehta! Thank you for calling Prestige Palm Residences. Our site sales office is closed for the day, but I can share the 3BHK penthouse floor plans on your WhatsApp right now, or schedule a priority callback with our sales director tomorrow at 10 AM. Which would you prefer?”",
      outcome: "Penthouse brochure PDF sent via WhatsApp. Callback scheduled for Monday 10:00 AM.",
      badge: "Zero Lost Enquiries",
    },
    overflow: {
      title: "Peak Rush & Busy Line Overflow",
      time: "Monday, 11:30 AM (All Human Desks Busy)",
      caller: "Rohan Verma (Admissions Inquiry)",
      agentGreeting: "“Namaste Rohan! Welcome to Allen Career Institute. All our senior academic counsellors are currently attending other students, but I can instantly answer your questions regarding our NEET 2027 classroom batches and fee structures right now!”",
      outcome: "Answered syllabus & fee details. Captured preferred batch timing & booked counselling appointment.",
      badge: "Zero Hold Time",
    },
    transfer: {
      title: "Live Warm Call Transfer to Human Rep",
      time: "Wednesday, 3:15 PM",
      caller: "Pooja Hegde (Pre-approved Borrower)",
      agentGreeting: "“Thank you for verifying your business turnover, Ms. Hegde! Since your loan requirement exceeds ₹50 Lakhs, I am performing a live warm-transfer to our senior credit manager, Mr. Sandeep, who is available on line right now.”",
      outcome: "Call seamlessly bridged to human credit officer in 3 seconds with full conversation briefing.",
      badge: "Live SIP Transfer",
    },
  };

  const current = scenarios[activeScenario];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-indigo-50/20 to-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <PhoneIncoming className="w-3.5 h-3.5 text-indigo-600" />
            <span>24/7 Inbound Calling Intelligence</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            Never Miss Another Inbound Customer Call.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Replace robotic press-1 IVR menus with an intelligent 24/7 AI receptionist. Handle thousands of simultaneous inbound calls, answer FAQs, and warm-transfer VIP leads to human staff.
          </p>

          {/* Scenario Tabs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {[
              { id: "afterhours", label: "After-Hours & Weekends" },
              { id: "overflow", label: "Peak Overflow (0s Wait)" },
              { id: "transfer", label: "Live Warm Transfer" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScenario(tab.id as any)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeScenario === tab.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Live Inbound Visualizer Card */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left: Interactive Simulated Incoming Call */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-4 sm:p-6 text-white space-y-3.5 sm:space-y-4 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-3 gap-2">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                  <span className="font-mono text-slate-300 truncate">080 4712 ••••</span>
                </div>
                <span className="text-[9px] sm:text-[10px] bg-emerald-950 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-800 flex-shrink-0">
                  {current.badge}
                </span>
              </div>

              <div className="text-center py-2 sm:py-4 space-y-1.5 sm:space-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-indigo-600/30 border border-indigo-400 flex items-center justify-center mx-auto text-indigo-300">
                  <PhoneIncoming className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base">{current.caller}</h4>
                <div className="text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Call Time: {current.time}</span>
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-3 text-[11px] sm:text-xs text-slate-300 space-y-1.5 border border-slate-700">
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-indigo-400">
                  <span>AI Inbound Receptionist:</span>
                  <span className="text-emerald-400">Zero Wait</span>
                </div>
                <p className="italic leading-relaxed">{current.agentGreeting}</p>
              </div>

              <div className="p-2.5 sm:p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-[11px] sm:text-xs text-emerald-300 flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{current.outcome}</span>
              </div>
            </div>

            {/* Right: Key Inbound Advantages */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Never leave high-intent callers waiting on hold music or voicemail. Sambhash AI answers simultaneously across dedicated virtual landlines (080, 022, 011) or toll-free 1800 numbers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <Zap className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>Infinite Concurrency</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Handle 500+ callers calling at the exact same minute without a single busy signal.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <PhoneForwarded className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Live SIP Warm-Transfer</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Route VIP buyers or urgent escalations to human sales reps with full context briefing.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <Calendar className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span>Instant Booking & SMS</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Books appointments directly into Google / Outlook calendar and sends WhatsApp confirmation.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Virtual Indian Numbers</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                    Deploy local virtual landlines in Bangalore, Mumbai, Delhi, Hyderabad, or 1800 Toll-Free.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
