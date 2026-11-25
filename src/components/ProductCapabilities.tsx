"use client";

import {
  Bot,
  Users,
  PhoneForwarded,
  FileText,
  Workflow,
  CreditCard,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

export default function ProductCapabilities() {
  const capabilities = [
    {
      icon: Bot,
      tag: "Conversational Intelligence",
      badge: "< 650ms Latency",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      title: "Hyper-Realistic Voice Agents",
      description:
        "Equip agents with custom instructions, objection-handling logic, and authentic Indian accents in Hindi, Hinglish, English, Tamil, and Telugu.",
      metric: "99.2% Human-Like Natural Cadence",
    },
    {
      icon: Users,
      tag: "Data Ingestion",
      badge: "Instant Mapping",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      title: "Intelligent Lead Pipeline",
      description:
        "Seamlessly import thousands of contacts via CSV, Excel, or direct Webhook APIs with automatic duplicate scrubbing and column mapping.",
      metric: "50,000+ Leads Processed / Hour",
    },
    {
      icon: PhoneForwarded,
      tag: "Campaign Engine",
      badge: "High Concurrency",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Scalable Outbound Campaigns",
      description:
        "Execute automated parallel calling campaigns with intelligent retry rules, customizable dialing hours, and TRAI/DND compliant safeguards.",
      metric: "Up to 5,000 Concurrent Channels",
    },
    {
      icon: FileText,
      tag: "Post-Call Analytics",
      badge: "Full Audio & Text",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      title: "Deep Call Intelligence & Summaries",
      description:
        "Extract actionable intent, sentiment scoring, and concise bullet summaries automatically generated the moment a phone call wraps up.",
      metric: "100% Automated CRM Field Updates",
    },
    {
      icon: Workflow,
      tag: "Ecosystem Sync",
      badge: "Zero-Code Triggers",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      title: "Automated WhatsApp & Webhooks",
      description:
        "Trigger immediate post-call WhatsApp brochures, calendar booking links, or CRM status updates via native n8n and REST webhook workflows.",
      metric: "Sub-3-second Post-Call Delivery",
    },
    {
      icon: CreditCard,
      tag: "Financial Clarity",
      badge: "Per-Second Precision",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      title: "Transparent INR Wallet Billing",
      description:
        "Pay strictly for connected talk time with no hidden monthly software licenses. Instant UPI and card top-ups via Razorpay with automated GST tax invoices.",
      metric: "From ₹3.50 / Minute Flat",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Enterprise-Grade Architecture</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            Everything You Need to Run High-Converting Voice Operations.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From natural multi-turn prompt engineering to bulk campaign execution, Sambhash AI delivers the complete toolchain for modern revenue teams.
          </p>
        </div>

        {/* 6 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-7 shadow-xs hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100/60 text-indigo-600 border border-indigo-200/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white shadow-2xs">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className={`text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border ${cap.badgeColor}`}>
                      {cap.badge}
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                    {cap.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Zap className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span className="truncate">{cap.metric}</span>
                  </span>
                  <span className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual AI Voice Architecture Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] sm:text-xs font-semibold">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400" />
                <span>Next-Gen Neural Speech Engine</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Sub-650ms Turn-Taking with Native Interruption Recovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Unlike traditional robotic IVRs or high-latency wrappers, Sambhash AI pairs acoustic stream processing with real-time semantic tokenization. When a human customer interrupts mid-sentence, the AI ceases audio streaming in under 80ms and adapts seamlessly.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2 text-left">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">&lt;80ms</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Barge-In Cutoff</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-indigo-300 font-mono">10+</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Indian Accents</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-lg sm:text-xl font-extrabold text-cyan-400 font-mono">99.4%</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">ASR Accuracy</div>
                </div>
              </div>
            </div>

            {/* Neural Graphic */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 shadow-xl shadow-indigo-500/20 max-w-xs sm:max-w-sm w-full">
                <img
                  src="/images/hero-ai-voice.svg"
                  alt="Sambhash AI Neural Voice Engine"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
