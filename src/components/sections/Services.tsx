export default function Services() {
  const services = [
    { title: "AI Integration", desc: "Seamlessly integrate AI models into your existing products and workflows." },
    { title: "Custom Agents", desc: "Build tailored AI agents that understand your business and automate tasks." },
    { title: "Product Design", desc: "Crafting beautiful, intuitive interfaces for complex AI applications." },
    { title: "Data Engineering", desc: "Robust data pipelines to fuel your AI models and analytics." }
  ];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, i) => (
            <div key={i} className="p-10 border border-neutral-800 rounded-3xl hover:border-[#ff5e00] hover:bg-neutral-900 transition-all duration-300 group cursor-pointer">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#ff5e00] transition-colors">{srv.title}</h3>
              <p className="text-neutral-400 font-light">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
