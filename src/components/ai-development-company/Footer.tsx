"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#fdfaf6] text-neutral-800 pt-20 pb-12 overflow-hidden border-t border-neutral-200/70">
      {/* Giant Decorative Infinity Loop Background Watermark from Vector (1).svg with bottom fade-out */}
      <div
        className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[850px] sm:w-[1100px] md:w-[1350px] lg:w-[1550px] opacity-[0.26]"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0) 48%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0) 48%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Vector (1).svg"
            alt=""
            className="w-full h-auto object-contain"
            draggable={false}
          />
        </div>

        {/* Soft atmospheric fade-out gradient towards the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-[#fdfaf6] via-[#fdfaf6]/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main 4-Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-14">
          {/* Column 1: Brand & Social Links */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/Webnox Logo v2.png"
                alt="Webnox Digital"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-[13.5px] text-neutral-600 leading-relaxed max-w-xs mb-6">
              AI development company building custom AI software, AI applications, AI agents and
              Generative AI solutions for modern business workflows.
            </p>

            {/* Social Icons in Solar Orange circular outlines */}
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919786557739"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-[#ff5e00]/40 text-[#ff5e00] flex items-center justify-center hover:bg-[#ff5e00] hover:text-white hover:border-[#ff5e00] transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#ff5e00]/40 text-[#ff5e00] flex items-center justify-center hover:bg-[#ff5e00] hover:text-white hover:border-[#ff5e00] transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#ff5e00]/40 text-[#ff5e00] flex items-center justify-center hover:bg-[#ff5e00] hover:text-white hover:border-[#ff5e00] transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#ff5e00]/40 text-[#ff5e00] flex items-center justify-center hover:bg-[#ff5e00] hover:text-white hover:border-[#ff5e00] transition-all duration-300 shadow-sm"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: AI Services */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-[15px] font-bold text-neutral-900 mb-4 tracking-tight">
              AI Services
            </h4>
            <ul className="flex flex-col gap-3 text-[13.5px] text-neutral-600 font-medium">
              <li>
                <a href="#services" className="hover:text-[#ff5e00] transition-colors">
                  Custom AI Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5e00] transition-colors">
                  AI Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5e00] transition-colors">
                  Generative AI
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5e00] transition-colors">
                  AI Agents & RAG
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#ff5e00] transition-colors">
                  Copilot & Voice AI
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[15px] font-bold text-neutral-900 mb-4 tracking-tight">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-[13.5px] text-neutral-600 font-medium">
              <li>
                <a href="#process" className="hover:text-[#ff5e00] transition-colors">
                  Our 7-Step Process
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#ff5e00] transition-colors">
                  Why Choose Webnox
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-[#ff5e00] transition-colors">
                  AI Technology Stack
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#ff5e00] transition-colors">
                  Industry Applications
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ff5e00] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[15px] font-bold text-neutral-900 mb-4 tracking-tight">
              Newsletter
            </h4>
            <p className="text-[13px] text-neutral-600 leading-relaxed mb-4">
              Get weekly insights on applied AI engineering, architecture patterns, and enterprise AI trends.
            </p>

            {/* Newsletter Pill Input Bar */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex items-center bg-white rounded-full p-1 pl-4 border border-neutral-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.04)] focus-within:border-[#ff5e00] transition-colors"
            >
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full bg-transparent text-[13px] text-neutral-800 placeholder-neutral-400 outline-none pr-2"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#ff7230] to-[#ff532b] text-white text-xs font-semibold px-4 sm:px-5 py-2.5 rounded-full hover:brightness-105 shadow-[0_2px_10px_rgba(255,114,48,0.35)] transition-all flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-neutral-300/60 my-8" />

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] sm:text-[12.5px] text-neutral-500 font-medium">
          <p>@ 2026 Webnox Technologies Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#privacy" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-neutral-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#security" className="hover:text-neutral-900 transition-colors">
              Security
            </Link>
            <Link href="#cookies" className="hover:text-neutral-900 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
