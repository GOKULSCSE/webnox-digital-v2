"use client";

import { motion } from "framer-motion";
import { Zap, BadgeIndianRupee, Layers, ShieldCheck } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    title: "Does Real Work via API Actions",
    description:
      "Your copilot updates deals in Zoho, creates GST invoices in Tally and drafts customer proposals taking real action with your approval.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Zero Monthly Per-User Fees",
    description:
      "You own 100% of the code and models. Add unlimited team members without paying ₹2,500+ monthly per seat software fees.",
  },
  {
    icon: Layers,
    title: "Built for the Indian Enterprise Stack",
    description:
      "We build native connectors for Tally Prime, Zoho Books, Zoho CRM, SAP India, Razorpay, and WhatsApp Business API.",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign In-Country DPDP Compliance",
    description:
      "Your private business data stays protected inside India on AWS Mumbai or Azure Pune, fully complying with the DPDP Act 2023.",
  },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="bg-[#fdfaf6] py-24 sm:py-32 text-[#160a04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#FF532B] mb-3">
            Action-Oriented Enterprise Automation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#160a04] mb-6">
            Custom AI Copilot Development Built for Indian Enterprise Workflows
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Our custom AI copilot development services in India automate daily operational tasks,
            embedding intelligent assistants directly into your core business software.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-3xl border border-neutral-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF7230]/50 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7230]/15 to-[#FF532B]/15 text-[#FF532B] transition-colors duration-300 group-hover:from-[#FF7230] group-hover:to-[#FF532B] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#160a04] mb-3">{pillar.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-[#FF7230]/25 bg-gradient-to-r from-[#FF7230]/8 via-white to-[#FF532B]/8 px-7 py-5 text-center"
        >
          <p className="text-base sm:text-lg font-semibold text-[#160a04]">
            Backed by 15+ years of software stability and 2,570+ delivered projects, Webnox Digital
            builds enterprise copilots your team can trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
