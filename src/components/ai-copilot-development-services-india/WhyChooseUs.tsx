"use client";

import { motion } from "framer-motion";
import { Award, Code2, IndianRupee, CheckCircle2, Users, PlugZap } from "lucide-react";

const REASONS = [
  {
    icon: Award,
    title: "1. 15+ Years of Proven Software Stability",
    description:
      "With 15+ years of experience and 2,570+ delivered projects, Webnox Digital is a trusted AI copilot development company in India.",
  },
  {
    icon: Code2,
    title: "2. 100% Code and Software Ownership",
    description:
      "You own 100% of all custom code, trained models and database setups delivered straight to your team with zero vendor lock-in.",
  },
  {
    icon: IndianRupee,
    title: "3. Zero Ongoing Per-User Licensing Fees",
    description:
      "Skip 30-dollar monthly user fees. Our custom AI copilot development in India supports unlimited users with zero ongoing seat fees.",
  },
  {
    icon: CheckCircle2,
    title: "4. Active Copilots That Complete Real Work",
    description:
      "Our enterprise AI copilot solutions in India take real action updating database records, drafting emails, and executing software tasks with approval.",
  },
  {
    icon: Users,
    title: "5. Direct Work with Senior AI Developers",
    description:
      "You collaborate directly with our senior AI engineers from day one, ensuring fast prototype delivery without non-technical account manager delays.",
  },
  {
    icon: PlugZap,
    title: "6. Deep Integration with Indian Software Stacks",
    description:
      "Through AI copilot integration services in India, we connect assistants to Tally Prime, Zoho, SAP and WhatsApp without disrupting workflows.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#080503] py-24 sm:py-32 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[720px] rounded-full bg-[#FF7230]/12 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF945E] mb-3">
            Built for Scale &amp; IP Ownership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Choose Webnox Digital as Your AI Copilot Development Company in India?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7230]/50 hover:bg-white/[0.06]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7230]/20 to-[#FF532B]/20 text-[#FF7230] transition-colors duration-300 group-hover:from-[#FF7230] group-hover:to-[#FF532B] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-neutral-300 leading-relaxed text-[15px]">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
