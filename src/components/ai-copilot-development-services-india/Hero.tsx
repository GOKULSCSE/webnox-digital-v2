"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, IndianRupee, Cpu, CalendarCheck } from "lucide-react";

const AWARD_BADGES = [
  { src: "/images/Award 1.png", alt: "Top AI Development Company Recognition" },
  { src: "/images/Award 2.png", alt: "Enterprise Software Engineering Award" },
  { src: "/images/Award 3.png", alt: "Top Rated B2B Tech Partner" },
  { src: "/images/Award 4.png", alt: "AI & Automation Excellence Award" },
  { src: "/images/Award 5.png", alt: "India Enterprise Digital Transformation" },
  { src: "/images/Award 6.png", alt: "Client Choice Technology Partner" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#160a04] pt-36 pb-20 sm:pt-44 sm:pb-28 text-white">
      {/* Solar Orange Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[540px] w-[960px] rounded-full bg-gradient-to-b from-[#FF7230]/25 via-[#FF532B]/12 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#FF532B]/10 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7230]/35 bg-[#FF7230]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF945E] mb-7">
              <span className="h-2 w-2 rounded-full bg-[#FF7230] animate-pulse" />
              Sovereign India Enterprise AI Copilots • DPDP Compliant
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              Custom AI Copilot Development in India for{" "}
              <span className="bg-gradient-to-r from-[#FF7230] to-[#FF532B] bg-clip-text text-transparent">
                Enterprise Workflows
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-9">
              Webnox Digital is an enterprise AI copilot development company in India. Instead of
              chatbots that only answer questions, our custom copilots connect directly to your
              software to automate daily work.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_12px_36px_-8px_rgba(255,83,43,0.65)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_44px_-8px_rgba(255,114,48,0.85)]"
              >
                Build Your Custom AI Copilot
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#FF7230]/60 hover:bg-white/10"
              >
                <CalendarCheck className="h-4 w-4 text-[#FF7230]" />
                Schedule an Architecture Call
              </Link>
            </div>

            {/* Quick Value Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-sm text-neutral-300">
              <div className="flex items-center gap-2.5">
                <IndianRupee className="h-4 w-4 shrink-0 text-[#FF7230]" />
                <span>Zero Per-Seat Licensing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Cpu className="h-4 w-4 shrink-0 text-[#FF7230]" />
                <span>Tally, Zoho, SAP &amp; WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#FF7230]" />
                <span>AWS Mumbai / Azure Pune</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[440px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-neutral-400 mb-5">
                <span>Execution Runtime</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  100% IP Owned
                </span>
              </div>

              <div className="relative mx-auto flex items-center justify-center py-4">
                <Image
                  src="/images/cybersecurity_technology_assurance.svg?v=transparent"
                  alt="Sovereign Enterprise AI Copilot Architecture in India"
                  width={340}
                  height={280}
                  priority
                  className="h-auto w-full max-w-[290px] drop-shadow-[0_18px_40px_rgba(255,114,48,0.28)]"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-3.5">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                    Stack Connectors
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Tally Prime &bull; Zoho &bull; SAP
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/35 p-3.5">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-400">
                    Languages
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Indic &amp; Hinglish Ready
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recognitions Strip */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
            15+ Years Engineering Excellence &bull; 2,570+ Projects Delivered
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center opacity-80">
            {AWARD_BADGES.map((badge) => (
              <div key={badge.src} className="relative h-12 w-24 sm:h-14 sm:w-28">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
