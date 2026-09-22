'use client';

import React, { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import IndexModal from '@/components/IndexModal';
import ImageTransition from '@/components/ImageTransition';
import SelectedWorks from '@/components/SelectedWorks';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <main className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-white selection:text-black">
        {/* Subtle Custom Editorial Cursor */}
        <CustomCursor />

        {/* Fixed Navigation matching reference screenshots */}
        <Navigation
          isIndexOpen={isIndexOpen}
          onToggleIndex={() => setIsIndexOpen((prev) => !prev)}
          onToggleContact={() => handleScrollToSection('contact-section')}
        />

        {/* Minimalist Studio Index Modal Drawer */}
        <IndexModal
          isOpen={isIndexOpen}
          onClose={() => setIsIndexOpen(false)}
          onSelectSection={handleScrollToSection}
        />

        {/* The Continuous Overlapping Cinematic Image Sequence (Screenshots 1, 2, 3, 4) */}
        <ImageTransition />

        {/* Asymmetric Editorial Gallery (Selected Works) */}
        <SelectedWorks />

        {/* Services as Minimal Typography over Large Imagery */}
        <Services />

        {/* Studio Ethos & Manifesto */}
        <About />

        {/* Inquiries, Studios & Global Presence */}
        <Contact />

        {/* Editorial Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
