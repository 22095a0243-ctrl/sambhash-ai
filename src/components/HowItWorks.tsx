"use client";

import { UploadCloud, Sliders, PlayCircle, BarChart3, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UploadCloud,
      title: "Add & Segment Leads",
      tag: "Lead Import",
      description:
        "Import contact lists effortlessly via CSV, Excel, or real-time CRM webhooks. Automatic DND scrubbing and timezone checking ensure compliance.",
      subBullet: "Supports CSV, XLSX & REST APIs",
    },
    {
      number: "02",
      icon: Sliders,
      title: "Configure AI Voice Agent",
      tag: "Prompt & Tone",
      description:
        "Define your conversation goal, objection responses, and select from natural Indian voices (Hindi, Hinglish, English, Tamil, Telugu).",
      subBullet: "Zero-code prompt tuning studio",
    },
    {
      number: "03",
      icon: PlayCircle,
      title: "Launch Calling Campaign",
      tag: "One-Click Execution",
      description:
        "Initiate hundreds of parallel calls with high-reputation virtual numbers. The system handles retries, busy tones, and voicemail detection automatically.",
      subBullet: "Up to 5,000 concurrent calls",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Review Intelligence & Sync",
      tag: "Actionable Outcomes",
      description:
        "Access complete audio recordings, full transcripts, and AI-extracted buyer intent. Hot leads are instantly dispatched to your sales reps via WhatsApp.",
      subBullet: "Instant CRM & WhatsApp handoff",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <span>Structured Process</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            From Leads to Conversions in Four Simple Steps.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Get your automated calling operation live within 10 minutes. No complicated telephony hardware or engineering overhead required.
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-indigo-100 group-hover:text-indigo-600/30 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                    {step.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">{step.subBullet}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance & Operational Requirement Note */}
        <div className="mt-8 sm:mt-12 rounded-2xl border border-indigo-200/80 bg-gradient-to-r from-indigo-50/60 via-white to-indigo-50/40 p-4 sm:p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700 shadow-xs">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Strict Telecom & TRAI Compliance Guarantee</h4>
            <p className="text-slate-600 mt-0.5 leading-relaxed text-[11px] sm:text-xs">
              Sambhash AI operates with legitimate virtual numbers, automatic DND filtering, opt-out management, and 100% encrypted call storage adhering to Indian telecom standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
