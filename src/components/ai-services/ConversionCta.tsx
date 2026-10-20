"use client";

export default function ConversionCta() {
  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#12141a] text-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl">
          Build Your AI Application with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7230] via-[#FF6A2F] to-[#FF8935]">
            Webnox Digital
          </span>
        </h2>

        {/* Body Paragraphs */}
        <div className="mt-6 flex flex-col gap-3 text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl">
          <p>
            Turn your business ideas into intelligent AI applications that solve real problems,
            streamline workflows and support business growth.
          </p>
          <p>
            From custom AI products to AI-powered business automation, we help you define the right
            solution and move from concept to production.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="mailto:contact@webnox.in?subject=AI%20Application%20Development%20Consultation"
            style={{ backgroundImage: "url('/WD Grad.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
            className="inline-flex items-center justify-center gap-2.5 hover:brightness-105 text-white text-sm sm:text-base font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_6px_25px_rgba(255,114,48,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Build Your AI Solution</span>
          </a>

          <a
            href="tel:+919786557739"
            className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white text-sm sm:text-base font-bold px-8 py-4 rounded-full border border-white/20 hover:border-white/30 backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            <span>Talk to Our AI Experts</span>
          </a>
        </div>
      </div>
    </section>
  );
}
