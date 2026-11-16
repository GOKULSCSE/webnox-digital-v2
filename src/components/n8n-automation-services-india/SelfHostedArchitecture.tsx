"use client";

import React from "react";
import {
  Webhook,
  Database,
  KeyRound,
  Scale,
  Terminal,
} from "lucide-react";

const ARCHITECTURE_PILLARS = [
  {
    title: "Main Instance and Webhook Processing",
    description:
      "Manage workflow configuration and scheduling while handling incoming webhook requests separately.",
    icon: <Webhook className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Redis Queue Mode and Workers",
    description:
      "Use Redis and PostgreSQL to manage execution queues and support parallel workflow processing.",
    icon: <Database className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Secure Credential Management",
    description:
      "Configure a shared N8N_ENCRYPTION_KEY across instances to protect stored credentials.",
    icon: <KeyRound className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Load Balancing",
    description:
      "Distribute incoming requests across available processes to manage workflow traffic.",
    icon: <Scale className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Isolated Task Runners",
    description:
      "Execute supported JavaScript and Python Code node tasks in separate environments.",
    icon: <Terminal className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function SelfHostedArchitecture() {
  return (
    <section
      id="architecture"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.04] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            n8n Self-Hosted Deployment and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              Scalable Architecture
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Our n8n self-hosted deployment services in India help businesses manage workflow execution, infrastructure and integrations through a scalable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARCHITECTURE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[24px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/40 p-7 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 sm:mt-12 text-neutral-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          Our n8n deployment and configuration services support scalable workflow automation, secure integrations and reliable execution based on infrastructure requirements.
        </p>
      </div>
    </section>
  );
}

