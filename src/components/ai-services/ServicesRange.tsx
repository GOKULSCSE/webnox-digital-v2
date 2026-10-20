"use client";

import FeatureCarousel, { WEBNOX_SERVICES_FEATURES } from "@/components/ui/feature-carousel";

export default function ServicesRange() {
  return (
    <section id="services" className="relative w-full py-24 sm:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our Range of AI Application Development Services
          </h2>
          <p className="mt-5 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Our services cover the application lifecycle, from defining the use case and selecting
            an appropriate AI approach to integrating, testing and deploying the application.
          </p>
        </div>

        {/* Dynamic Feature Carousel with WD Grad.svg Orange Gradient & Theme Sync */}
        <div className="w-full">
          <FeatureCarousel features={WEBNOX_SERVICES_FEATURES} theme="webnox" />
        </div>
      </div>
    </section>
  );
}
