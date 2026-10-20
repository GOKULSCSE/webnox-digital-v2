"use client";

import VerticalMarqueeDemo from "@/components/ui/marquee-03";

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#fcf8f2] border-t border-b border-neutral-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#12141a]">
            Trusted by Businesses. Proven by Results.
          </h2>
        </div>

        {/* Themed Vertical Infinite Marquee */}
        <div className="w-full">
          <VerticalMarqueeDemo heightClass="h-[620px]" />
        </div>
      </div>
    </section>
  );
}
