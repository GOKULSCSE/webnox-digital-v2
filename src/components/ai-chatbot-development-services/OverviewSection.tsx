"use client";

import React from "react";
import Link from "next/link";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.16]">
            Custom AI Chatbot Development Services Built for Real Business Work
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Webnox Digital is an AI chatbot development company focused on solving everyday customer support and business problems. Basic chat tools often get stuck on follow-up questions, give confusing replies, or fail to connect with your customer records. Our custom chatbots are built to do real work. They answer questions using your approved company files, look up order or account details in seconds, and hand off complex issues to your human team smoothly.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            With our custom AI chatbot development, you do not need a tech team to get started. We organize your business documents, connect the chatbot to your website, WhatsApp, and CRM, and add strict privacy controls so customer data stays yours. Backed by our{" "}
            <Link
              href="/solutions"
              className="text-[#FF532B] hover:text-[#FF7230] font-semibold underline underline-offset-4 transition-colors"
            >
              AI Solutions
            </Link>{" "}
            and real automation systems built by our team on{" "}
            <Link
              href="/about"
              className="text-[#FF532B] hover:text-[#FF7230] font-semibold underline underline-offset-4 transition-colors"
            >
              About Webnox Digital
            </Link>
            , including Bull Machine (70% less manual purchasing work) and SEO Copilot (up to 200x faster multi-step workflows), our conversational AI development services help you reply faster, save staff time, and earn customer trust.
          </p>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 shadow-sm">
            <p className="text-2xl sm:text-3xl font-bold text-[#FF532B]">70%</p>
            <p className="mt-1 text-sm font-semibold text-[#12141a]">
              Less Manual Purchasing Work
            </p>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600">
              Proven in production with Bull Machine automation workflows.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 shadow-sm">
            <p className="text-2xl sm:text-3xl font-bold text-[#FF532B]">200x</p>
            <p className="mt-1 text-sm font-semibold text-[#12141a]">
              Faster Multi-Step Workflows
            </p>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600">
              Delivered through our proprietary SEO Copilot AI system.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-neutral-200/80 p-6 shadow-sm">
            <p className="text-2xl sm:text-3xl font-bold text-[#FF532B]">100%</p>
            <p className="mt-1 text-sm font-semibold text-[#12141a]">
              Code &amp; Prompt Ownership
            </p>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600">
              Zero vendor lock-in with private cloud deployment under your control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

