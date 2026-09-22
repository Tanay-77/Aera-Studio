'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  client: string;
  year: string;
  image: string;
  aspect: string;
  layoutType: 'split-right' | 'offset-left' | 'wide-cinematic' | 'dual-asymmetric' | 'floating-portrait';
  description: string;
  credits: string;
}

const projects: ProjectItem[] = [
  {
    id: 'afterlight',
    num: '01',
    title: 'AFTERLIGHT',
    category: 'Fashion Campaign',
    client: 'Lune Department',
    year: '2026',
    image: '/images/red_silk_macro.jpg',
    aspect: 'aspect-[16/10]',
    layoutType: 'split-right',
    description: 'A study in tactile crimson silk, translucency, and continuous movement. Shot on 35mm color film with natural daylight.',
    credits: 'Art Direction: AERA Studio · Styling: Chie Tanaka · Cast: Mei Lin',
  },
  {
    id: 'silk-skin',
    num: '02',
    title: 'SILK / SKIN',
    category: 'Editorial',
    client: 'Numéro Homme',
    year: '2026',
    image: '/images/project_noir_editorial.jpg',
    aspect: 'aspect-[3/4]',
    layoutType: 'offset-left',
    description: 'Monochromatic architectural tailoring exploring volume and sculptural silhouette in studio stillness.',
    credits: 'Photography: AERA Studio · Direction: Antoine Rousseau',
  },
  {
    id: 'nocturne',
    num: '03',
    title: 'NOCTURNE',
    category: 'Fashion Film & Stills',
    client: 'Maison Vaneau',
    year: '2025',
    image: '/images/project_landscape_editorial.jpg',
    aspect: 'aspect-[16/9]',
    layoutType: 'wide-cinematic',
    description: 'Cinematic widescreen stills capturing a solitary figure against concrete coastal architecture at twilight.',
    credits: 'Cinematography: AERA Studio · Sound: Studio Onde',
  },
  {
    id: 'form',
    num: '04',
    title: 'FORM',
    category: 'Creative Direction',
    client: 'Atelier K',
    year: '2025',
    image: '/images/project_jewelry_macro.jpg',
    aspect: 'aspect-[3/4]',
    layoutType: 'floating-portrait',
    description: 'Macro exploration of modern sculptural jewelry contours against intimate skin tones in golden hour illumination.',
    credits: 'Direction: AERA Studio · Hair & Makeup: Yoko Sato',
  },
  {
    id: 'solaris',
    num: '05',
    title: 'SOLARIS',
    category: 'Brand Campaign',
    client: 'Kurogane Collective',
    year: '2025',
    image: '/images/pink_peony_macro.jpg',
    aspect: 'aspect-[16/10]',
    layoutType: 'dual-asymmetric',
    description: 'Botanical anatomy and delicate organic pigments framing spring haute couture accessories.',
    credits: 'Photography: AERA Studio · Flora: Kenji Ogawa',
  },
];

