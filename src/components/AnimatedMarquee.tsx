"use client";

import {
  Sparkles,
  Zap,
  ShieldCheck,
  Languages,
  PhoneCall,
  Bot,
  Activity,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function AnimatedMarquee() {
  const items = [
    { icon: Zap, label: "Sub-650ms Real-Time Voice Latency" },
    { icon: Languages, label: "Fluent Hindi, Hinglish & Regional Accents" },
    { icon: ShieldCheck, label: "TRAI & DND Auto-Scrubbing Compliant" },
    { icon: Bot, label: "Zero-Latency Objection Handling" },
    { icon: Activity, label: "Real-Time Sentiment & Intent Scoring" },
    { icon: Layers, label: "Instant n8n & CRM Webhook Delivery" },
    { icon: PhoneCall, label: "Up to 5,000 Concurrent Outbound Channels" },
    { icon: CheckCircle2, label: "Automated WhatsApp Brochure Dispatch" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 text-white py-3 sm:py-4 border-y border-slate-800 shadow-inner">
      {/* Edge gradient fades - compact on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee">
        {/* First copy */}
        <div className="flex items-center space-x-6 sm:space-x-8 px-2 sm:px-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`a-${idx}`}
                className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-300 whitespace-nowrap"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>{item.label}</span>
                <span className="text-slate-600 pl-3 sm:pl-4">•</span>
              </div>
            );
          })}
        </div>

        {/* Second copy for infinite seamless loop */}
        <div className="flex items-center space-x-6 sm:space-x-8 px-2 sm:px-4" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`b-${idx}`}
                className="flex items-center space-x-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-300 whitespace-nowrap"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <span>{item.label}</span>
                <span className="text-slate-600 pl-3 sm:pl-4">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
