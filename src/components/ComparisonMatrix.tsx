"use client";

import { Check, X, Sparkles, HelpCircle } from "lucide-react";

export default function ComparisonMatrix() {
  const features = [
    {
      title: "Cost Per Minute",
      sambhash: "₹3.50 / min flat",
      humans: "₹18 – ₹28 / min (salaries + overhead)",
      usAi: "₹12 – ₹16 / min ($0.15 - $0.20/min)",
      ivr: "₹1.50 (Robotic press-1 menus)",
      highlight: true,
    },
    {
      title: "Authentic Indian Accents & Hinglish",
      sambhash: "10+ Languages & Regional Dialects",
      humans: "Yes (limited by regional hiring)",
      usAi: "No (Americanized synthetic voices)",
      ivr: "No (Pre-recorded clips only)",
      highlight: true,
    },
    {
      title: "Response & Turn Latency",
      sambhash: "Sub-650ms (Natural conversational flow)",
      humans: "Human speed (variable)",
      usAi: "1,200ms – 2,000ms (High lag)",
      ivr: "N/A (Rigid keypad DTMF)",
      highlight: true,
    },
    {
      title: "Simultaneous Calling Channels",
      sambhash: "Up to 5,000 concurrent channels",
      humans: "1 call per telecaller at a time",
      usAi: "Limited concurrency on standard tier",
      ivr: "High concurrency (No AI)",
      highlight: false,
    },
    {
      title: "TRAI & Indian Telecom DND Compliance",
      sambhash: "100% Automated DND scrubbing",
      humans: "Manual & prone to compliance fines",
      usAi: "No native Indian DND scrubbing",
      ivr: "Partial",
      highlight: false,
    },
    {
      title: "Post-Call WhatsApp Brochure & Sync",
      sambhash: "Instant (<3 seconds via API)",
      humans: "Manual (takes 10-30 mins)",
      usAi: "Requires complex custom webhook code",
      ivr: "Not supported",
      highlight: true,
    },
    {
      title: "Billing Currency & Tax Invoicing",
      sambhash: "INR via UPI / Cards + 18% GST Invoices",
      humans: "Payroll overheads + PF/ESI",
      usAi: "USD Credit Card + Foreign FX fees",
      ivr: "Standard Indian telecom bill",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Honest Solution Comparison</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Modern Indian Sales Teams Choose Sambhash AI.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See how Sambhash AI stacks up against traditional manual telecallers, generic US voice platforms, and obsolete IVR dialers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 shadow-xl overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <th className="py-5 px-6 font-bold text-slate-900 w-2/5">
                    Operational Capability
                  </th>
                  <th className="py-5 px-4 font-extrabold text-indigo-600 bg-indigo-50/70 border-x border-indigo-100 text-center w-1/4">
                    <div className="flex items-center justify-center gap-1.5">
                      <span>Sambhash AI</span>
                      <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Native
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-4 font-semibold text-slate-700 text-center w-1/5">
                    Human Telecaller Desks
                  </th>
                  <th className="py-5 px-4 font-semibold text-slate-700 text-center w-1/5">
                    US-Based AI (Vapi/Bland)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {features.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-slate-50/50 ${
                      item.highlight ? "bg-slate-50/30" : ""
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {item.title}
                    </td>

                    {/* Sambhash AI Column (Highlighted) */}
                    <td className="py-4 px-4 font-bold text-indigo-700 bg-indigo-50/40 border-x border-indigo-100/80 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[3] flex-shrink-0" />
                        <span>{item.sambhash}</span>
                      </div>
                    </td>

                    {/* Human Telecallers */}
                    <td className="py-4 px-4 text-slate-600 text-center">
                      {item.humans}
                    </td>

                    {/* US Based AI */}
                    <td className="py-4 px-4 text-slate-500 text-center">
                      {item.usAi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 border-t border-slate-200 text-center text-xs text-slate-500">
            Based on average public pricing and operational deployment benchmarks in India as of 2026.
          </div>
        </div>

      </div>
    </section>
  );
}