export default function WhoWeAre() {
  return (
    <section className="py-24 px-4 bg-[#fdfaf6] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black tracking-tight">Who We Are</h2>
          <p className="text-xl text-neutral-600 mb-8 font-light leading-relaxed">
            We are an elite team of AI engineers, designers, and strategists building the next generation of digital products. Our mission is to integrate artificial intelligence into practical, beautiful, and scalable solutions for modern enterprises.
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-[#ff5e00]">10+</span>
              <span className="text-neutral-500 mt-1">Years Experience</span>
            </div>
            <div className="flex flex-col ml-8">
              <span className="text-4xl font-bold text-[#ff5e00]">50+</span>
              <span className="text-neutral-500 mt-1">AI Projects</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[500px] bg-neutral-100 rounded-3xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e00]/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Add a subtle pattern or image here */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
      </div>
    </section>
  );
}
