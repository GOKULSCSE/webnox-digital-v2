"use client";

import React from "react";
import {
  Factory,
  HeartPulse,
  Building2,
  Truck,
  Zap,
} from "lucide-react";

const INDUSTRIES = [
  {
    title: "Manufacturing & Industrial IoT (Industry 4.0)",
    description:
      "Connect production machinery, industrial sensors and factory equipment to monitor operational performance. Our manufacturing IoT solutions support machine monitoring, vibration analysis, production tracking and predictive maintenance to help identify equipment issues and improve operational efficiency.",
    icon: <Factory className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Healthcare & Medical Devices (IoMT)",
    description:
      "Develop connected healthcare applications for remote patient monitoring, wearable devices and medical equipment tracking. Our healthcare IoT solutions support sensor integration, secure device communication and cloud-based data management to help healthcare providers access information from connected medical devices.",
    icon: <HeartPulse className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Smart Buildings & Connected Spaces",
    description:
      "Manage building infrastructure through connected sensors, controllers and centralised monitoring applications. Our smart building IoT solutions cover HVAC monitoring, automated lighting, occupancy detection, energy management and environmental monitoring to improve building operations and resource utilisation.",
    icon: <Building2 className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Logistics, Supply Chain & Fleet Management",
    description:
      "Monitor vehicles, shipments and connected assets using GPS-enabled devices and wireless communication systems. Our logistics IoT solutions support location tracking, temperature monitoring, geofencing and automated alerts to improve shipment visibility and supply chain management.",
    icon: <Truck className="w-5 h-5 text-[#FF7230]" />,
  },
  {
    title: "Energy, Utilities & Smart Agriculture",
    description:
      "Monitor energy consumption, utility infrastructure and agricultural conditions through connected sensors and smart devices. Our IoT solutions support smart metering, solar monitoring, soil moisture detection, irrigation automation and remote equipment monitoring for better resource management.",
    icon: <Zap className="w-5 h-5 text-[#FF7230]" />,
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] border-t border-neutral-200/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            IoT Development Solutions Across Different Industries
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
            IoT technology helps businesses connect physical assets, collect operational information and improve decision-making. We develop industry-specific IoT solutions that address monitoring, automation, connectivity and data management requirements across different business environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className="rounded-[24px] bg-white border border-neutral-200/80 hover:border-[#FF7230]/40 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(255,114,48,0.08)] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-5">
                {industry.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#12141a] mb-3">
                {industry.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
