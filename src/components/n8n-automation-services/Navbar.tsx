"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
      ]}
      rightLinks={[
        { label: "Why Us", href: "#why-us" },
        { label: "Architecture", href: "#architecture" },
        { label: "Industries", href: "#industries" },
      ]}
    />
  );
}

