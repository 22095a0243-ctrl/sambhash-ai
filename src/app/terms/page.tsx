import Link from "next/link";
import { ArrowLeft, PhoneCall } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] py-8 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Sambhash AI Homepage</span>
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Terms of Service</h1>
              <span className="text-xs text-slate-400">Effective Date: October 2026 • Sambhash AI</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">1. Agreement to Terms</h2>
              <p>
                By creating an account, accessing, or utilizing the Sambhash AI platform (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, you must not access the platform.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">2. Permitted Use & Telecom Compliance</h2>
              <p>
                Users agree that Sambhash AI is an enterprise communication platform. You affirm that all calling lists, contact records, and telephone numbers uploaded have been obtained lawfully with requisite caller consent in accordance with applicable telecommunication laws, DND regulations, and statutory consumer protection rules. You may not utilize Sambhash AI for unsolicited spam, harassment, or unlawful communications.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">3. Account Credits & Billing Terms</h2>
              <p>
                Sambhash AI operates primarily on a prepaid per-minute consumption model. Calling minutes are deducted according to the active rate tier (Basic, Standard, or Premium). Balance recharges are non-refundable once calling usage has commenced, unless mandated by applicable consumer protection laws. Additional telecom costs such as DID number rental are billed as itemized on the platform.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">4. Service Availability & Integrations</h2>
              <p>
                While Sambhash AI strives for maximum reliability and uptime, telecommunication delivery, speech latency, and voice quality are subject to carrier networks, internet routing, and underlying third-party voice providers. Sambhash AI makes no guarantees regarding call connection rates or individual sales conversion outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">5. Intellectual Property</h2>
              <p>
                All rights, titles, and interests in the Sambhash AI software, user interfaces, branding, and proprietary algorithms remain the exclusive property of Sambhash AI. Users retain ownership of their proprietary business prompts, lead datasets, and call audio recordings.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-slate-900 mb-2">6. Contact</h2>
              <p>
                For questions regarding these Terms of Service, please reach out to <a href="mailto:support@sambhashai.com" className="text-indigo-600 hover:underline">support@sambhashai.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
