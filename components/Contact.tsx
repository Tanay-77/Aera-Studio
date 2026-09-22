'use client';

import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [times, setTimes] = useState({ paris: '', tokyo: '', ny: '' });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        paris: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }),
        ny: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateClocks();
    const timer = setInterval(updateClocks, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyEmail = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText('inquiries@mode-studio.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact-section"
      aria-label="Contact and Inquiries"
      className="relative w-full bg-[#111111] text-white py-24 md:py-36 px-6 md:px-12 selection:bg-white selection:text-black"
    >
      {/* Top Editorial Info Line */}
      <div className="w-full flex items-baseline justify-between border-b border-neutral-800 pb-4 mb-20 text-[11px] sm:text-xs md:text-[13px] tracking-wide font-light text-neutral-400 uppercase">
        <div className="flex items-center space-x-2">
          <span className="font-normal text-white">AERA Studio</span>
          <span className="opacity-60">·</span>
          <span>Inquiries</span>
        </div>
        <div className="hidden sm:block text-neutral-500 lowercase tracking-normal">
          accepting global commissions for autumn / winter 2026
        </div>
        <div className="text-right">
          <span>Direct Contact</span>
        </div>
      </div>

      {/* Main Email Callout */}
      <div className="max-w-4xl mx-auto text-center my-8 md:my-16 space-y-6">
        <span className="text-xs text-neutral-400 uppercase tracking-widest font-mono block">
          General & Commission Inquiries
        </span>
        <button
          onClick={copyEmail}
          type="button"
          aria-label="Copy inquiry email address"
          className="group text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-neutral-200 hover:text-white transition-colors duration-300 focus:outline-none"
        >
          <span className="border-b border-neutral-700 group-hover:border-white pb-1 transition-all">
            inquiries@mode-studio.com
          </span>
        </button>
        <p className="text-xs text-neutral-400 font-light">
          {copied ? '✓ Email address copied to clipboard' : 'Click to copy email address · Direct responses within 24 hours'}
        </p>
      </div>

      {/* Studio Locations and Live Time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-neutral-800 max-w-5xl mx-auto">
        {/* Paris */}
        <div className="space-y-2">
          <div className="flex items-baseline justify-between text-xs text-neutral-400">
            <span className="text-white font-medium">Paris Studio</span>
            <span className="font-mono text-[11px]">{times.paris || '10:14'} CET</span>
          </div>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            18 Rue Charlot, 75003 Paris<br />
            Studio & Darkroom Facility<br />
            paris@mode-studio.com
          </p>
        </div>

        {/* Tokyo */}
        <div className="space-y-2">
          <div className="flex items-baseline justify-between text-xs text-neutral-400">
            <span className="text-white font-medium">Tokyo Studio</span>
            <span className="font-mono text-[11px]">{times.tokyo || '18:14'} JST</span>
          </div>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            5-7-2 Minami-Aoyama, Minato-ku<br />
            Creative Direction & Casting<br />
            tokyo@mode-studio.com
          </p>
        </div>

        {/* New York */}
        <div className="space-y-2">
          <div className="flex items-baseline justify-between text-xs text-neutral-400">
            <span className="text-white font-medium">New York Office</span>
            <span className="font-mono text-[11px]">{times.ny || '04:14'} EST</span>
          </div>
          <p className="text-xs text-neutral-400 font-light leading-relaxed">
            48 Walker Street, New York, NY 10013<br />
            Editorial Production & Liaison<br />
            ny@mode-studio.com
          </p>
        </div>
      </div>
    </section>
  );
}
