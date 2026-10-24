import SmoothScroll from "@/components/SmoothScroll";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Link from "next/link";

export default function WhyChooseUsPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#080503] text-white">
        {/* Navigation */}
        <nav className="w-full z-50 flex justify-between items-center px-8 py-6 border-b border-white/[0.08] bg-[#080503]/85 backdrop-blur-md sticky top-0">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            WEBNOX<span className="text-[#ff5e00]">.</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-[#ff5e00] transition-colors">
              Home
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-neutral-400 hover:text-[#ff5e00] transition-colors">
              Solutions
            </Link>
            <button className="text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full border border-white/20 hover:border-[#ff5e00] hover:text-[#ff5e00] transition-colors">
              Menu
            </button>
          </div>
        </nav>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Footer CTA */}
        <section id="contact" className="py-24 px-4 bg-[#050302] text-center border-t border-white/[0.06] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[radial-gradient(ellipse_at_top,rgba(255,94,0,0.15),transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build with an AI-Native Engineering Partner?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Partner with Webnox to turn mission-critical concepts into battle-tested, high-performance software.
          </p>
          <button className="bg-[#ff5e00] text-white px-9 py-4 rounded-full font-medium hover:bg-[#ff4800] transition-colors duration-300 text-base shadow-[0_10px_25px_rgba(255,94,0,0.35)] cursor-pointer">
            Schedule a Discovery Call
          </button>
        </section>
      </main>
    </SmoothScroll>
  );
}
