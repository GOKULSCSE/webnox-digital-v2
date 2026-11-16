"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Services", href: "#services" },
        { label: "Solutions", href: "#solutions" },
      ]}
      rightLinks={[
        { label: "Technologies", href: "#technologies" },
        { label: "Process", href: "#process" },
        { label: "Why Us", href: "#why-us" },
      ]}
    />
  );
}

