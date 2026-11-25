"use client";

import Link from "next/link";
import { PhoneCall, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <PhoneCall className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-slate-900">
                Sambhash AI
              </span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              AI voice-calling and business automation SaaS platform. Automate business conversations, qualify leads, and scale your operations with intelligent voice workflows.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Contact: </span>
              <a
                href="mailto:support@sambhashai.com"
                className="text-indigo-600 hover:text-indigo-700 font-medium underline-offset-2 hover:underline"
              >
                support@sambhashai.com
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#preview" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Product Preview
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Account & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Account
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Log In
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Get Started
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://sambhashai.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-1"
                >
                  <span>Domain</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
              Legal & Policies
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Sambhash AI (SambhashAi.com). All rights reserved.</p>
          <p className="text-slate-400">
            AI Voice Calling SaaS • Enterprise-ready Conversational Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
