"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  Layers,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function ConversionCta() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#160a04] text-white overflow-hidden py-20 sm:py-28 selection:bg-[#ff5e00] selection:text-white"
    >
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #291004 0%, #150903 50%, #0d0401 100%)",
        }}
        aria-hidden="true"
      />

      {/* Atmospheric Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 94, 0, 0.18) 0%, rgba(255, 114, 48, 0.06) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
          Ready to Build Your Next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
            Digital Advantage?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-light mb-10">
          Whether you are looking to automate a critical business workflow, deploy custom AI, or scale your customer acquisition, our senior engineering team is ready to help you plan the path forward.
        </p>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          {/* Primary CTA */}
          <a
            href="https://wa.me/919786557739?text=Hi%20Webnox%20team,%20I%20would%20like%20to%20schedule%20an%20exploratory%20architecture%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] text-white font-medium text-sm sm:text-base shadow-[0_4px_28px_rgba(255,94,0,0.4)] hover:shadow-[0_8px_36px_rgba(255,94,0,0.6)] hover:brightness-110 active:scale-[0.98] transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule an Exploratory Architecture Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-neutral-200 hover:text-white font-medium text-sm sm:text-base backdrop-blur-md active:scale-[0.98] transition-all duration-300"
          >
            <Layers className="w-4 h-4 text-[#ff7230]" />
            <span>Explore Our Products &amp; Case Studies</span>
          </Link>
        </div>

        {/* Direct Inquiries & Headquarters Info Card */}
        <div className="w-full max-w-3xl rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          {/* Email / Inquiries */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#ff7230]/15 border border-[#ff7230]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-5 h-5 text-[#ff7230]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                Direct Inquiries
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-neutral-200 font-medium">
                <a
                  href="mailto:contact@webnox.in"
                  className="hover:text-[#ff8935] transition-colors underline decoration-neutral-500 underline-offset-4"
                >
                  contact@webnox.in
                </a>
                <span className="hidden sm:inline text-neutral-500">•</span>
                <a
                  href="mailto:sales@webnoxdigital.com"
                  className="hover:text-[#ff8935] transition-colors underline decoration-neutral-500 underline-offset-4"
                >
                  sales@webnoxdigital.com
                </a>
              </div>
            </div>
          </div>

          {/* Headquarters */}
          <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-[#ff7230]/15 border border-[#ff7230]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-[#ff7230]" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                Headquarters
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-medium">
                Webnox Digital, Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

