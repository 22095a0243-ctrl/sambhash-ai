"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, TrendingUp, CheckCircle, Sparkles, DollarSign, Users, Clock } from "lucide-react";

export default function RoiCalculator() {
  const [callsPerMonth, setCallsPerMonth] = useState(8000);
  const [avgCallDuration, setAvgCallDuration] = useState(2.5); // minutes
  const [telecallerSalary, setTelecallerSalary] = useState(22000); // INR per month

  // Calculation logic
  const callsPerAgentPerMonth = 1600;
  const agentsRequired = Math.max(1, Math.ceil(callsPerMonth / callsPerAgentPerMonth));
  const humanMonthlyCost = agentsRequired * telecallerSalary * 1.25;
  const totalMinutes = callsPerMonth * avgCallDuration;
  const sambhashMonthlyCost = totalMinutes * 3.5;
  const monthlySavings = Math.max(0, humanMonthlyCost - sambhashMonthlyCost);
  const percentageSavings = humanMonthlyCost > 0 ? Math.round((monthlySavings / humanMonthlyCost) * 100) : 0;
  const hoursSaved = Math.round((callsPerMonth * avgCallDuration) / 60);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-12 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Instant ROI & Cost-Savings Calculator</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            Calculate Your Savings vs Traditional Telecallers.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            See how much your organization saves each month by replacing repetitive outbound & inbound calling with Sambhash AI voice automation.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Sliders Input Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Configure Your Calling Parameters</span>
              </h3>

              {/* Slider 1: Monthly Calls */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="calls-slider" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Monthly Calls Volume
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-indigo-600 font-mono">
                    {callsPerMonth.toLocaleString("en-IN")} calls
                  </span>
                </div>
                <input
                  id="calls-slider"
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={callsPerMonth}
                  onChange={(e) => setCallsPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-mono">
                  <span>1,000</span>
                  <span>25,000</span>
                  <span>50,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Duration */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="duration-slider" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Average Call Duration
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-indigo-600 font-mono">
                    {avgCallDuration} minutes
                  </span>
                </div>
                <input
                  id="duration-slider"
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={avgCallDuration}
                  onChange={(e) => setAvgCallDuration(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-mono">
                  <span>1 min</span>
                  <span>3 mins</span>
                  <span>6 mins</span>
                </div>
              </div>

              {/* Slider 3: Human Agent Salary */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="salary-slider" className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Telecaller Monthly Salary
                  </label>
                  <span className="text-sm sm:text-base font-extrabold text-indigo-600 font-mono">
                    {formatCurrency(telecallerSalary)}
                  </span>
                </div>
                <input
                  id="salary-slider"
                  type="range"
                  min="15000"
                  max="40000"
                  step="1000"
                  value={telecallerSalary}
                  onChange={(e) => setTelecallerSalary(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-400 mt-1 font-mono">
                  <span>₹15,000</span>
                  <span>₹25,000</span>
                  <span>₹40,000+</span>
                </div>
              </div>
            </div>

            {/* Quick Operational comparison breakdown */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase">Human Team</span>
                <div className="text-base sm:text-xl font-bold text-slate-800 mt-0.5">{agentsRequired} Full-Time Reps</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">Plus hiring & training</div>
              </div>
              <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100">
                <span className="text-[10px] sm:text-[11px] font-medium text-indigo-600 uppercase">Sambhash AI</span>
                <div className="text-base sm:text-xl font-bold text-indigo-900 mt-0.5">Instant 1-Click Scale</div>
                <div className="text-[10px] sm:text-[11px] text-indigo-600/80 mt-0.5">Zero leaves, 24/7 uptime</div>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] sm:text-xs font-medium text-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
                <span>Estimated Cost Comparison</span>
              </div>

              {/* Monthly Savings Highlight */}
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-indigo-300 font-semibold block">
                  Projected Monthly Cost Savings
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-400 tracking-tight mt-1 truncate">
                  {formatCurrency(monthlySavings)}
                </div>
                <div className="inline-flex items-center gap-1.5 mt-2 text-[11px] sm:text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{percentageSavings}% Lower Cost per Month</span>
                </div>
              </div>

              {/* Side-by-side cost details */}
              <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-300 text-[11px] sm:text-xs">Human Team:</span>
                  <span className="font-mono font-bold text-rose-300">{formatCurrency(humanMonthlyCost)}</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-300 text-[11px] sm:text-xs">Sambhash AI (@ ₹3.50/m):</span>
                  <span className="font-mono font-bold text-emerald-300">{formatCurrency(sambhashMonthlyCost)}</span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-slate-300 text-[11px] sm:text-xs">Dialing Time Saved:</span>
                  <span className="font-mono font-bold text-indigo-200">{hoursSaved.toLocaleString()} Hours</span>
                </div>
              </div>
            </div>

            {/* CTA in results card */}
            <div className="relative z-10 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10">
              <Link
                href="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all duration-150"
              >
                <span>Claim Free Credits & Start</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-2">
                ₹100 free test balance upon signup
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
