import SmoothScroll from "@/components/SmoothScroll";
import Solutions from "@/components/sections/Solutions";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#fcf8f2]">
        {/* Navigation */}
        <nav className="w-full z-50 flex justify-between items-center px-8 py-6 border-b border-neutral-200/60 bg-[#fcf8f2]/80 backdrop-blur-md sticky top-0">
          <Link href="/" className="text-xl font-bold tracking-tighter text-neutral-900">
            WEBNOX.
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-neutral-600 hover:text-[#ff5e00] transition-colors">
              Home
            </Link>
            <button className="text-sm uppercase tracking-widest font-semibold text-neutral-900 hover:text-[#ff5e00] transition-colors">
              Menu
            </button>
          </div>
        </nav>

        {/* Solutions Section */}
        <div className="pt-6">
          <Solutions />
        </div>

        {/* Footer CTA */}
        <section id="contact" className="py-24 px-4 bg-[#fcf8f2] text-center border-t border-neutral-200/60">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-900">Ready to Build Your Custom Solution?</h2>
          <button className="bg-black text-white px-9 py-4 rounded-full font-medium hover:bg-[#ff5e00] transition-colors duration-300 text-base shadow-md">
            Schedule a Strategy Call
          </button>
        </section>
      </main>
    </SmoothScroll>
  );
}
