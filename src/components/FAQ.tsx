"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Sambhash AI?",
      answer:
        "Sambhash AI is an AI voice-calling SaaS platform designed to help businesses organize outbound calling, qualify incoming enquiries, automate customer engagement, and streamline lead workflows at scale.",
    },
    {
      question: "Can I create my own AI voice agent?",
      answer:
        "Yes. You can configure AI voice agents by defining custom system instructions, conversational goals, operational parameters, and selecting from supported voice profiles suitable for your business scenarios.",
    },
    {
      question: "Can I import leads from Excel or CSV?",
      answer:
        "Yes. The platform supports uploading contact lists via standard CSV and Excel (.xlsx) files, enabling structured field mapping for prospect names, phone numbers, and custom notes.",
    },
    {
      question: "Does Sambhash AI support bulk calling?",
      answer:
        "Sambhash AI supports structured bulk calling campaigns. The speed, concurrent channel limits, and overall capacity depend on your configured telephony provider, carrier lines, and account authorization levels.",
    },
    {
      question: "Can I review call recordings and transcripts?",
      answer:
        "Yes. Once supported by your telephony carrier and configured provider settings, generated audio recordings, synchronized transcripts, and AI-extracted summaries are available directly within the call intelligence dashboard.",
    },
    {
      question: "Can I connect external tools?",
      answer:
        "Sambhash AI offers connectivity through webhooks, direct spreadsheet imports, and integration capabilities for tools like n8n, CRM software, and WhatsApp follow-up messaging depending on your account configuration.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is usage-based on a per-minute model starting from ₹3.50/minute (Basic), ₹5.00/minute (Standard), and ₹7.00/minute (Premium). Connected calling minutes are deducted transparently from your prepaid wallet balance with full usage logs.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can get started immediately by visiting our signup page, creating your workspace, and setting up your first AI calling agent.",
      hasCta: true,
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 lg:py-24 bg-slate-50/60 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Answers to Common Questions.
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about setting up and scaling calling campaigns with Sambhash AI.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 sm:px-6 py-3.5 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-indigo-50 text-indigo-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                    {faq.hasCta && (
                      <div className="mt-3">
                        <Link
                          href="/signup"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                          <span>Go to Sign Up Page</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
