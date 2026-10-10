'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function NavigationDrawer({ isOpen, onClose, onSelectLink }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { title: 'Home', href: '#', badge: 'Overview' },
    { title: 'About', href: '#about', badge: 'Company' },
    { title: 'Services', href: '#services', badge: 'AI & Dev' },
    { title: 'Solution', href: '#solution', badge: 'Enterprise' },
    { title: 'AI', href: '#ai', badge: 'Capabilities' },
    { title: 'Resources', href: '#resources', badge: 'Insights' },
    { title: 'Contact', href: '#contact', badge: 'Get in Touch', isAction: true },
  ];

  return (
    <div 
      className="drawer-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Webnox Navigation Menu"
    >
      <div className="drawer-panel">
        <div>
          <div className="drawer-header">
            <Image
              src="/assets/Webnox Logo v2.png"
              alt="Webnox"
              width={140}
              height={28}
              style={{ objectFit: 'contain' }}
            />
            <button 
              className="drawer-close-btn" 
              onClick={onClose}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="drawer-nav">
            {links.map((link) => (
              <a 
                key={link.title}
                href={link.href}
                className="drawer-link"
                onClick={(e) => {
                  onClose();
                  if (link.isAction) {
                    e.preventDefault();
                    onSelectLink('contact');
                  }
                }}
              >
                <span>{link.title}</span>
                <span className="drawer-badge">{link.badge}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="drawer-footer">
          <div className="drawer-footer-title">Webnox AI Solutions</div>
          <p className="drawer-footer-sub">Turning business ideas into production-ready AI products.</p>
        </div>
      </div>
    </div>
  );
}
