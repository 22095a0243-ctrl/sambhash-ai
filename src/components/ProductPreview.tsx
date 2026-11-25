"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Bot,
  Users,
  Megaphone,
  PhoneCall,
  GitBranch,
  Wallet,
  Layers,
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight,
  Filter,
  Plus,
  Play,
  FileText,
  Volume2,
} from "lucide-react";

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "agents" | "leads" | "campaigns" | "calls" | "wallet"
  >("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "agents", label: "AI Voice Agents", icon: Bot },
    { id: "leads", label: "Lead Pipeline", icon: Users },
    { id: "campaigns", label: "Live Campaigns", icon: Megaphone },
    { id: "calls", label: "Calls & Intelligence", icon: PhoneCall },
    { id: "wallet", label: "Wallet & Usage", icon: Wallet },
  ] as const;

  return (
    <section id="preview" className="py-12 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>High-Fidelity Platform Simulation</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-snug">
            Intuitive Control Over Every Calling Workflow.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Experience the actual Sambhash AI console interface. Monitor live concurrent calls, inspect transcripts, and track wallet drawdown in real time.
          </p>
        </div>

        {/* Dashboard Mock Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-indigo-900/5 overflow-hidden max-w-6xl mx-auto ring-1 ring-slate-900/5">
          {/* Top Browser Bar */}
          <div className="bg-slate-50/90 border-b border-slate-200/80 px-3.5 sm:px-5 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="flex gap-1 sm:gap-1.5 flex-shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></span>
              </div>
              <span className="hidden sm:inline-block ml-3 font-mono text-[11px] sm:text-xs text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs truncate">
                https://app.sambhashai.com/dashboard/console
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-slate-700 truncate max-w-[150px] sm:max-w-none">Outreach India</span>
            </div>
          </div>

          {/* Sub Navigation Bar / Module Tabs */}
          <div className="border-b border-slate-200/80 bg-white px-2 sm:px-6 overflow-x-auto scrollbar-none">
            <nav className="flex space-x-1 sm:space-x-4 min-w-max" aria-label="Product Preview Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 py-2.5 sm:py-3.5 px-2.5 sm:px-3 border-b-2 text-xs sm:text-sm font-semibold transition-all ${
                      isActive
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Module Screen Content */}
          <div className="p-3.5 sm:p-6 lg:p-8 bg-slate-50/60 min-h-[380px] sm:min-h-[440px]">
            {/* 1. OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                  <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Calls Placed</span>
                    <div className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">4,920</div>
                    <span className="text-[10px] sm:text-[11px] text-emerald-600 font-bold flex items-center gap-0.5 mt-1">
                      <ArrowUpRight className="w-3 h-3" /> +18.4%
                    </span>
                  </div>
                  <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Connection</span>
                    <div className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">74.6%</div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 mt-1 block font-medium">Avg 2m 14s</span>
                  </div>
                  <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Qualified</span>
                    <div className="text-xl sm:text-3xl font-extrabold text-indigo-600 mt-1">1,142</div>
                    <span className="text-[10px] sm:text-[11px] text-indigo-600/80 mt-1 block font-semibold">23.2% Rate</span>
                  </div>
                  <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-2xs">
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Prepaid Wallet</span>
                    <div className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-mono">₹24,850</div>
                    <span className="text-[10px] sm:text-[11px] text-emerald-600 font-bold mt-1 block">● Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-2xs">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">Active High-Priority Campaigns</h4>
                      <span className="text-[11px] font-semibold text-indigo-600">View All →</span>
                    </div>
                    <div className="space-y-2.5 sm:space-y-3.5">
                      <div className="border border-slate-200/80 rounded-xl p-3 sm:p-4 bg-slate-50/50">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1.5">
                          <span className="text-xs sm:text-sm font-bold text-slate-800">Q4 Bangalore Outer Ring Road</span>
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold self-start sm:self-auto">Live (12 Active)</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full mt-2">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 mt-1.5 font-medium">
                          <span>390 of 500 contacted</span>
                          <span className="font-bold text-slate-700">78% complete</span>
                        </div>
                      </div>

                      <div className="border border-slate-200/80 rounded-xl p-3 sm:p-4 bg-slate-50/50">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-1.5">
                          <span className="text-xs sm:text-sm font-bold text-slate-800">Executive Data Science 2026 Batch</span>
                          <span className="text-[10px] px-2 py-0.2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold self-start sm:self-auto">Running (8 Active)</span>
                        </div>
                        <div className="w-full bg-slate-200 h-2 rounded-full mt-2">
                          <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "54%" }}></div>
                        </div>
                        <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 mt-1.5 font-medium">
                          <span>270 of 500 contacted</span>
                          <span className="font-bold text-slate-700">54% complete</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-2xs">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-3 sm:mb-4">Voice Agents Live Status</h4>
                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                            M
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900">Maya</div>
                            <div className="text-[10px] text-slate-500 truncate">Real Estate</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0">
                          ● 8 In-Call
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                            K
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-slate-900">Kabir</div>
                            <div className="text-[10px] text-slate-500 truncate">EdTech</div>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0">
                          ● 4 In-Call
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. AGENTS TAB */}
            {activeTab === "agents" && (
              <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-2xs">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 pb-4 border-b border-slate-100">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Configured AI Voice Agents</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">Manage conversation goals, voice tones, speech synthesis, and webhook tools.</p>
                  </div>
                  <button className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Agent</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4">
                  <div className="border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-indigo-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                          M
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">Maya (Real Estate)</span>
                          <span className="text-[11px] text-indigo-600 block">Hinglish / English</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">Active</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      Directive: Qualify buyers interested in 2BHK/3BHK luxury apartments. Gather budget range, and automatically schedule in-person site inspections.
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 text-[10px] sm:text-[11px] text-slate-500 font-medium flex-wrap">
                      <span>Indian English & Hinglish</span>
                      <span>•</span>
                      <span>Sub-500ms</span>
                      <span>•</span>
                      <span>WhatsApp Enabled</span>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-indigo-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                          K
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">Kabir (Admissions)</span>
                          <span className="text-[11px] text-emerald-600 block">Hindi / English</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">Active</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      Directive: Follow up on brochure downloads for Data Science Masterclasses. Answer curriculum doubts, and schedule faculty discovery calls.
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-100 text-[10px] sm:text-[11px] text-slate-500 font-medium flex-wrap">
                      <span>Hindi & English</span>
                      <span>•</span>
                      <span>Scholarship Screening</span>
                      <span>•</span>
                      <span>n8n Linked</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. LEADS TAB */}
            {activeTab === "leads" && (
              <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-2xs">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Lead Repository</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">Live contacts, qualification tags, sentiment analysis, and timestamps.</p>
                  </div>
                  <button className="px-3 py-1.5 text-xs font-semibold border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50">
                    Import CSV / Excel
                  </button>
                </div>

                <div className="overflow-x-auto scrollbar-none">
                  <table className="w-full text-left text-xs min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                        <th className="pb-2.5">Name</th>
                        <th className="pb-2.5">Phone</th>
                        <th className="pb-2.5">Campaign</th>
                        <th className="pb-2.5">Lead Status</th>
                        <th className="pb-2.5">Extracted Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-2.5 font-bold text-slate-900">Aditya Nair</td>
                        <td className="py-2.5 text-slate-600 font-mono">+91 98401 •••••</td>
                        <td className="py-2.5 text-slate-600">Prime Residency</td>
                        <td className="py-2.5">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 text-[10px]">
                            High Intent (96%)
                          </span>
                        </td>
                        <td className="py-2.5 text-slate-700 font-medium">Site visit confirmed for Sat 11:30 AM</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-slate-900">Sneha Kulkarni</td>
                        <td className="py-2.5 text-slate-600 font-mono">+91 97112 •••••</td>
                        <td className="py-2.5 text-slate-600">Admissions 2026</td>
                        <td className="py-2.5">
                          <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-bold border border-indigo-200 text-[10px]">
                            Brochure Sent
                          </span>
                        </td>
                        <td className="py-2.5 text-slate-700 font-medium">Syllabus PDF dispatched via WhatsApp</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. CAMPAIGNS TAB */}
            {activeTab === "campaigns" && (
              <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-2xs">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">Outbound Calling Campaigns</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500">Schedule parallel calling sessions and monitor progress live.</p>
                  </div>
                  <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">
                    + New Campaign
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Weekend Open House VIP Invitations</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">Agent: Maya • 500 prospects • Virtual Caller ID: +91 80 4712 ••••</div>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs font-bold text-indigo-600">380/500 Contacted (76%)</span>
                      <div className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold mt-0.5">42 Site visits confirmed</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. CALLS TAB */}
            {activeTab === "calls" && (
              <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-2xs">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2.5">Live Call Log &amp; Transcript</h4>
                <div className="border border-slate-200 rounded-xl p-3 sm:p-4 bg-slate-50/70">
                  <div className="flex justify-between items-center text-xs text-slate-700 font-bold mb-2">
                    <span>#SB-98214 — Vikramaditya S.</span>
                    <span className="text-emerald-700 font-mono text-[11px]">02:18 • Completed</span>
                  </div>
                  <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 space-y-1.5">
                    <div><strong className="text-indigo-600">Maya (AI):</strong> "Hello Vikram, I am calling from Sambhash Realty regarding your inquiry for the Whitefield 3BHK project."</div>
                    <div><strong className="text-slate-900">Lead:</strong> "Yes, what is the starting price and when is possession expected?"</div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. WALLET TAB */}
            {activeTab === "wallet" && (
              <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase">Current Balance</span>
                    <div className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-mono">₹24,850.00</div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">~4,970 calling mins</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase">Active Tier</span>
                    <div className="text-xl sm:text-2xl font-black text-indigo-600 mt-1">Standard (₹5/min)</div>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">Per-second billing</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase">Payment Gateway</span>
                    <div className="text-base sm:text-lg font-bold text-slate-900 mt-1">Razorpay Verified</div>
                    <span className="text-[10px] sm:text-[11px] text-emerald-600 font-semibold">Instant UPI recharge</span>
                  </div>
                </div>
                <div className="text-xs text-slate-600 bg-indigo-50/50 p-3 rounded-xl border border-indigo-100 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>GST tax invoices with full 18% Input Tax Credit generated automatically.</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar with Clarification */}
          <div className="bg-slate-100/80 px-3.5 py-2.5 border-t border-slate-200 text-center text-[10px] sm:text-xs text-slate-500">
            <span>
              ⚡ Interactive dashboard preview • Sign up in 2 minutes to access full live calling console
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
