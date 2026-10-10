'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function Header({ onOpenMenu, onOpenContact }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef(null);

  const leftNavLinks = [
    { label: 'Ai', href: '#ai' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact', href: '#contact', isAction: true },
  ];

  const rightNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solution', href: '#solution' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 180);
  };

  return (
    <header className="site-header" role="banner">
      <div
        className={`canopy-bar nav-notch ${isExpanded ? 'is-expanded' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Notch Mini SVG Background (When logo alone on screen) */}
        <svg
          className="notch-svg notch-svg-mini"
          viewBox="0 0 417 85"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 0H417L412.135 4.46581C404.616 11.3682 399.035 20.1187 395.946 29.8471L391.383 44.2216C383.674 68.504 361.13 85 335.653 85H82.4047C55.8083 85 32.5627 67.0505 25.8354 41.319L23.9018 33.9231C20.6911 21.6422 13.571 10.7396 3.61703 2.8624L0 0Z"
            fill="url(#notch_mini_gradient)"
          />
          <defs>
            <linearGradient
              id="notch_mini_gradient"
              x1="0.1"
              y1="0.5"
              x2="1"
              y2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#100F10" />
              <stop offset="0.459628" stopColor="#212121" />
              <stop offset="0.999215" stopColor="#161616" />
            </linearGradient>
          </defs>
        </svg>

        {/* Notch Ext SVG Background (When whole menu shown) */}
        <svg
          className="notch-svg notch-svg-ext"
          viewBox="0 0 1383 85"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 0H1383H1346.04C1327.18 0 1309.49 9.09158 1298.51 24.4184L1272.6 60.5816C1261.62 75.9084 1243.92 85 1225.07 85H153.266C134.597 85 117.051 76.0854 106.043 61.0078L79.017 23.9922C68.0086 8.91458 50.4623 0 31.7936 0H0Z"
            fill="url(#notch_ext_gradient)"
          />
          <defs>
            <linearGradient
              id="notch_ext_gradient"
              x1="0.1"
              y1="0.5"
              x2="1"
              y2="0.5"
              gradientUnits="objectBoundingBox"
            >
              <stop stopColor="#100F10" />
              <stop offset="0.459628" stopColor="#212121" />
              <stop offset="0.999215" stopColor="#161616" />
            </linearGradient>
          </defs>
        </svg>

        {/* Left Navigation Links */}
        <nav className="canopy-nav canopy-nav-left" aria-label="Secondary Navigation">
          {leftNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="canopy-nav-link"
              onClick={(e) => {
                if (link.isAction) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
            >
              <span className="canopy-dot" aria-hidden="true" />
              <span className="canopy-label">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Center Webnox Logo (Webnox logo White.svg with Cinematic Shiny Lines) */}
        <div
          className="canopy-logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          aria-label="Webnox Home"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <svg
            className="canopy-logo-svg"
            viewBox="0 0 500 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Webnox"
          >
            <defs>
              {/* Original Figma Orange Gradient */}
              <linearGradient
                id="webnox_orange_grad"
                x1="234.867"
                y1="96.8702"
                x2="238.07"
                y2="37.5611"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF7230" />
                <stop offset="0.258735" stopColor="#FF6A2F" />
                <stop offset="0.439271" stopColor="#FF7631" />
                <stop offset="0.697859" stopColor="#FF8935" />
                <stop offset="0.996331" stopColor="#FF532B" />
              </linearGradient>

              {/* Clip Path isolating the Orange Infinity Loop */}
              <clipPath id="webnox_orange_clip">
                <path d="M133.741 67.2391C134.876 76.0139 141.268 82.9384 149.76 85.2215C159.194 87.7554 167.354 84.2179 174.322 78.0147C187.431 66.3547 199.223 52.4555 212.225 40.645C228.664 25.7172 254.155 26.1312 265.683 46.5221C281.332 74.2075 254.286 105.092 224.613 94.8681C212.294 90.6218 205.551 79.1688 196.036 71.1718C193.057 73.9754 190.26 76.9735 187.331 79.8337C176.304 90.6093 167.14 98.7443 150.187 96.2543C119.779 91.7947 112.786 50.3355 138.69 34.8307C152.407 26.6204 173.933 29.5809 182.294 44.0069C187.531 53.0451 184.508 67.2391 172.497 67.2391L133.741 67.2391ZM154.947 40.1809C144.78 40.6513 135.855 48.0086 133.86 58.0127L134.701 58.3012C145.677 57.6991 157.419 59.0539 168.307 58.3012C170.534 58.1444 173.068 57.9751 173.444 55.3282C174.862 45.3868 163.377 39.7983 154.941 40.1871L154.947 40.1809ZM205.482 65.7338C210.124 70.9648 220.178 81.5711 226.262 84.2681C244.652 92.4094 263.745 76.0704 258.464 56.8273C254.035 40.7015 233.613 35.1004 221.32 46.3903L203.701 63.7455C204.416 64.31 204.899 65.0815 205.482 65.7401L205.482 65.7338Z" />
              </clipPath>

              {/* Cinematic Anamorphic Shiny Sheen Gradient with Razor Specular Lines */}
              <linearGradient
                id="cinematic_sheen_gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="35%" stopColor="#FFE5CC" stopOpacity="0.25" />
                {/* Primary bright shiny line */}
                <stop offset="47%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="53%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#FFB370" stopOpacity="0.35" />
                <stop offset="66%" stopColor="#FFFFFF" stopOpacity="0.05" />
                {/* Secondary parallel shiny flare line */}
                <stop offset="76%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="80%" stopColor="#FFE0B2" stopOpacity="0.45" />
                <stop offset="90%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Clipped Orange Infinity Loop with Passing Shiny Lines */}
            <g clipPath="url(#webnox_orange_clip)">
              {/* Base Orange Infinity Emblem */}
              <path
                d="M133.741 67.2391C134.876 76.0139 141.268 82.9384 149.76 85.2215C159.194 87.7554 167.354 84.2179 174.322 78.0147C187.431 66.3547 199.223 52.4555 212.225 40.645C228.664 25.7172 254.155 26.1312 265.683 46.5221C281.332 74.2075 254.286 105.092 224.613 94.8681C212.294 90.6218 205.551 79.1688 196.036 71.1718C193.057 73.9754 190.26 76.9735 187.331 79.8337C176.304 90.6093 167.14 98.7443 150.187 96.2543C119.779 91.7947 112.786 50.3355 138.69 34.8307C152.407 26.6204 173.933 29.5809 182.294 44.0069C187.531 53.0451 184.508 67.2391 172.497 67.2391L133.741 67.2391ZM154.947 40.1809C144.78 40.6513 135.855 48.0086 133.86 58.0127L134.701 58.3012C145.677 57.6991 157.419 59.0539 168.307 58.3012C170.534 58.1444 173.068 57.9751 173.444 55.3282C174.862 45.3868 163.377 39.7983 154.941 40.1871L154.947 40.1809ZM205.482 65.7338C210.124 70.9648 220.178 81.5711 226.262 84.2681C244.652 92.4094 263.745 76.0704 258.464 56.8273C254.035 40.7015 233.613 35.1004 221.32 46.3903L203.701 63.7455C204.416 64.31 204.899 65.0815 205.482 65.7401L205.482 65.7338Z"
                fill="url(#webnox_orange_grad)"
              />

              {/* Animated Cinematic Shiny Passing Lines */}
              <g className="cinematic-shiny-lines-track">
                <rect
                  x="50"
                  y="-30"
                  width="110"
                  height="160"
                  fill="url(#cinematic_sheen_gradient)"
                  transform="skewX(-28)"
                  className="cinematic-shiny-beam"
                />
              </g>
            </g>

            {/* White Letters: 'W', 'o', 'x', 'n', 'b' stem */}
            <path
              d="M34.403 71.151L34.9675 70.461C41.8732 50.0137 47.9635 29.2465 55.095 8.88064C55.8476 6.72301 56.8135 3.08514 58.482 1.62999C61.6369 -1.1235 67.2442 -0.295579 69.0255 3.64336L88.8268 71.7092L113.439 3.6998C116.08 -2.83582 127.859 0.137201 126.322 7.07425C115.001 35.3179 104.714 63.9756 94.2836 92.5642C92.6529 95.9638 88.9272 98.2217 85.5904 95.3679C83.2258 93.342 81.2437 85.2822 80.2088 82.0019C73.9492 62.1504 68.4673 42.0354 62.2327 22.184C59.6047 29.5224 57.1648 36.9487 54.7437 44.3562C49.3685 60.8144 44.4511 77.5047 38.7057 93.7936C36.1718 97.9207 30.8655 97.4816 28.8584 93.0535L0.100384 6.80455C-1.14151 -0.0133215 9.48986 -2.53474 12.6197 3.23567L34.3905 71.151L34.403 71.151Z"
              fill="white"
            />
            <path
              d="M425.117 62.0701C425.117 81.3634 409.48 96.9999 390.187 96.9999C370.893 96.9999 355.257 81.3634 355.257 62.0701C355.257 42.7768 370.893 27.1402 390.187 27.1402C409.48 27.1402 425.117 42.7768 425.117 62.0701ZM414.83 62.0889C414.83 48.4469 403.772 37.3953 390.136 37.3953C376.501 37.3953 365.443 48.4532 365.443 62.0889C365.443 75.7247 376.501 86.7825 390.136 86.7825C403.772 86.7825 414.83 75.7247 414.83 62.0889Z"
              fill="white"
            />
            <path
              d="M431.012 95.1247C429.45 93.4563 429.287 90.4833 430.636 88.6455C432.781 85.729 436.739 82.894 439.178 80.1154L457.217 62.0577L431.075 36.1535C427.537 31.0982 433.176 25.3528 438.294 28.6583L464.355 54.6503L490.541 28.7775C495.39 25.3152 501.43 30.7971 498.074 35.7459L471.762 62.0514L497.911 88.2378C501.856 93.0549 495.879 99.2079 490.824 95.6077L464.355 69.4589L437.334 95.8962C435.446 97.2259 432.574 96.7868 431.012 95.1184L431.012 95.1247Z"
              fill="white"
            />
            <path
              d="M293.802 38.6938C297.779 34.0022 303.129 30.0131 309.188 28.4764C328.337 23.628 343.233 39.39 344.444 57.5856C345.196 68.863 343.879 80.9244 344.456 92.2897C343.265 97.9472 335.506 98.4113 333.881 92.7726C333.267 81.7524 334.465 70.2115 333.825 59.2477C333.053 45.9695 323.927 35.0684 309.689 38.4931C286.369 44.1004 295.445 75.8314 293.394 92.9922C291.858 97.759 285.071 98.0225 283.359 93.2054L283.189 31.8571C284.105 27.3725 289.963 26.1619 292.679 29.8751C294.398 32.2271 293.187 35.9026 293.802 38.6875L293.802 38.6938Z"
              fill="white"
            />
            <path
              d="M195.861 51.2882L195.861 4.14014C195.861 4.0147 196.589 2.47173 196.746 2.22711C198.809 -0.921529 205.176 -0.814892 206.436 3.08014L206.511 40.2554L206.229 41.3719L195.861 51.2882Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Right Navigation Links */}
        <nav className="canopy-nav canopy-nav-right" aria-label="Primary Navigation">
          {rightNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="canopy-nav-link"
              onClick={(e) => {
                if (link.isAction) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
            >
              <span className="canopy-dot" aria-hidden="true" />
              <span className="canopy-label">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Trigger Icon */}
        <button
          className="canopy-mobile-toggle"
          aria-label="Toggle navigation menu"
          onClick={onOpenMenu}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}

