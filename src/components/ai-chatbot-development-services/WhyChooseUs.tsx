"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  FileCheck2,
  Code2,
  ShieldCheck,
  Users,
  Plug,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            Why Choose Webnox Digital as Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              AI Chatbot Development Company?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
              <Award className="w-5 h-5 text-[#FF7230]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              1. 15+ Years of Proven Software Stability
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              With 15+ years of software experience and 2,570+ client projects across 20+ countries, you partner with a reliable long-term company instead of a short-lived agency.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
              <FileCheck2 className="w-5 h-5 text-[#FF7230]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              2. Accurate Answers Built on Your Approved Files
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Instead of guessing, your chatbot checks your verified company documents before replying, hides private customer details, and transfers tricky questions smoothly to your support staff.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
              <Code2 className="w-5 h-5 text-[#FF7230]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              3. You Own 100% of Everything We Build
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              All custom chatbot code, prompt rules, and file setups are handed over directly to your team upon completion, with zero ongoing software royalties to us or vendor lock-in.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
              <ShieldCheck className="w-5 h-5 text-[#FF7230]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              4. Strong Privacy for Customer Chats and Data
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Your customer chats and internal company records stay inside your private cloud accounts and are never used to train public AI, supporting India&apos;s DPDP Act and GDPR.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-[#FF7230]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              5. Talk Directly to the Engineers Building Your Bot
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              You work straight with our senior chatbot and backend builders from day one, giving you clear answers, faster changes, and zero frustrating handoff delays.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
              <Plug className="w-5 h-5 text-[#FF7230]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
              6. Plugs Into Your Existing CRM, ERP, and Support Tools
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              Your staff do not need to learn new software. We connect your chatbot straight to Salesforce, HubSpot, Zendesk, WhatsApp, and{" "}
              <Link
                href="/n8n-automation-services"
                className="text-[#FF7230] hover:text-[#FF8935] underline underline-offset-4 font-medium"
              >
                n8n Automation Services
              </Link>{" "}
              inside daily tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

