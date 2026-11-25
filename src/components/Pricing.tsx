"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, ShieldCheck, Zap, Info, HelpCircle } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"standard" | "volume">("standard");

  const plans = [
    {
      name: "Starter / Basic",
      rate: billingCycle === "volume" ? "₹3.15" : "₹3.50",
      regularRate: "₹3.50",
      unit: "per minute",
      description: "Ideal for early-stage teams launching automated lead qualification.",
      badge: "Get Started",
      isPopular: false,
      features: [
        "Core AI voice agent configuration",
        "Lead import via CSV & Excel files",
        "Standard calling hours & schedules",
        "Full call recordings & transcripts",
        "Standard sentiment & intent tagging",
        "Community & email support",
      ],
      ctaText: "Start Free with Starter",
    },
    {
      name: "Standard / Growth",
      rate: billingCycle === "volume" ? "₹4.50" : "₹5.00",
      regularRate: "₹5.00",
      unit: "per minute",
      description: "Best for scaling sales & marketing teams with active campaigns.",
      badge: "Most Popular",
      isPopular: true,
      features: [
        "Everything in Starter",
        "Multi-turn objection handling & prompt tuning",
        "n8n webhook triggers & instant CRM syncing",
        "Automated WhatsApp message dispatch",
        "Priority campaign queueing & retry logic",
        "Standard business hour priority support",
      ],
      ctaText: "Start with Growth",
    },
    {
      name: "Enterprise / Custom",
      rate: billingCycle === "volume" ? "₹6.30" : "₹7.00",
      regularRate: "₹7.00",
      unit: "per minute",
      description: "For high-volume operations requiring dedicated telephony & custom models.",
      badge: "High Concurrency",
      isPopular: false,
      features: [
        "Everything in Growth",
        "Custom cloned voices & regional dialect models",
        "Multi-agent workflow branching",
        "Private telephony / SIP trunk integration",
        "Dedicated account manager & SLA guarantee",
        "Up to 5,000 concurrent calling channels",
      ],
      ctaText: "Contact Enterprise",
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 lg:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Usage-Based Transparent Pricing</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Pay Only for Connected Talk Time.
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            No expensive software seats or forced annual locks. Recharge your wallet in INR and get exact per-minute drawdown.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-6 sm:mt-8 inline-flex items-center p-1 bg-white border border-slate-200 rounded-xl shadow-xs">
            <button
              onClick={() => setBillingCycle("standard")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                billingCycle === "standard"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pay As You Go
            </button>
            <button
              onClick={() => setBillingCycle("volume")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                billingCycle === "volume"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Volume Recharge</span>
              <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                10% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl sm:rounded-3xl bg-white border p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? "border-indigo-600 shadow-xl shadow-indigo-600/10 ring-2 ring-indigo-600 lg:-translate-y-2"
                  : "border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-200" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                  {!plan.isPopular && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-slate-100 text-slate-600">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    {plan.rate}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">
                    /{plan.unit}
                  </span>
                </div>

                {billingCycle === "volume" && (
                  <div className="text-[11px] font-medium text-emerald-600 mb-3">
                    Discounted from {plan.regularRate}/min with volume recharge
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    What's included:
                  </span>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/signup"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
                    plan.isPopular
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* GST & Wallet Clarity Note */}
        <div className="mt-8 sm:mt-12 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 max-w-4xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block mb-0.5">Strict Per-Second Drawdown</strong>
                You are only charged for actual connected voice talk time. Unanswered calls and failed rings are zero-rated.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block mb-0.5">Automated GST Invoices</strong>
                Recharge via Razorpay with your company GSTIN to instantly receive 18% Input Tax Credit tax invoices.
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block mb-0.5">No Balance Expiration</strong>
                Your recharged wallet balance remains valid indefinitely and does not lapse at the end of the month.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}