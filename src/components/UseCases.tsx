"use client";

import {
  Building2,
  GraduationCap,
  Briefcase,
  Headphones,
  CheckCircle,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function UseCases() {
  const cases = [
    {
      icon: Building2,
      industry: "Real Estate & Developers",
      tagline: "Instant Enquiry Qualification",
      metric: "3.8x Site Visits Booked",
      metricColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      description:
        "When buyers submit lead forms on Facebook, 99acres, or MagicBricks, Sambhash AI dials within 15 seconds, qualifies budget and BHK preference, and books site visits directly on Google Calendar.",
      highlights: [
        "Sub-15s instant callback on incoming portal leads",
        "Captures budget, timeline, possession date & financing need",
        "Dispatches location pin & floor plan via WhatsApp during call",
      ],
    },
    {
      icon: GraduationCap,
      industry: "Coaching Centres & EdTech",
      tagline: "Admissions & Counselling Scaled",
      metric: "64% Faster Enrolments",
      metricColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
      description:
        "High-volume student counselling for competitive entrance exams, executive degrees, and technical bootcamps without overwhelming your human academic advisors.",
      highlights: [
        "Conducts pre-counselling screening & syllabus overview",
        "Schedules 1-on-1 career counsellor appointments",
        "Automated deadline, fee payment & seminar reminders",
      ],
    },
    {
      icon: Briefcase,
      industry: "BFSI, NBFCs & Fintech",
      tagline: "High-Compliance Loan Follow-ups",
      metric: "72% Recovery Rate",
      metricColor: "text-purple-600 bg-purple-50 border-purple-200",
      description:
        "Streamline pre-approved loan outreach, document collection reminders, and KYC verification calls with 100% adherence to banking compliance scripts.",
      highlights: [
        "Pre-screens business turnover & credit profile",
        "Delivers instant digital KYC verification links via SMS",
        "Friendly, respectful payment due date reminders",
      ],
    },
    {
      icon: Headphones,
      industry: "E-Commerce & Logistics",
      tagline: "Order Confirmation & NDR Resolution",
      metric: "35% Lower RTO / Returns",
      metricColor: "text-amber-600 bg-amber-50 border-amber-200",
      description:
        "Confirm Cash on Delivery (COD) orders, verify delivery address pin codes, and resolve Non-Delivery Reports (NDR) in real time before shipments are returned.",
      highlights: [
        "Automated voice confirmation for high-value COD orders",
        "Re-attempts customer contact on failed delivery attempts",
        "Captures customer delivery reschedule instructions",
      ],
    },
  ];

  return (
    <section id="use-cases" className="py-20 sm:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Proven Industry Workflows</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered for High-Conversion Conversations.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether booking property tours or confirming high-value ecommerce orders, Sambhash AI is configured with domain-specific vocabulary and prompt structures.
          </p>
        </div>

        {/* 4 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.metricColor} flex items-center gap-1`}>
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.metric}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    {item.industry}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                    {item.tagline}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 group"
                  >
                    <span>Deploy this agent workflow</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}