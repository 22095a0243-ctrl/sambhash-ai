"use client";

import { useState } from "react";
import {
  TrendingUp,
  Building2,
  GraduationCap,
  Briefcase,
  Star,
  Quote,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CustomerSuccessShowcase() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      company: "Prestige & Brigade Partner Desk",
      logoIcon: Building2,
      industry: "Real Estate • Bangalore & Pune",
      metrics: [
        { label: "Site Visits Booked", before: "48 / mo", after: "196 / mo", change: "+308%" },
        { label: "Lead Response Time", before: "4.5 Hours", after: "18 Seconds", change: "-99%" },
        { label: "Cost Per Lead", before: "₹380", after: "₹45", change: "-88%" },
      ],
      quote:
        "“Before Sambhash AI, our telecallers took hours to reach portal leads, by which time the buyer had already spoken to a rival broker. Now Maya calls within 20 seconds, answers complex Vastu and pricing questions, and sends WhatsApp brochures immediately.”",
      author: "Rajeshwar Rao",
      role: "VP of Sales & Marketing",
    },
    {
      company: "Aspirant EdTech & Coaching",
      logoIcon: GraduationCap,
      industry: "EdTech & Admissions • Delhi NCR",
      metrics: [
        { label: "Monthly Calls Handled", before: "12,000", after: "55,000+", change: "4.5x Scale" },
        { label: "Counselling Slot Bookings", before: "18%", after: "42%", change: "+133%" },
        { label: "Dialer Payroll Overhead", before: "₹5.4 Lakhs", after: "₹1.1 Lakhs", change: "-80%" },
      ],
      quote:
        "“During our peak NEET and JEE admission weeks, our admissions desk was completely overwhelmed. With Sambhash AI, Kabir screened 45,000 students, explained batch details in polite Hindi/English, and filtered the most serious students for our senior academic dean.”",
      author: "Sunita Deshpande",
      role: "Head of Student Admissions",
    },
    {
      company: "Apex Capital & SME Lending",
      logoIcon: Briefcase,
      industry: "BFSI & FinTech • Mumbai",
      metrics: [
        { label: "Completed Digital KYCs", before: "34%", after: "71%", change: "+108%" },
        { label: "Script Compliance Violations", before: "12.4%", after: "0.0%", change: "Zero Errors" },
        { label: "Disbursement Turnaround", before: "48 Hours", after: "6 Hours", change: "8x Faster" },
      ],
      quote:
        "“In banking, compliance is paramount. Human agents frequently skip mandatory risk disclaimers. Sambhash AI executes 100% of our regulatory scripts with natural warmth and verified OTP handoff. It has transformed our SME loan portfolio.”",
      author: "Aditya Khurana",
      role: "Chief Operating Officer",
    },
  ];

  const current = stories[activeStory];
  const Logo = current.logoIcon;

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-semibold text-emerald-700">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Revenue Impact</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            Real Stories. Measurable Business Outcomes.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover how high-volume sales and operations teams in India transformed customer acquisition costs with Sambhash AI voice agents.
          </p>

          {/* Company Switcher Tabs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {stories.map((st, sIdx) => {
              const StLogo = st.logoIcon;
              return (
                <button
                  key={sIdx}
                  onClick={() => setActiveStory(sIdx)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeStory === sIdx
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <StLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">{st.company.split("•")[0].trim()}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Case Study Card */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-8 lg:p-10 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Column: Metrics Grid */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold flex-shrink-0">
                  <Logo className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base truncate">{current.company}</h3>
                  <span className="text-[11px] sm:text-xs text-indigo-600 font-semibold">{current.industry}</span>
                </div>
              </div>

              {/* 3 Metric Stats */}
              <div className="space-y-2.5 sm:space-y-3 pt-1">
                {current.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-500 block truncate">
                        {m.label}
                      </span>
                      <div className="flex items-center gap-1.5 mt-0.5 text-[11px] sm:text-xs text-slate-500 flex-wrap">
                        <span>Before: <strong className="text-slate-700">{m.before}</strong></span>
                        <span>➔</span>
                        <span>After: <strong className="text-indigo-600 font-bold">{m.after}</strong></span>
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-xs font-black text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-1 rounded-full border border-emerald-200 font-mono flex-shrink-0">
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quote & Executive Endorsement */}
            <div className="lg:col-span-7 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-indigo-100/80 flex flex-col justify-between">
              <div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400 mb-2 sm:mb-3 opacity-60" />
                <p className="text-xs sm:text-sm lg:text-base text-slate-800 italic leading-relaxed font-serif">
                  {current.quote}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-indigo-100 flex items-center justify-between gap-2 flex-wrap">
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">{current.author}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500">{current.role}</div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
