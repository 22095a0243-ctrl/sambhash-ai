import {
  ShieldCheck,
  Eye,
  KeyRound,
  FileCheck2,
  SlidersHorizontal,
} from "lucide-react";

export default function TrustReliability() {
  const pillars = [
    {
      icon: Eye,
      title: "Transparent Usage Tracking",
      description:
        "Every single call is timestamped with precise duration metrics, recording links, and per-second cost deductions visible on your invoice dashboard.",
    },
    {
      icon: SlidersHorizontal,
      title: "Clear Call & Campaign Visibility",
      description:
        "Full operational oversight over active calling batches. Pause, resume, adjust retry limits, or reassign agent personas instantly as business needs evolve.",
    },
    {
      icon: KeyRound,
      title: "Controlled Access to Account Features",
      description:
        "Enforce role-based access for workspace administrators, campaign operators, and billing viewers to protect sensitive client contact records.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Handling of Application Credentials",
      description:
        "Telephony SIP credentials, webhook secrets, and database API tokens are stored using industry-standard encryption practices.",
    },
    {
      icon: FileCheck2,
      title: "Integration-Dependent Capabilities",
      description:
        "Honest operational parameters: call recording, regional telecom throughput, and speech latency depend on your configured carrier and provider infrastructure.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Trust & Architecture
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Built Around Clear, Controlled Workflows.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our platform is engineered for predictability, transparency, and operational security — giving your team complete control over automated interactions.
          </p>
        </div>

        {/* 5 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 bg-slate-50/40 p-6 shadow-sm hover:border-slate-300 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-white text-indigo-600 border border-slate-200 flex items-center justify-center mb-4 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
