'use client';

import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="studio-footer"
      className="w-full bg-[#0a0a0a] text-neutral-500 py-10 px-6 md:px-12 border-t border-neutral-900 text-[11px] font-light selection:bg-white selection:text-black"
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left branding */}
        <div className="flex items-center space-x-3">
          <span className="text-neutral-300 font-normal">AERA Studio</span>
          <span className="opacity-40">·</span>
          <span>Fashion Photography & Creative Direction</span>
        </div>

        {/* Center channels */}
        <div className="flex items-center space-x-6 text-neutral-400">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Vimeo
          </a>
          <a
            href="https://are.na"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Are.na
          </a>
        </div>

        {/* Right back to top */}
        <div className="flex items-center space-x-4">
          <span>© 2026 AERA Studio</span>
          <button
            onClick={scrollToTop}
            type="button"
            className="text-neutral-400 hover:text-white transition-colors uppercase tracking-wider text-[10px]"
          >
            [ Top ↑ ]
          </button>
        </div>
      </div>
    </footer>
  );
}
