"use client";

export default function AiDevelopmentProcess() {
  return (
    <section className="relative w-full bg-[#fdfaf6] py-14 sm:py-20 lg:py-24 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Dark Card Container with Sunset Orange Horizon Lighting */}
        <div className="relative w-full rounded-[32px] sm:rounded-[44px] bg-[#140803] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-[#ff5e00]/20">
          
          {/* Luminous Sunset Orange Gradient Background Layers */}
          
          {/* 1. Large Right-Side Sunset Gradient Bloom (Luminous peach-to-orange glow) */}
          <div 
            className="absolute -bottom-10 right-0 w-[65%] h-[85%] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 90% 80% at 95% 85%, #f68c54 0%, #ee6426 22%, #ca4613 45%, #7a2205 70%, transparent 100%)",
              opacity: 0.95,
            }}
          />

          {/* 2. Left-Side Sunset Terracotta Gradient Bloom */}
          <div 
            className="absolute -bottom-10 left-0 w-[55%] h-[80%] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 85% 75% at 5% 85%, #f06a2b 0%, #d24e16 25%, #8a2a07 55%, transparent 100%)",
              opacity: 0.85,
            }}
          />

          {/* 3. Center Bottom Horizon Ambient Glow */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[420px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 100%, #ff7632 0%, #d84e15 30%, #852604 60%, transparent 100%)",
              opacity: 0.75,
            }}
          />

          {/* 4. Arched Dome Ring (The glowing curved arch contour behind the tablet) */}
          <div className="absolute -bottom-20 sm:-bottom-28 left-1/2 -translate-x-1/2 w-[720px] sm:w-[940px] lg:w-[1140px] h-[460px] sm:h-[600px] rounded-t-full border border-[#ff7a36]/35 pointer-events-none shadow-[0_0_35px_rgba(255,100,30,0.18)]" />

          {/* 5. Inner Arch Shadow to keep the tablet contrast high */}
          <div className="absolute -bottom-20 sm:-bottom-28 left-1/2 -translate-x-1/2 w-[718px] sm:w-[938px] lg:w-[1138px] h-[458px] sm:h-[598px] rounded-t-full bg-gradient-to-t from-transparent via-[#140803]/40 to-[#140803]/80 pointer-events-none" />

          {/* 6. Top Vignette to preserve contrast on title & subtitle */}
          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#140803] via-[#140803]/85 to-transparent pointer-events-none z-1" />

          {/* Header Typography */}
          <div className="text-center pt-12 sm:pt-16 lg:pt-20 px-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15]">
              Our AI Development Process
            </h2>
            <p className="text-[#e2d7ce] text-sm sm:text-base md:text-lg font-normal tracking-wide mt-2.5 sm:mt-3 max-w-xl mx-auto">
              From Strategy to Deployment
            </p>
          </div>

          {/* Centerpiece: Hands Holding the Tablet Mockup (Centered) */}
          <div className="relative z-10 mt-8 sm:mt-12 lg:mt-14 flex justify-center items-end px-3 sm:px-6 -mb-4 sm:-mb-7 lg:-mb-10">
            <div className="relative max-w-[880px] w-full flex justify-center group">
              <img
                src="/images/tab.png"
                alt="Our AI Development Process - From Strategy to Deployment"
                className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                draggable={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