export default function SelectedWorks() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="selected-works"
      aria-label="Selected Works"
      className="relative w-full bg-[#fbfbfb] text-neutral-900 py-24 md:py-36 px-6 md:px-12 selection:bg-black selection:text-white"
    >
      {/* Sticky Editorial Section Header */}
      <div className="w-full flex items-baseline justify-between border-b border-neutral-300/80 pb-4 mb-20 md:mb-28 text-[11px] sm:text-xs md:text-[13px] tracking-wide font-light text-neutral-600 uppercase">
        <div className="flex items-center space-x-2">
          <span className="font-normal text-neutral-900">AERA Studio</span>
          <span className="opacity-60">·</span>
          <span>Selected Works</span>
        </div>
        <div className="hidden sm:block text-neutral-500 lowercase tracking-normal">
          visual stories created through photography & art direction
        </div>
        <div className="flex items-center space-x-2 text-right">
          <span>01 — 05</span>
          <span className="opacity-40">/</span>
          <span>Archive</span>
        </div>
      </div>

      {/* =========================================================================
          ASYMMETRIC EDITORIAL ARRANGEMENT 01:
          Large Image Right + Small Framed Triptych Left with Generous Whitespace
         ========================================================================= */}
      <div className="mb-28 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (5 cols): Editorial framing + Project Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] overflow-hidden border border-neutral-200 bg-white group cursor-pointer"
                 data-cursor="VIEW"
                 onClick={() => setActiveProject(projects[0])}>
              <Image
                src="/images/red_dress_triptych.jpg"
                alt="AFTERLIGHT - Triptych View"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-baseline space-x-3 text-xs tracking-wider uppercase text-neutral-500 font-mono">
                <span>01</span>
                <span>·</span>
                <span className="text-neutral-900 font-sans tracking-wide">AFTERLIGHT</span>
              </div>
              <p className="text-xs text-neutral-500 font-light">
                Fashion Campaign · Lune Department (Paris)
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Massive Editorial Macro Image */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full aspect-[16/11] overflow-hidden shadow-sm group cursor-pointer"
              data-cursor="VIEW"
              onClick={() => setActiveProject(projects[0])}
            >
              <Image
                src="/images/red_silk_macro.jpg"
                alt="AFTERLIGHT - Crimson Silk Macro"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            <div className="flex justify-between items-baseline mt-3 text-[11px] text-neutral-500 font-light">
              <span>Silk Chiffon Study</span>
              <span className="italic">35mm Daylight Capture</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ASYMMETRIC EDITORIAL ARRANGEMENT 02:
          Large Vertical Portrait Offset Right + Floating Whitespace and Left Details
         ========================================================================= */}
      <div className="mb-28 md:mb-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Left Column: Intentionally spacious negative space with minimal text */}
          <div className="lg:col-span-4 lg:col-start-2 order-2 lg:order-1 space-y-6 lg:pb-12">
            <div className="border-l border-neutral-300 pl-4 space-y-2">
              <div className="flex items-baseline space-x-2 text-xs font-mono uppercase text-neutral-400">
                <span>02</span>
                <span>·</span>
                <span className="text-neutral-900 font-sans text-sm tracking-wide">SILK / SKIN</span>
              </div>
              <p className="text-xs text-neutral-600 font-light leading-relaxed">
                Sculptural menswear tailoring examining volume and shadow under studio tungsten illumination. Published in Numéro Homme.
              </p>
              <span className="inline-block text-[10px] tracking-widest text-neutral-400 uppercase pt-2">
                Editorial · Monochromatic Stillness
              </span>
            </div>
          </div>

          {/* Right Column (6 cols): Striking Portrait Image */}
          <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <div
              className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer bg-neutral-100"
              data-cursor="VIEW"
              onClick={() => setActiveProject(projects[1])}
            >
              <Image
                src="/images/project_noir_editorial.jpg"
                alt="SILK / SKIN - Editorial Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-baseline mt-3 text-[11px] text-neutral-500 font-light">
              <span>02 · SILK / SKIN</span>
              <span>Editorial</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ASYMMETRIC EDITORIAL ARRANGEMENT 03:
          Wide Cinematic Landscape occupying 10 cols with asymmetric offset
         ========================================================================= */}
      <div className="mb-28 md:mb-44">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden group cursor-pointer shadow-sm"
            data-cursor="VIEW"
            onClick={() => setActiveProject(projects[2])}
          >
            <Image
              src="/images/project_landscape_editorial.jpg"
              alt="NOCTURNE - Fashion Film & Stills"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />

            <div className="absolute bottom-6 left-6 md:left-10 text-white flex items-baseline space-x-3 text-xs md:text-sm font-light drop-shadow-md">
              <span className="font-mono text-xs opacity-75">03</span>
              <span className="tracking-wide">NOCTURNE</span>
              <span className="opacity-50">·</span>
              <span className="text-white/80 text-xs">Fashion Film & Stills</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mt-3 text-[11px] text-neutral-500 font-light">
            <span>Maison Vaneau Autumn Campaign</span>
            <span>Duration: 04:12 · Concrete Coastline at Twilight</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ASYMMETRIC EDITORIAL ARRANGEMENT 04 & 05:
          Dual Offset Composition (Small + Large uneven spacing)
         ========================================================================= */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Work 04: FORM (Left column offset, 5 cols) */}
          <div className="lg:col-span-5 lg:col-start-1 space-y-4">
            <div
              className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer bg-neutral-100"
              data-cursor="VIEW"
              onClick={() => setActiveProject(projects[3])}
            >
              <Image
                src="/images/project_jewelry_macro.jpg"
                alt="FORM - Creative Direction"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-baseline text-[11px] text-neutral-500 font-light">
              <div className="flex items-center space-x-2">
                <span className="font-mono">04</span>
                <span className="text-neutral-900 font-normal">FORM</span>
              </div>
              <span>Creative Direction</span>
            </div>
          </div>

          {/* Work 05: SOLARIS (Right column offset lower down, 6 cols) */}
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-24 space-y-4">
            <div
              className="relative w-full aspect-[16/11] overflow-hidden group cursor-pointer bg-neutral-100"
              data-cursor="VIEW"
              onClick={() => setActiveProject(projects[4])}
            >
              <Image
                src="/images/pink_peony_macro.jpg"
                alt="SOLARIS - Brand Campaign"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-baseline text-[11px] text-neutral-500 font-light">
              <div className="flex items-center space-x-2">
                <span className="font-mono">05</span>
                <span className="text-neutral-900 font-normal">SOLARIS</span>
              </div>
              <span>Brand Campaign · Botanical Anatomy</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR CLICKED PROJECT
         ========================================================================= */}
      {activeProject && (
        <div
          id="project-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-50 bg-black/95 text-white flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-neutral-500">{activeProject.num}</span>
              <span className="text-white font-medium">{activeProject.title}</span>
              <span className="opacity-40">/</span>
              <span>{activeProject.category}</span>
            </div>
            <button
              onClick={() => setActiveProject(null)}
              type="button"
              className="text-white hover:text-neutral-400 transition-colors uppercase tracking-widest text-[11px] py-2 px-3"
            >
              [ Close × ]
            </button>
          </div>

          {/* Central Image View */}
          <div className="relative max-w-4xl max-h-[65vh] w-full mx-auto my-auto aspect-[16/10] overflow-hidden">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-contain object-center"
              sizes="90vw"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Footer details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-neutral-400 border-t border-neutral-800 pt-6">
            <div>
              <span className="block text-neutral-600 uppercase tracking-widest text-[10px] mb-1">Concept & Direction</span>
              <p className="text-neutral-300 font-light">{activeProject.description}</p>
            </div>
            <div>
              <span className="block text-neutral-600 uppercase tracking-widest text-[10px] mb-1">Production Credits</span>
              <p className="text-neutral-300 font-light">{activeProject.credits}</p>
            </div>
            <div className="md:text-right">
              <span className="block text-neutral-600 uppercase tracking-widest text-[10px] mb-1">Client & Year</span>
              <p className="text-neutral-300 font-light">{activeProject.client} · {activeProject.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
