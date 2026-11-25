"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Sparkles, PhoneCall, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-white border-b border-slate-200/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-14 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-950/20 border border-slate-800">
          
          {/* Ambient Glowing Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-500/25 via-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          {/* Floating badges on desktop */}
          <div className="hidden lg:flex items-center gap-2 absolute top-12 left-10 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-float text-xs">
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-200 font-semibold">5,000+ Concurrent Channels</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 absolute bottom-12 right-10 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md animate-float-slow text-xs">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-200 font-semibold">Sub-650ms Real-Time Latency</span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] sm:text-xs font-semibold text-indigo-200 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              <span>Instant Setup • Start Calling in 10 Minutes</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Scale Conversations Without Expanding Payroll?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Equip your sales and customer desks with hyper-realistic Indian AI voice agents. Join 500+ Indian businesses automating millions of conversations today.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 transform hover:-translate-y-0.5"
              >
                <span>Get ₹100 Free Calling Credits</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                <span>Log In to Console</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-[11px] sm:text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero setup fees & no card needed
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Strict per-second INR billing
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                TRAI & DND Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}