"use client";

import NotchNavbar from "@/components/ui/NotchNavbar";

export default function Navbar() {
  return (
    <NotchNavbar
      logoSrc="/images/Webnox logo White.png"
      leftLinks={[
        { label: "Overview", href: "#overview" },
        { label: "Services", href: "#services" },
        { label: "Capabilities", href: "#capabilities" },
      ]}
      rightLinks={[
        { label: "Architecture", href: "#architecture" },
        { label: "Process", href: "#process" },
        { label: "Industries", href: "#industries" },
      ]}
    />
  );
}

