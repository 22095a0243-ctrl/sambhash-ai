"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, Menu, X, ArrowRight, Sparkles, ChevronRight, Activity } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Voice Studio", href: "#voice-studio" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Preview", href: "#preview" },
    { name: "ROI Calculator", href: "#roi-calculator" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 text-white text-xs font-medium py-1.5 px-4 text-center border-b border-indigo-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide">
            <Sparkles className="w-3 h-3 text-indigo-200" />
            NEW 2.0
          </span>
          <span className="hidden sm:inline">Ultra-low latency speech engine with Indian regional accents & Hinglish support.</span>
          <span className="sm:hidden">Indian regional voices & low latency engine live.</span>
          <a
            href="#voice-studio"
            className="inline-flex items-center gap-0.5 underline underline-offset-2 hover:text-indigo-200 font-semibold transition-colors ml-1"
          >
            <span>Try Voice Demo</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-900/5 py-2.5"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1 -m-1"
              aria-label="Sambhash AI Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 transition-transform duration-200 group-hover:scale-105 border border-indigo-400/20">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                    Sambhash AI
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">
                    SaaS
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-medium text-slate-400 -mt-0.5">
                  AI Voice Calling Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 text-xs lg:text-[13px] font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-slate-500 pr-2 border-r border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>System 99.98% Online</span>
              </div>
              <Link
                href="/login"
                className="px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm shadow-indigo-600/20 hover:shadow-md hover:shadow-indigo-600/30 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}