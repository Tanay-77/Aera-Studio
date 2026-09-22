'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  onScrollDown?: () => void;
}

export default function Hero({ onScrollDown }: HeroProps) {
  return (
    <section
      id="hero-section"
      aria-label="AERA Studio Hero"
      className="relative w-full h-screen overflow-hidden select-none"
    >
      {/* Background Hero Editorial Photograph */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_flower_eyes.jpg"
          alt="AERA Studio Fashion Photography - Model with Camellia Flowers"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Very subtle vignette for enhanced contrast if needed */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Floating Understated Information Line (Positioned directly over image) */}
      <div className="absolute top-[52%] sm:top-[54%] md:top-[56%] left-0 w-full px-6 md:px-12 flex items-center justify-between text-white/95 text-[11px] sm:text-xs md:text-[13px] tracking-wide font-light z-20 pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
        {/* Left text */}
        <div className="flex items-center space-x-2">
          <span>AERA Studio</span>
          <span className="opacity-60">·</span>
          <span>Fashion Photography</span>
          <span className="hidden sm:inline-block opacity-60 text-[10px]">アエラ</span>
        </div>

        {/* Right text */}
        <div className="text-right flex items-center space-x-2">
          <span>Editorial</span>
          <span className="opacity-60">·</span>
          <span>Campaigns</span>
          <span className="opacity-60">·</span>
          <span>Creative Direction</span>
        </div>
      </div>

      {/* Understated scroll prompt at bottom */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pointer-events-auto">
        <button
          onClick={onScrollDown}
          type="button"
          aria-label="Scroll to explore"
          className="group flex flex-col items-center space-y-1 text-white/70 hover:text-white transition-colors duration-300 focus:outline-none"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-light">Scroll</span>
          <span className="w-[1px] h-6 bg-white/40 group-hover:bg-white transition-all duration-300 animate-pulse" />
        </button>
      </div>
    </section>
  );
}
