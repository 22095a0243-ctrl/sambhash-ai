"use client";

import Link from "next/link";
import { PhoneCall, ArrowLeft, Lock, Mail, User, Building, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] flex flex-col justify-center py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors mb-4 sm:mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sambhash AI Homepage</span>
        </Link>

        <div className="flex justify-center mb-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
            <PhoneCall className="w-5 h-5" />
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Create your Sambhash AI Account
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          Start configuring AI voice agents and launching calling workflows
        </p>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-8 border border-slate-200/90 rounded-2xl shadow-sm">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Subramanyam T."
                  className="block w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                Company / Organization Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Building className="w-4 h-4" />
                </div>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder="Acme Real Estate Pvt Ltd"
                  className="block w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                Work Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="subbu@acmerealty.com"
                  className="block w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="block w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                Create Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="At least 8 characters"
                  className="block w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span>Complete Registration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="mt-5 space-y-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Transparent per-minute billing. No setup fee.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>By registering, you agree to our Terms of Service & Privacy Policy.</span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center text-xs text-slate-500">
            <span>Already registered? </span>
            <Link
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign in to your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
