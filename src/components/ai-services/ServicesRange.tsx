"use client";

import FeatureCarousel, { WEBNOX_SERVICES_FEATURES } from "@/components/ui/feature-carousel";

export default function ServicesRange() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#fdfaf6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#12141a] leading-tight">
            Our Range of AI Application Development Services
          </h2>
          <p className="mt-3 sm:mt-5 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
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
