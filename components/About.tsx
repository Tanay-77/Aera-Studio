'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about-section"
      aria-label="About the Studio"
      className="relative w-full bg-[#f6f6f6] text-neutral-900 py-24 md:py-36 px-6 md:px-12 selection:bg-black selection:text-white"
    >
      {/* Top Section Line */}
      <div className="w-full flex items-baseline justify-between border-b border-neutral-300 pb-4 mb-20 text-[11px] sm:text-xs md:text-[13px] tracking-wide font-light text-neutral-600 uppercase">
        <div className="flex items-center space-x-2">
          <span className="font-normal text-neutral-900">AERA Studio</span>
          <span className="opacity-60">·</span>
          <span>Studio & Ethos</span>
        </div>
        <div className="hidden sm:block text-neutral-500 lowercase tracking-normal">
          analog sensitivity · deliberate reduction · spatial harmony
        </div>
        <div className="text-right">
          <span>Est. 2020</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left Editorial Philosophy (7 cols) */}
        <div className="lg:col-span-7 space-y-8 md:space-y-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 leading-[1.15]">
            We operate at the convergence of fashion, tactile materials, and contemporary still photography.
          </h2>

          <div className="space-y-6 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl">
            <p>
              AERA is an independent fashion image studio creating photography, campaigns, and visual identities for fashion and lifestyle brands.
            </p>
            <p>
              Rather than producing transient digital noise, our practice is grounded in medium-format film capture, natural daylight studies, and rigorous sculptural composition. Each project is treated as an architectural space where garment, human form, and light converse in measured stillness.
            </p>
          </div>

          {/* Core Principles (3 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-neutral-300 text-xs">
            <div className="space-y-2">
              <span className="font-mono text-neutral-400 block">01 / MATERIALITY</span>
              <p className="text-neutral-600 font-light leading-relaxed">
                Prioritizing physical film stock, textile grain, and unhurried tactile textures over artificial embellishment.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-neutral-400 block">02 / REDUCTION</span>
              <p className="text-neutral-600 font-light leading-relaxed">
                Stripping extraneous styling to expose the purest silhouette and raw emotive posture of the subject.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-neutral-400 block">03 / CONTINUITY</span>
              <p className="text-neutral-600 font-light leading-relaxed">
                Formulating visual systems that retain their integrity across seasonal collections and print monographs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Architectural / Fashion Portrait Detail (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-200 shadow-sm group">
            <Image
              src="/images/project_noir_editorial.jpg"
              alt="AERA Studio At Work"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale contrast-105 transition-transform duration-1000 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex justify-between items-baseline text-[11px] text-neutral-500 font-light">
            <span>Studio Study No. 14 · Negative Space</span>
            <span>Paris Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
