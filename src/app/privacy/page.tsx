import Link from "next/link";
import { ArrowLeft, PhoneCall } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sambhash AI Homepage</span>
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
              <span className="text-xs text-slate-400">Effective Date: October 2026 • Sambhash AI</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">1. Overview</h2>
              <p>
                Sambhash AI (&quot;we&quot;, &quot;our&quot;, or &quot;the Platform&quot;) operates the AI voice-calling service located at SambhashAi.com. We are committed to safeguarding the privacy and integrity of information processed through our systems, including user credentials, prospect contact information, and generated conversational transcripts.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">2. Information We Collect</h2>
              <p>We process the following categories of data in connection with our services:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Account Registration:</strong> Name, work email address, company name, telephone number, and payment transaction metadata.</li>
                <li><strong>Campaign Data & Contacts:</strong> Customer prospect names, telephone numbers, and metadata supplied via spreadsheet or API integration.</li>
                <li><strong>Conversational Data:</strong> Audio recordings, machine-generated transcripts, conversation summaries, and sentiment indicators derived from authorized calling sessions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">3. Purpose and Use of Data</h2>
              <p>Data provided by you is utilized solely for:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Executing automated voice interactions initiated under your account.</li>
                <li>Generating analytics, transcripts, and summaries accessible in your dashboard.</li>
                <li>Calculating accurate per-minute usage and issuing billing statements.</li>
                <li>Preventing malicious calling, fraud, and ensuring regulatory compliance with telecom guidelines.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">4. Telephony & Third-Party Service Providers</h2>
              <p>
                To provide voice delivery and speech synthesis, Sambhash AI integrates with reputable telecommunication carriers, speech engines, and cloud infrastructure partners. Data routed to such providers is transmitted securely and restricted to operational execution requirements.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">5. Data Retention & Security</h2>
              <p>
                We implement administrative and technical controls to protect account credentials and lead databases. Users retain the ability to export and request deletion of their calling logs and contact databases subject to statutory audit requirements.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">6. Inquiries & Contact</h2>
              <p>
                For data protection inquiries or requests regarding your stored records, please contact our privacy compliance desk at <a href="mailto:support@sambhashai.com" className="text-indigo-600 hover:underline">support@sambhashai.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
