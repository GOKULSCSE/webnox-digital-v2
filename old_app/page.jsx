'use client';

import React, { useState } from 'react';
import ScrollZoomSection from '../components/ScrollZoomSection';
import ContactModal from '../components/ContactModal';
import NavigationDrawer from '../components/NavigationDrawer';
import StudioShowcase from '../components/StudioShowcase';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleExploreStudio = () => {
    const el = document.getElementById('studio-capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMenuLink = (action) => {
    if (action === 'capabilities' || action === 'works') {
      handleExploreStudio();
    } else {
      setIsContactOpen(true);
    }
  };

  return (
    <main className="hero-wrapper">
      {/* Scroll Zoom Experience: Section 1 to Section 2 */}
      <ScrollZoomSection 
        onOpenContact={handleOpenContact} 
        onOpenMenu={handleOpenMenu}
        onExploreStudio={handleExploreStudio} 
      />

      {/* Under-Fold Studio Proof & Capabilities */}
      <StudioShowcase 
        onStartProject={handleOpenContact} 
      />

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={handleCloseContact} 
      />

      {/* Slide-out Navigation Drawer */}
      <NavigationDrawer 
        isOpen={isMenuOpen} 
        onClose={handleCloseMenu} 
        onSelectLink={handleSelectMenuLink}
      />
    </main>
  );
}
