"use client";

import React from "react";
import {
  Cpu,
  Cloud,
  Smartphone,
  CircuitBoard,
  BrainCircuit,
  Building2,
} from "lucide-react";

const CORE_CAPABILITIES = [
  {
    title: "Embedded Firmware Development",
    description:
      "Develop device-level software for microcontrollers, sensors and connected hardware.",
    icon: <Cpu className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "IoT Cloud Integration",
    description:
      "Connect devices with cloud platforms for secure communication, data processing and remote management.",
    icon: <Cloud className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Mobile and Web Applications",
    description:
      "Build applications and dashboards to monitor connected devices and control operations.",
    icon: <Smartphone className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Hardware and Sensor Integration",
    description:
      "Connect microcontrollers, communication modules and sensors to create functional IoT products.",
    icon: <CircuitBoard className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Edge Computing and AIoT",
    description:
      "Process device data locally and integrate intelligent analytics for faster operational decisions.",
    icon: <BrainCircuit className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Enterprise System Integration",
    description:
      "Connect IoT applications with existing ERP, CRM and business management systems.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-[1.16]">
            Custom IoT Development Services for Enterprise IoT Solutions
          </h2>
          <p className="mt-5 sm:mt-6 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Custom IoT development services help businesses connect physical devices, sensors and software applications through a unified technology infrastructure. However, building a reliable IoT ecosystem requires more than device connectivity. It involves embedded programming, secure communication, cloud architecture, data processing and application development.
          </p>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            At Webnox Digital, we provide custom IoT software development to address these requirements through integrated hardware and software engineering. Our team develops enterprise IoT solutions that support device monitoring, real-time communication, connected product management and business process automation.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-[#FF532B]">
            Our IoT development capabilities include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="rounded-[24px] bg-white border border-neutral-200/80 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] hover:border-[#FF7230]/40 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {cap.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-2.5">
                {cap.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
