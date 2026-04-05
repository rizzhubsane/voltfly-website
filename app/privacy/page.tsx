import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Voltfly EV",
  description: "Privacy Policy for Voltfly EV LLP rider platform and services.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-page text-text-primary font-sans selection:bg-brand-cyan selection:text-black">
      <div className="bg-texture"></div>

      {/* Simple Nav */}
      <nav className="glass-nav sticky top-0 z-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-brand-gray hover:text-white transition-colors group">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowLeft size={20} />
            </div>
            <span className="font-bold text-sm">Back to Home</span>
          </Link>
          <div>
            <Image src="/logo.png" alt="Voltfly" width={110} height={44} className="drop-shadow-[0_0_10px_rgba(0,212,255,0.35)]" style={{ objectFit: "contain" }} />
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="ambient-glow-cyan top-0 left-0 opacity-20"></div>
        
        <div className="glass-card rounded-[40px] p-10 sm:p-16 relative overflow-hidden">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-brand-gray mb-12 pb-12 border-b border-white/10 text-lg">
            Last Updated: April 6, 2026
          </p>

          <div className="space-y-12 text-brand-gray leading-relaxed text-lg">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
              <p>
                Voltfly EV LLP ("Voltfly", "we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application, website, and electric scooter rental services (collectively, the "Services").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">2. Information We Collect</h2>
              <p className="mb-6">We collect information that you provide directly to us during onboarding and while using our Services:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong className="text-white">Identity Data:</strong> Full name, date of birth, photograph (selfie), Aadhaar card details, and PAN card details required for KYC verification.</li>
                <li><strong className="text-white">Contact Data:</strong> Mobile phone number, email address, and residential address.</li>
                <li><strong className="text-white">Financial Data:</strong> UPI IDs, payment history, and security deposit records (we do not store full bank account or card numbers; payments are processed securely via Razorpay).</li>
                <li><strong className="text-white">Operational Data:</strong> Vehicle tracking (GPS location of the rented scooter), battery swap history, service requests, and app usage logs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">3. How We Use Your Information</h2>
              <p className="mb-6">We use the collected data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>To verify your identity and eligibility to rent our vehicles.</li>
                <li>To process your security deposit and weekly rental payments.</li>
                <li>To track the location and status of our electric scooters for safety, maintenance, and anti-theft purposes.</li>
                <li>To facilitate battery swaps at our partner network stations.</li>
                <li>To provide customer support and respond to service requests.</li>
                <li>To communicate important updates, policy changes, or promotional offers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">4. Data Sharing and Disclosure</h2>
              <p className="mb-6">We do not sell your personal data. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong className="text-white">Service Providers:</strong> With third-party vendors who assist us with KYC verification, payment processing (e.g., Razorpay), cloud hosting, and customer support.</li>
                <li><strong className="text-white">Partners:</strong> With battery swap network partners (e.g., BatterySmart) solely to facilitate your battery exchanges.</li>
                <li><strong className="text-white">Legal Obligations:</strong> When required by law, regulation, or legal process, or to protect the rights, property, and safety of Voltfly, our riders, or the public.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or request deletion of your personal data. You may also withdraw your consent for data processing; however, doing so may prevent us from providing our Services to you. To exercise these rights, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6">7. Contact Us</h2>
              <p className="mb-8">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              <div className="bg-[#111] p-8 rounded-3xl border border-white/10 inline-block w-full sm:w-auto">
                <p className="font-extrabold text-white text-2xl mb-2">Voltfly EV LLP</p>
                <p className="text-brand-gray text-base mb-6">New Delhi, India</p>
                <div className="space-y-4">
                  <p className="text-brand-gray text-base flex items-center gap-3">
                    <strong className="text-brand-cyan w-24">Email:</strong> 
                    <a href="mailto:gsanghi@voltflyev.com" className="hover:text-white transition-colors">gsanghi@voltflyev.com</a>
                  </p>
                  <p className="text-brand-gray text-base flex items-center gap-3">
                    <strong className="text-brand-cyan w-24">WhatsApp:</strong> 
                    <a href="https://wa.me/919899089969" className="hover:text-white transition-colors">+91 98990 89969</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#050505] text-brand-gray py-12 text-center border-t border-white/10 relative z-10 mt-12">
        <p className="text-sm font-medium">
          © 2026 Voltfly EV LLP. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
