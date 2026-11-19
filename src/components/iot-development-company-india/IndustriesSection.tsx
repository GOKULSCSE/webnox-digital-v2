"use client";

import React from "react";
import {
  Factory,
  HeartPulse,
  Truck,
  ShoppingBag,
  Sprout,
  Zap,
  Car,
  Building2,
} from "lucide-react";

const INDUSTRIES = [
  { name: "Manufacturing", icon: <Factory className="w-5 h-5 text-[#FF7230]" /> },
  { name: "Healthcare", icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" /> },
  { name: "Logistics and Supply Chain", icon: <Truck className="w-5 h-5 text-[#FF7230]" /> },
  { name: "Retail and E-Commerce", icon: <ShoppingBag className="w-5 h-5 text-[#FF7230]" /> },
  { name: "Agriculture", icon: <Sprout className="w-5 h-5 text-[#FF7230]" /> },
  { name: "Energy and Utilities", icon: <Zap className="w-5 h-5 text-[#FF7230]" /> },
  { name: "Automotive and Transportation", icon: <Car className="w-5 h-5 text-[#FF7230]" /> },
  { name: "Smart Homes and Buildings", icon: <Building2 className="w-5 h-5 text-[#FF7230]" /> },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full py-24 sm:py-32 bg-[#080503] text-white overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7230]/[0.05] blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.16]">
            IoT Application Development Services for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF532B] to-[#FF8935]">
              High-Impact Industries
            </span>
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            We power custom IoT use cases across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="rounded-[22px] bg-[#120b07] border border-white/10 hover:border-[#FF7230]/45 p-6 flex items-center gap-4 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FF7230]/15 border border-[#FF7230]/30 flex items-center justify-center shrink-0">
                {industry.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
