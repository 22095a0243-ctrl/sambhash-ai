"use client";

import {
  ShieldCheck,
  Lock,
  Database,
  FileCheck,
  Server,
  EyeOff,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function SecurityCompliance() {
  const pillars = [
    {
      icon: Database,
      title: "100% Indian Data Residency",
      badge: "DPDP Act Compliant",
      desc: "All audio files, customer transcripts, and lead databases are housed strictly within India on AWS Mumbai (ap-south-1) and GCP Delhi.",
    },
    {
      icon: ShieldCheck,
      title: "Automated TRAI DND Scrubbing",
      badge: "Regulatory Protection",
      desc: "Contact lists are automatically screened against the National Do Not Call (NDNC) registry prior to dialing, safeguarding your brand.",
    },
    {
      icon: Lock,
      title: "AES-256 Audio Encryption",
      badge: "Bank-Grade Security",
      desc: "Call recordings and transcripts are encrypted at rest with AES-256 and transmitted using secure TLS 1.3 encrypted voice pipelines.",
    },
    {
      icon: EyeOff,
      title: "PII Masking & Privacy Guard",
      badge: "Zero Data Leakage",
      desc: "Automatically redact sensitive customer data (such as Aadhaar, PAN, and card details) from generated audio transcripts.",
    },
    {
      icon: Server,
      title: "Dedicated Telephony Carriers",
      badge: "Legitimate Caller ID",
      desc: "Direct carrier interconnects with Airtel, Tata Tele, and Jio ensure high telecom reputation scores with zero Truecaller spam tagging.",
    },
    {
      icon: FileCheck,
      title: "ISO 27001 & SOC-2 Standards",
      badge: "Enterprise SLA",
      desc: "Built with strict role-based access control (RBAC), multi-factor authentication, and comprehensive audit trails for every operation.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-indigo-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bank-Grade Trust & Regulatory Safety</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-white">
            Built for Enterprises Where Compliance Is Non-Negotiable.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From BFSI regulatory standards to Indian telecom laws, Sambhash AI is engineered to protect your brand reputation and customer privacy.
          </p>
        </div>

        {/* 6 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 sm:p-7 shadow-lg hover:border-indigo-500/60 hover:bg-slate-800/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-indigo-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Fully Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}