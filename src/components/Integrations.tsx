"use client";

import {
  GitMerge,
  Database,
  MessageSquare,
  FileSpreadsheet,
  Cpu,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Integrations() {
  const integrations = [
    {
      icon: GitMerge,
      name: "n8n Automation Engine",
      category: "Workflow",
      badge: "Native Triggers",
      description:
        "Trigger custom calling sequences on new leads, sync call variables, and execute multi-branch post-call logic.",
    },
    {
      icon: MessageSquare,
      name: "WhatsApp Business API",
      category: "Messaging",
      badge: "Instant Dispatch",
      description:
        "Automatically send WhatsApp brochures, payment links, and booking confirmations within 3 seconds of call wrap-up.",
    },
    {
      icon: Database,
      name: "HubSpot, Zoho & Salesforce",
      category: "CRM Systems",
      badge: "Two-Way Sync",
      description:
        "Log recordings, AI summaries, intent tags, and update deal stages directly into your existing CRM pipeline.",
    },
    {
      icon: FileSpreadsheet,
      name: "Excel & Google Sheets",
      category: "Ingestion",
      badge: "Live Sync",
      description:
        "Upload bulk prospect lists with flexible column mapping or stream live leads directly from Google Sheets.",
    },
    {
      icon: Cpu,
      name: "Sarvam & Advanced Voice Models",
      category: "Speech AI",
      badge: "Sub-650ms",
      description:
        "High-fidelity speech engines optimized specifically for Indian languages, Hindi, Hinglish, and regional accents.",
    },
    {
      icon: CreditCard,
      name: "Razorpay INR Payments",
      category: "Billing",
      badge: "Instant Top-Up",
      description:
        "Recharge your prepaid wallet instantly via UPI, NetBanking, or corporate cards with automatic 18% GST tax invoices.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Lead Capture",
      desc: "Facebook Ads, Website Form, or CRM creates new contact.",
      badge: "Trigger",
    },
    {
      step: "02",
      title: "Sambhash AI Dials",
      desc: "Voice Agent calls prospect within 15 seconds.",
      badge: "< 15s Latency",
    },
    {
      step: "03",
      title: "Natural Conversation",
      desc: "Answers queries, handles objections, and qualifies budget.",
      badge: "Indian Accents",
    },
    {
      step: "04",
      title: "WhatsApp Dispatch",
      desc: "Brochure & site visit calendar invite sent instantly.",
      badge: "WhatsApp API",
    },
    {
      step: "05",
      title: "CRM Updated",
      desc: "Recording, transcript, and 'Hot Lead' tag pushed to CRM.",
      badge: "Automated",
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Zero-Friction Integrations</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Seamlessly Plug into Your Existing Tech Stack.
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Sambhash AI connects effortlessly with your current CRM, messaging channels, and automation tools via webhooks, native connectors, and REST APIs.
          </p>
        </div>

        {/* Visual Workflow Automation Diagram */}
        <div className="mb-10 sm:mb-16 rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-4 sm:p-8 shadow-sm overflow-hidden relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200/80 pb-4 mb-4 sm:mb-6 gap-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                End-to-End Automated Calling Workflow
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                Zero Manual Intervention
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-2xs relative flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-indigo-600 font-mono">
                      STEP {wf.step}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {wf.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{wf.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{wf.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Illustration Banner */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200/60 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>Unified Ecosystem Bridge</span>
              </div>
              <h4 className="text-base font-bold text-white">Direct Webhook API &amp; WebSocket Audio Streaming</h4>
              <p className="text-xs text-slate-300 max-w-xl mt-1">
                Sambhash AI supports full bi-directional audio streaming with telephony switches, automated event callbacks, and real-time payload broadcasting.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold text-white transition-colors">
                <GitMerge className="w-4 h-4 text-indigo-300" />
                <span>Explore API Docs</span>
              </span>
            </div>
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Production Ready
                  </span>
                  <span className="text-indigo-600 font-medium">Docs & Webhooks →</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-600">
            Need a custom CRM integration, private on-prem SIP trunk, or proprietary telephony setup?{" "}
            <a href="mailto:support@sambhashai.com" className="text-indigo-600 font-semibold underline underline-offset-2">
              Talk to our solutions engineering team
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}