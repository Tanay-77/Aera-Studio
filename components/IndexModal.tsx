'use client';

import React, { useEffect } from 'react';

interface IndexModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
}

export default function IndexModal({ isOpen, onClose, onSelectSection }: IndexModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const links = [
    { num: '01', title: 'Selected Works', id: 'selected-works', desc: 'Fashion campaigns, films & editorial stories' },
    { num: '02', title: 'Services & Direction', id: 'services-section', desc: 'Creative direction, photography, fashion film' },
    { num: '03', title: 'Studio Ethos', id: 'about-section', desc: 'Independent practice, tactile restraint, art direction' },
    { num: '04', title: 'Inquiries & Contact', id: 'contact-section', desc: 'Commissions, press, Paris / Tokyo / NY' },
  ];

  return (
    <div
      id="index-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Studio Navigation Menu"
      className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md text-white flex flex-col justify-between p-6 md:p-14 animate-in fade-in duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-[11px] md:text-xs text-neutral-400 uppercase tracking-wider">
        <span>AERA Studio · Index</span>
        <button
          onClick={onClose}
          type="button"
          aria-label="Close menu"
          className="text-white hover:text-neutral-400 transition-colors py-2 px-3 -mr-3"
        >
          [ Close × ]
        </button>
      </div>

      {/* Main Navigation List */}
      <div className="max-w-4xl mx-auto w-full my-auto py-10 space-y-8 md:space-y-12">
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => {
              onSelectSection(link.id);
              onClose();
            }}
            className="group w-full flex flex-col md:flex-row md:items-baseline justify-between text-left border-b border-neutral-800 pb-4 md:pb-6 transition-colors hover:border-neutral-500 focus:outline-none"
          >
            <div className="flex items-baseline space-x-6">
              <span className="text-xs text-neutral-500 font-mono tracking-widest group-hover:text-white transition-colors">
                {link.num}
              </span>
              <span className="text-2xl md:text-5xl font-light tracking-tight text-neutral-300 group-hover:text-white transition-colors group-hover:translate-x-2 duration-300">
                {link.title}
              </span>
            </div>
            <span className="text-xs md:text-sm text-neutral-500 font-light mt-2 md:mt-0 group-hover:text-neutral-300 transition-colors">
              {link.desc}
            </span>
          </button>
        ))}
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px] md:text-xs text-neutral-400 border-t border-neutral-800 pt-6">
        <div>
          <span className="text-neutral-600 block mb-1 uppercase tracking-wider">Global Representation</span>
          <span>contact@mode-studio.com</span>
        </div>
        <div>
          <span className="text-neutral-600 block mb-1 uppercase tracking-wider">Studio Locations</span>
          <span>Paris · Tokyo · New York</span>
        </div>
        <div className="sm:text-right">
          <span className="text-neutral-600 block mb-1 uppercase tracking-wider">Legal</span>
          <span>© 2026 AERA Studio · All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
