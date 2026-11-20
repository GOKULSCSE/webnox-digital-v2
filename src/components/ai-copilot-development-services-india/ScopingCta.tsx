"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import PatternWaves from "@/components/PatternWaves";

export default function ScopingCta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#160a04] py-24 sm:py-32 text-white">
      {/* Interactive PatternWaves Background */}
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <PatternWaves
          preset="silk"
          pattern="dot"
          wave="silk"
          characters=".:-=+*#%@"
          shadowColor="#442508"
          color="#c06b2e"
          accentColor="#f69653"
          highlightColor="#ffb87a"
          backgroundColor="transparent"
          spacing={15}
          markSize={0.96}
          depth={0.42}
          light={0}
          shine={0.85}
          contrast={1.05}
          speed={0.35}
          scale={1.2}
          direction={20}
          fade="none"
          fadeSize={0}
          opacity={1}
          interactive={true}
          cursorSize={100}
          cursorStrength={1.0}
          intro={false}
          paused={false}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-[2.25rem] border border-white/15 bg-[#160a04]/85 p-8 sm:p-14 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-8"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF945E] mb-3">
                Zero Seat Fees &bull; Full Code Ownership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5">
                Ready to Deploy Your Custom AI Copilot Across Tally, Zoho &amp; WhatsApp?
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl mb-8">
                Stop paying recurring per-seat SaaS fees. Partner with Webnox Digital to architect a
                DPDP-compliant enterprise AI copilot hosted inside your AWS Mumbai or Azure Pune
                environment with 100% source code ownership.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF7230] to-[#FF532B] px-7 py-4 text-sm sm:text-base font-semibold text-white shadow-[0_12px_36px_-8px_rgba(255,83,43,0.65)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Build Your Custom AI Copilot
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm sm:text-base font-semibold text-white transition-colors hover:border-[#FF7230]/60 hover:bg-white/10"
                >
                  <CalendarCheck className="h-4 w-4 text-[#FF7230]" />
                  Schedule an Architecture Call
                </Link>
              </div>
            </motion.div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64">
                <Image
                  src="/images/startyouraiproject.png"
                  alt="Start Your Enterprise AI Copilot Project in India"
                  fill
                  sizes="256px"
                  className="object-contain drop-shadow-[0_16px_40px_rgba(255,114,48,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
