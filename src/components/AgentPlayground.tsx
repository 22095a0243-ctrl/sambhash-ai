"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  Sparkles,
  Bot,
  Play,
  ArrowRight,
  CheckCircle2,
  Building,
  GraduationCap,
  Briefcase,
  ShoppingBag,
  Copy,
  Check,
} from "lucide-react";

type IndustryKey = "realestate" | "edtech" | "bfsi" | "ecommerce";

export default function AgentPlayground() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryKey>("realestate");
  const [selectedVoice, setSelectedVoice] = useState("maya");
  const [companyName, setCompanyName] = useState("Prestige Palm");
  const [copied, setCopied] = useState(false);

  const presets: Record<IndustryKey, any> = {
    realestate: {
      name: "Real Estate Buyer Qualification",
      icon: Building,
      defaultCompany: "Prestige Palm Residences",
      openingLine: `“Namaste! This is Maya from ${companyName}. I saw you checked out our 3BHK residences. Are you planning to move in soon or exploring an investment?”`,
      objectionExample: "Customer: 'Is the pricing negotiable and when is possession?'",
      aiHandling: "Maya: 'Handover is scheduled for Diwali 2027 with RERA certification. Pricing starts at ₹1.85 Cr, and I can arrange an exclusive developer discount during your VIP site visit this Saturday. Can I book an 11:30 AM slot?'",
      systemPrompt: `You are Maya, an articulate real estate advisor for ${companyName}. Your goal is to qualify high-intent buyers looking for 2BHK/3BHK flats, verify their budget bracket (₹1.8 - 2.5 Cr), and schedule an in-person site walkthrough. Answer Vastu & RERA doubts with confidence. Never hallucinate project specs.`,
    },
    edtech: {
      name: "EdTech & Course Admissions",
      icon: GraduationCap,
      defaultCompany: "Apex Data Institute",
      openingLine: `“Hello! This is Arjun from ${companyName}. Thanks for downloading our Data Science curriculum. Did you get a chance to see the curriculum highlights?”`,
      objectionExample: "Customer: 'I work full time, can I attend classes on weekends?'",
      aiHandling: "Arjun: 'Yes! Our live sessions run on Saturdays and Sundays with dedicated weekday mentor doubt-clearing hours. Would you like me to book your 1-on-1 faculty counselling slot for this Thursday?'",
      systemPrompt: `You are Arjun, an encouraging admissions counsellor for ${companyName}. Screen applicants for eligibility, explain weekend batch flexibility, and book senior counsellor discovery sessions. Maintain polite Hindi/English conversational cadence.`,
    },
    bfsi: {
      name: "FinTech Loan Pre-Approval",
      icon: Briefcase,
      defaultCompany: "KreditEase Capital",
      openingLine: `“Good afternoon! This is Priya from ${companyName}. Your pre-approved business credit line of ₹25 Lakhs is ready for instant digital disbursement.”`,
      objectionExample: "Customer: 'What documents are required and what is the interest rate?'",
      aiHandling: "Priya: 'Zero collateral required. Rates start at 1.15% per month reducing balance. All you need is 6 months bank statement, and funds hit your account in 4 hours. Can I send the instant KYC link via SMS?'",
      systemPrompt: `You are Priya, a courteous BFSI verification agent for ${companyName}. Adhere strictly to RBI compliance guidelines. Verify business turnover and dispatch instant digital KYC links via SMS without pushing.`,
    },
    ecommerce: {
      name: "COD Order & Address Confirmation",
      icon: ShoppingBag,
      defaultCompany: "UrbanStyle Wear",
      openingLine: `“Hi! This is Sneha calling from ${companyName}. We received your Cash on Delivery order for ₹3,499. Would you like us to dispatch it today?”`,
      objectionExample: "Customer: 'I will be traveling this Friday, can you deliver next week?'",
      aiHandling: "Sneha: 'Certainly! I have updated our courier partner to deliver your parcel on Monday between 10 AM and 2 PM. You will receive a live tracking link via WhatsApp once dispatched.'",
      systemPrompt: `You are Sneha, a friendly logistics confirmation agent for ${companyName}. Confirm Cash on Delivery orders, verify delivery pin codes, and capture rescheduling requests to prevent costly courier returns (RTO).`,
    },
  };

  const current = presets[selectedIndustry];
  const Icon = current.icon;

  const handleCopy = () => {
    navigator.clipboard.writeText(current.systemPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-24 bg-slate-50/70 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sliders className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Prompt & Agent Builder</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Configure Your AI Voice Agent in 60 Seconds.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Test how Sambhash AI creates domain-specific system prompts, natural opening hooks, and objection handling scripts tailored to your industry.
          </p>
        </div>

        {/* Builder Container */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-5">
                
                {/* Step 1: Industry Preset */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    1. Select Industry Objective
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "realestate", label: "Real Estate", icon: Building },
                      { id: "edtech", label: "EdTech", icon: GraduationCap },
                      { id: "bfsi", label: "FinTech / Loans", icon: Briefcase },
                      { id: "ecommerce", label: "E-Commerce COD", icon: ShoppingBag },
                    ].map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedIndustry(item.id as IndustryKey);
                            setCompanyName(presets[item.id as IndustryKey].defaultCompany);
                          }}
                          className={`p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center gap-2 ${
                            selectedIndustry === item.id
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
                          }`}
                        >
                          <ItemIcon className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Company Name Input */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    2. Your Company or Project Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter business name..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-50/50"
                  />
                </div>

                {/* Step 3: Voice Personality */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    3. AI Voice Agent
                  </label>
                  <div className="flex gap-2">
                    {[
                      { id: "maya", name: "Maya", lang: "Hinglish / English" },
                      { id: "arjun", name: "Arjun", lang: "Hindi / English" },
                      { id: "priya", name: "Priya", lang: "Indian English" },
                    ].map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVoice(v.id)}
                        className={`flex-1 p-2.5 rounded-xl border text-xs text-center transition-all ${
                          selectedVoice === v.id
                            ? "bg-indigo-50 border-indigo-600 text-indigo-700 font-bold"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-white"
                        }`}
                      >
                        <div className="font-bold">{v.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{v.lang}</div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Direct Deploy CTA */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/signup"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all"
                >
                  <span>Deploy this Agent (Get ₹100 Credits)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Output Column: Live Generated Prompt & Dialogue */}
            <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 text-white space-y-4 flex flex-col justify-between border border-slate-800">
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono font-bold uppercase text-slate-300">
                      Live Generated Prompt &amp; Script
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Prompt"}</span>
                  </button>
                </div>

                {/* Generated Opening Line */}
                <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/80 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                    Dynamic Opening Line Hook (First 5 Seconds):
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    {current.openingLine}
                  </p>
                </div>

                {/* Objection Handling Example */}
                <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block">
                    Multi-Turn Objection Handling:
                  </span>
                  <div className="text-xs text-slate-400 font-medium">{current.objectionExample}</div>
                  <div className="text-xs text-slate-200 pl-3 border-l-2 border-indigo-500 leading-relaxed">
                    {current.aiHandling}
                  </div>
                </div>

                {/* System Prompt Instructions Preview */}
                <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Underlying System Prompt Directives:
                  </span>
                  <p className="text-xs text-slate-400 font-mono leading-relaxed line-clamp-3">
                    {current.systemPrompt}
                  </p>
                </div>

              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Ready for Live Dialing</span>
                </span>
                <span className="font-mono text-[11px] text-slate-500">Latency: Sub-650ms</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}