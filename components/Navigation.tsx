'use client';

import React from 'react';

interface NavigationProps {
  onToggleIndex?: () => void;
  onToggleContact?: () => void;
  isIndexOpen?: boolean;
}

export default function Navigation({
  onToggleIndex,
  onToggleContact,
  isIndexOpen = false,
}: NavigationProps) {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="fixed-navigation"
      aria-label="Studio Navigation"
      className="fixed top-0 left-0 w-full z-50 pointer-events-none mix-blend-difference text-white transition-opacity duration-500"
    >
      <div className="w-full px-5 py-5 md:px-10 md:py-7 flex items-center justify-between">
        {/* Top Left: Thin outlined square */}
        <button
          id="nav-square-btn"
          onClick={onToggleIndex}
          type="button"
          aria-label="Toggle Studio Index"
          className="pointer-events-auto group p-2 -m-2 flex items-center justify-center focus:outline-none"
        >
          <span
            className={`w-[16px] h-[16px] md:w-[18px] md:h-[18px] border border-white block transition-transform duration-300 group-hover:scale-110 ${
              isIndexOpen ? 'rotate-45' : 'rotate-0'
            }`}
          />
        </button>

        {/* Top Center: Abstract studio organic 4-petal logo */}
        <button
          id="nav-logo-btn"
          onClick={scrollToTop}
          type="button"
          aria-label="AERA Studio Home"
          className="pointer-events-auto group p-2 -m-2 flex items-center justify-center focus:outline-none"
        >
          <div className="w-6 h-6 md:w-7 md:h-7 grid grid-cols-2 gap-[2.5px] items-center justify-center transition-transform duration-500 group-hover:rotate-90">
            {/* Top-left petal */}
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-tl-[7px] rounded-br-[6px] rounded-tr-[3px] rounded-bl-[3px] block" />
            {/* Top-right petal */}
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-tr-[7px] rounded-bl-[6px] rounded-tl-[3px] rounded-br-[3px] block" />
            {/* Bottom-left petal */}
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-bl-[6px] rounded-tr-[5px] rounded-tl-[3px] rounded-br-[3px] ml-auto block" />
            {/* Bottom-right petal */}
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-br-[7px] rounded-tl-[6px] rounded-tr-[3px] rounded-bl-[3px] block" />
          </div>
        </button>

        {/* Top Right: Thin outlined circle */}
        <button
          id="nav-circle-btn"
          onClick={onToggleContact}
          type="button"
          aria-label="Contact and Inquiries"
          className="pointer-events-auto group p-2 -m-2 flex items-center justify-center focus:outline-none"
        >
          <span className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] border border-white rounded-full block transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
    </nav>
  );
}
