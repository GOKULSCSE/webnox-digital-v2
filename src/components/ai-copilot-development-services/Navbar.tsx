"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Services", href: "#services" },
        { label: "Frameworks", href: "#frameworks" },
      ]}
      rightLinks={[
        { label: "Why Us", href: "#why-us" },
        { label: "Comparison", href: "#comparison" },
        { label: "Roadmap", href: "#process" },
      ]}
    />
  );
}
