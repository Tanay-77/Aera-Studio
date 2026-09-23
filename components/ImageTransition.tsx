'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ImageTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const slide4Ref = useRef<HTMLDivElement>(null);

  // Text refs for smooth fade / parallax
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Timeline pinned for 400% viewport scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=350%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Initially:
      // Slide 1 (Hero: Flower Eyes) is at top.
      // Slide 2 (Pink Peony Macro) enters from bottom (clip-path or yPercent)
      gsap.set(slide2Ref.current, { yPercent: 100, clipPath: 'inset(0% 0% 0% 0%)' });
      gsap.set(slide3Ref.current, { yPercent: 100 });
      gsap.set(slide4Ref.current, { yPercent: 100 });

      // STEP 1: Slide 2 (Pink Peony) enters from bottom, covering Slide 1
      // Matches Screenshot 2!
      tl.to(slide2Ref.current, {
        yPercent: 0,
        ease: 'none',
        duration: 1,
      }, 0);

      // Slide 1 scales slightly down for cinematic depth
      tl.to(slide1Ref.current, {
        scale: 0.94,
        ease: 'none',
        duration: 1,
      }, 0);

      // Text 1 fades out, Text 2 enters
      tl.to(text1Ref.current, { opacity: 0, y: -20, duration: 0.4 }, 0.2);
      tl.fromTo(
        text2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.5
      );

      // STEP 2: Slide 3 (Blue Sky Clouds) enters from bottom, covering Slide 2
      // Matches Screenshot 3!
      tl.to(slide3Ref.current, {
        yPercent: 0,
        ease: 'none',
        duration: 1,
      }, 1);

      tl.to(slide2Ref.current, {
        scale: 0.96,
        ease: 'none',
        duration: 1,
      }, 1);

      // Text 2 fades out, Text 3 enters
      tl.to(text2Ref.current, { opacity: 0, y: -20, duration: 0.4 }, 1.2);
      tl.fromTo(
        text3Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.5
      );

      // STEP 3: Slide 4 (Asymmetric Red Dress Triptych + Red Silk Fabric) enters
      // Matches Screenshot 4!
      tl.to(slide4Ref.current, {
        yPercent: 0,
        ease: 'none',
        duration: 1,
      }, 2);

      tl.to(slide3Ref.current, {
        scale: 0.96,
        ease: 'none',
        duration: 1,
      }, 2);

      // Text 3 fades out, Text 4 enters
      tl.to(text3Ref.current, { opacity: 0, y: -20, duration: 0.4 }, 2.2);
      tl.fromTo(
        text4Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        2.5
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      id="cinematic-transition-stack"
      className="relative w-full h-screen overflow-hidden bg-black select-none"
    >
      {/* =========================================================
          SLIDE 1: HERO (Screenshot 1 Reference)
          Model with Camellia Flowers over eyes
         ========================================================= */}
      <div
        ref={slide1Ref}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <Image
          src="/images/hero2.png"
          alt="AERA Studio - Fashion Photography"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Text 1: Positioned at 54% height */}
        <div
          ref={text1Ref}
          className="absolute top-[52%] sm:top-[54%] left-0 w-full px-6 md:px-12 flex items-center justify-between text-white/95 text-base sm:text-lg md:text-xl tracking-wide font-light z-20 pointer-events-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center space-x-2">
            <span>AERA</span>
            <span className="opacity-60">。</span>
            <span className="text-[11px]">アエラ</span>
            <span className="opacity-40 hidden md:inline">|</span>
            <span className="hidden md:inline text-white/80">Fashion Image Studio</span>
          </div>

          <div className="text-right flex items-center space-x-2 max-w-sm ml-auto">
            <span className="leading-tight">An independent fashion image studio creating photography, campaigns, and visual identities.</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDE 2: SECTION 2 (Screenshot 2 Reference)
          Soft Pink Peony Macro with yellow stamens
         ========================================================= */}
      <div
        ref={slide2Ref}
        className="absolute inset-0 w-full h-full will-change-transform z-10 shadow-2xl"
      >
        <Image
          src="/images/pink_peony_macro.jpg"
          alt="AERA Studio - Pink Peony Macro Editorial"
          fill
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        {/* Text 2: Matches Screenshot 2 text */}
        <div
          ref={text2Ref}
          className="absolute top-[52%] sm:top-[54%] left-0 w-full px-6 md:px-12 flex items-center justify-between text-slate-700 md:text-slate-800 text-base sm:text-lg md:text-xl tracking-wide font-light z-20 pointer-events-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
        >
          <div className="flex items-center space-x-2">
            <span className="font-normal text-slate-900">AERA Studio</span>
            <span className="opacity-60">。</span>
            <span className="text-[11px]">アエラ</span>
            <span className="opacity-40 hidden md:inline">|</span>
            <span className="hidden md:inline">AERA Studio</span>
          </div>

          <div className="text-right flex items-center space-x-2 sm:space-x-3">
            <span className="text-teal-700 font-normal">Brand Identity</span>
            <span className="opacity-50">。</span>
            <span>Website Design</span>
            <span className="opacity-50">。</span>
            <span>Creative Direction</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDE 3: SECTION 3 (Screenshot 3 Reference)
          Turquoise Blue Sky with White Billowing Cumulus Clouds
         ========================================================= */}
      <div
        ref={slide3Ref}
        className="absolute inset-0 w-full h-full will-change-transform z-20 shadow-2xl"
      >
        <Image
          src="/images/blue_sky_clouds.jpg"
          alt="AERA Studio - Sky and Clouds Visual Direction"
          fill
          sizes="100vw"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Text 3: Matches Screenshot 3 text (Left: AERA Studio · Services, Center: Visual direction..., Right: Brand Identity...) */}
        <div
          ref={text3Ref}
          className="absolute top-[52%] sm:top-[54%] left-0 w-full px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-base sm:text-lg md:text-xl tracking-wide font-light z-20 pointer-events-none"
        >
          {/* Left: Rust / Terracotta accent text as seen in screenshot 3 */}
          <div className="flex items-center space-x-2 text-amber-800 font-normal">
            <span>AERA Studio</span>
            <span className="opacity-60">。</span>
            <span>Services</span>
          </div>

          {/* Center text: Dark charcoal */}
          <div className="text-left md:text-center text-neutral-900 max-w-md font-normal">
            Visual direction and systems built around the brand.
          </div>

          {/* Right text: Brand Identity / Web Design */}
          <div className="text-right flex items-center space-x-2 sm:space-x-3 text-neutral-700">
            <span className="text-neutral-900 font-medium">Brand Identity</span>
            <span className="opacity-60">。</span>
            <span>Website Design</span>
            <span className="opacity-60">。</span>
            <span>Creative Direction</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDE 4: SECTION 4 (Screenshot 4 Reference)
          Asymmetric Composition:
          Left: Pure white gallery background with Red Sheer Dress Triptych
          Right: Full height Macro Crimson Red Silk fabric fold!
         ========================================================= */}
      <div
        ref={slide4Ref}
        className="absolute inset-0 w-full h-full will-change-transform z-30 shadow-2xl flex flex-col md:flex-row bg-white"
      >
        {/* Left Half: Clean White Editorial Canvas with Framed Triptych Image */}
        <div className="relative w-full md:w-[50%] h-[50%] md:h-full bg-white flex items-center justify-center p-6 sm:p-10 md:p-14">
          <div className="relative w-full max-w-[340px] md:max-w-[420px] aspect-[3/4] border border-neutral-200/80 shadow-sm bg-white overflow-hidden group">
            <Image
              src="/images/red_dress_triptych.jpg"
              alt="AERA Studio - Red Dress Triptych Editorial"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Screenshot 4 Left Text */}
          <div className="absolute top-[52%] sm:top-[54%] left-6 md:left-12 flex items-center space-x-2 text-neutral-900 text-base sm:text-lg md:text-xl tracking-wide font-normal pointer-events-none">
            <span>AERA Studio</span>
            <span className="opacity-60">。</span>
            <span>Selected Works</span>
          </div>
        </div>

        {/* Right Half: Giant Macro Crimson Silk Fabric fold */}
        <div className="relative w-full md:w-[50%] h-[50%] md:h-full overflow-hidden">
          <Image
            src="/images/red_silk_macro.jpg"
            alt="AERA Studio - Crimson Silk Macro"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 pointer-events-none" />

          {/* Screenshot 4 Right Text: Cyan/Teal accent text as seen in screenshot 4 */}
          <div
            ref={text4Ref}
            className="absolute top-[52%] sm:top-[54%] right-6 md:right-12 flex items-center space-x-2 text-emerald-400 md:text-cyan-300 text-base sm:text-lg md:text-xl tracking-wide font-medium pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
          >
            <span>Lune Department</span>
            <span className="opacity-80">。</span>
            <span>Fashion Label</span>
            <span className="opacity-40 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-white/90 text-[11px]">01 · AFTERLIGHT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
