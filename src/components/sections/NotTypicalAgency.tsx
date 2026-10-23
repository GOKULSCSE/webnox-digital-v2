"use client";

const OTHER_TAGS = [
  "Hype-chasing",
  "Vague timelines",
  "Bloated scopes",
  "Endless delays",
  "Black-box fees",
  "Junior handoffs",
  "Broken promises",
];

const WEBNOX_TAGS = [
  "Full IP & code transfer",
  "Zero data retention",
  "Dedicated AI architects",
  "Full source delivery",
  "2x faster delivery",
  "Production in weeks",
  "Enterprise SLAs",
];

export default function NotTypicalAgency() {
  return (
    <section className="relative w-full bg-[#fdfaf6] py-20 sm:py-28 lg:py-36 overflow-hidden select-none">
      {/* Background Hands Motif (Human hand left, Robotic hand right) */}
      <div className="absolute -top-16 inset-x-0 w-full pointer-events-none select-none z-0 overflow-hidden flex justify-center">
        <div className="w-full max-w-[1560px]">
          <img
            src="/images/hands.png"
            alt="Human and AI collaboration"
            className="w-full h-auto object-contain object-top opacity-80 sm:opacity-95"
            draggable={false}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-[#140803] leading-[1.18]">
            We’re not <span className="text-[#6c6763] font-normal">your typical </span>
            <span className="text-[#ff5e00] font-semibold">AI agency</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-[#443e39] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            While the world talks about AI possibilities, we engineer the autonomous
            systems that actually run your business.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1240px] mx-auto">
          {/* Card 1: Other Agencies */}
          <div className="group relative rounded-[32px] sm:rounded-[38px] bg-[#0c0907] border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] p-6 sm:p-8 lg:p-10">
            {/* Top Marquee Badges */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-2.5 w-max animate-[agency-marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...OTHER_TAGS, ...OTHER_TAGS].map((tag, idx) => (
                  <span
                    key={`${tag}-${idx}`}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-white/65 bg-white/[0.08] border border-white/10 backdrop-blur-sm whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center: Blurred Screen Wireframe + "Other Agencies" Text */}
            <div className="relative my-auto py-10 flex items-center justify-center">
              {/* Blurred Screen Mockup Background */}
              <div
                className="absolute inset-0 max-w-[340px] sm:max-w-[400px] mx-auto h-[180px] sm:h-[210px] rounded-2xl bg-neutral-900/90 border border-white/10 overflow-hidden blur-[2.5px] opacity-45 pointer-events-none select-none transition-transform duration-700 group-hover:scale-105"
                style={{
                  transform: "perspective(800px) rotateX(12deg) rotateY(-8deg) rotate(-4deg)",
                }}
              >
                <div className="h-6 bg-neutral-800/80 border-b border-white/10 flex items-center px-3 gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <div className="p-4 space-y-2.5">
                  <div className="w-2/3 h-4 rounded bg-white/20" />
                  <div className="w-full h-8 rounded bg-neutral-800/80 border border-white/5" />
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="h-12 rounded bg-neutral-800/60 border border-white/5" />
                    <div className="h-12 rounded bg-neutral-800/60 border border-white/5" />
                  </div>
                </div>
              </div>

              {/* Bold Headline */}
              <h3 className="relative z-10 text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
                Other Agencies
              </h3>
            </div>

            {/* Bottom Copy */}
            <p className="relative z-10 text-white/70 text-xs sm:text-sm md:text-[15px] text-center max-w-md mx-auto leading-relaxed">
              Other agencies overwhelm you with buzzwords, take months to deliver, and
              leave you with tools you can’t use.
            </p>
          </div>

          {/* Card 2: Webnox */}
          <div
            className="group relative rounded-[32px] sm:rounded-[38px] border border-[#ff7b39]/35 overflow-hidden shadow-[0_25px_70px_rgba(241,76,12,0.32)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] p-6 sm:p-8 lg:p-10"
            style={{
              background:
                "radial-gradient(ellipse 95% 85% at 50% 60%, #F14C0C 0%, #e04408 30%, #a42c05 60%, #5a1402 85%, #240700 100%)",
            }}
          >
            {/* Watermark Ribbon Overlay */}
            <div
              className="absolute inset-0 pointer-events-none bg-contain bg-no-repeat bg-center opacity-25 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/tabbg.png')" }}
            />

            {/* Top Marquee Badges */}
            <div className="relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex gap-2.5 w-max animate-[agency-marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...WEBNOX_TAGS, ...WEBNOX_TAGS].map((tag, idx) => (
                  <span
                    key={`${tag}-${idx}`}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium text-white/95 bg-white/[0.18] border border-white/25 backdrop-blur-md whitespace-nowrap shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center: Webnox Logo with Glow */}
            <div className="relative z-10 my-auto py-10 flex items-center justify-center">
              <div className="relative transition-transform duration-500 group-hover:scale-105">
                {/* Soft ambient orange glow behind logo */}
                <div className="absolute inset-0 bg-[#ff8d4d] blur-[36px] opacity-40 rounded-full scale-125" />
                <img
                  src="/images/Webnox logo White.svg"
                  alt="Webnox"
                  className="relative z-10 h-11 sm:h-14 lg:h-16 w-auto object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                  draggable={false}
                />
              </div>
            </div>

            {/* Bottom Copy */}
            <p className="relative z-10 text-white/95 text-xs sm:text-sm md:text-[15px] text-center max-w-md mx-auto leading-relaxed font-normal drop-shadow-sm">
              We engineer purpose-built AI tailored directly to your business logic,
              delivering production-ready systems in weeks that drive measurable ROI.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded CSS for infinite marquee animation */}
      <style jsx>{`
        @keyframes agency-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
