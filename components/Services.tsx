'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  num: string;
  name: string;
  desc: string;
  image: string;
  tags: string;
}

const serviceList: ServiceItem[] = [
  {
    id: 'photography',
    num: '01',
    name: 'Photography',
    desc: 'Editorial fashion stories, lookbooks, and high-resolution campaigns captured on medium format and 35mm film.',
    image: '/images/hero_flower_eyes.jpg',
    tags: 'Film & Digital · Studio & Location',
  },
  {
    id: 'creative-direction',
    num: '02',
    name: 'Creative Direction',
    desc: 'Guiding the overarching artistic vision, casting, location scouting, narrative tone, and seasonal brand language.',
    image: '/images/red_silk_macro.jpg',
    tags: 'Concept Development · Narrative Strategy',
  },
  {
    id: 'art-direction',
    num: '03',
    name: 'Art Direction',
    desc: 'Set architecture, material curation, typography layout, visual pacing, and graphic coordination for print and digital.',
    image: '/images/pink_peony_macro.jpg',
    tags: 'Typography · Spatial Composition',
  },
  {
    id: 'fashion-editorial',
    num: '04',
    name: 'Fashion Editorial',
    desc: 'Commissioned stories for international print publications, seasonal lookbooks, and runway capsule monographs.',
    image: '/images/red_dress_triptych.jpg',
    tags: 'Magazines · Lookbooks · Monograph',
  },
  {
    id: 'campaigns',
    num: '05',
    name: 'Campaigns',
    desc: 'Comprehensive multi-platform campaign assets combining motion, stills, billboard displays, and digital rollouts.',
    image: '/images/project_noir_editorial.jpg',
    tags: 'Global Rollouts · Multi-Asset Production',
  },
  {
    id: 'fashion-film',
    num: '06',
    name: 'Fashion Film',
    desc: 'Poetic cinematic motion pieces, atmospheric teasers, behind-the-scenes films, and sensory sound design.',
    image: '/images/project_landscape_editorial.jpg',
    tags: 'Cinematography · Sound Design · Motion',
  },
  {
    id: 'brand-imagery',
    num: '07',
    name: 'Brand Imagery',
    desc: 'Distinctive visual identities, bespoke material libraries, and enduring image systems built around fashion houses.',
    image: '/images/blue_sky_clouds.jpg',
    tags: 'Visual Identity · Image Archives',
  },
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section
      id="services-section"
      aria-label="Services & Capabilities"
      className="relative w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden py-24 md:py-32 px-6 md:px-12 selection:bg-white selection:text-black"
    >
      {/* Dynamic Background Editorial Image with subtle dark overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700">
        {serviceList.map((svc, idx) => (
          <div
            key={svc.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              activeIdx === idx ? 'opacity-35 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={svc.image}
              alt={svc.name}
              fill
              sizes="100vw"
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Subtle gradient vignette to guarantee crisp typographic legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70" />
      </div>

      {/* Top Editorial Info Line (Recreating the exact placement from the screenshots) */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between text-[11px] sm:text-xs md:text-[13px] tracking-wide font-light text-neutral-300 border-b border-white/10 pb-6 mb-12 md:mb-16">
        <div className="flex items-center space-x-2">
          <span className="font-normal text-white">AERA Studio</span>
          <span className="opacity-60">·</span>
          <span>Services</span>
        </div>

        <div className="text-left md:text-center text-neutral-400 font-light my-2 md:my-0">
          Images and visual direction built around fashion.
        </div>

        <div className="text-right flex items-center space-x-2 text-neutral-400">
          <span>Photography</span>
          <span className="opacity-50">·</span>
          <span>Art Direction</span>
          <span className="opacity-50">·</span>
          <span>Creative Direction</span>
        </div>
      </div>

      {/* Main Typography Layer: Services as Typography over Large Imagery */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-6 space-y-2 md:space-y-4">
        {serviceList.map((svc, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={svc.id}
              onMouseEnter={() => setActiveIdx(idx)}
              className="group cursor-pointer border-b border-white/10 pb-4 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between">
                <div className="flex items-baseline space-x-4 md:space-x-8">
                  <span className="text-xs md:text-sm font-mono text-neutral-500 group-hover:text-white transition-colors duration-300">
                    {svc.num}
                  </span>
                  <h3
                    className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'text-white translate-x-2'
                        : 'text-neutral-400 group-hover:text-neutral-200'
                    }`}
                  >
                    {svc.name}
                  </h3>
                </div>

                <div className="mt-2 md:mt-0 flex items-center space-x-4 text-xs md:text-sm text-neutral-400 font-light">
                  <span className="hidden lg:inline-block opacity-60 font-mono text-[11px]">
                    {svc.tags}
                  </span>
                  <span
                    className={`transition-opacity duration-300 ${
                      isActive ? 'opacity-100 text-neutral-200' : 'opacity-0 md:opacity-40'
                    }`}
                  >
                    Explore Discipline →
                  </span>
                </div>
              </div>

              {/* Service Description (Expands or highlights on active) */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isActive ? 'max-h-24 opacity-100 mt-3 pt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-xs md:text-sm text-neutral-300 font-light max-w-2xl pl-8 md:pl-16">
                  {svc.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Editorial Note */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] sm:text-xs text-neutral-400 border-t border-white/10 pt-6 mt-12">
        <span>Tailored commissions and seasonal retainers available worldwide</span>
        <span className="mt-2 sm:mt-0">Paris · Tokyo · New York</span>
      </div>
    </section>
  );
}
