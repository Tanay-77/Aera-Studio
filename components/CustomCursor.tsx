'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('[data-cursor]');
        if (interactive) {
          setIsHovered(true);
          setHoverText(interactive.getAttribute('data-cursor') || '');
        } else if (target.closest('button, a, input')) {
          setIsHovered(true);
          setHoverText('');
        } else {
          setIsHovered(false);
          setHoverText('');
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: 'transform 0.08s cubic-bezier(0.2, 0.9, 0.3, 1)',
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-white mix-blend-difference flex items-center justify-center transition-all duration-300 ease-out ${
          isHovered
            ? hoverText
              ? 'w-16 h-16 bg-white text-black font-sans text-[10px] tracking-widest uppercase font-medium'
              : 'w-10 h-10 bg-white/20 scale-125'
            : 'w-5 h-5 bg-transparent'
        }`}
      >
        {hoverText ? (
          <span className="text-black pointer-events-none">{hoverText}</span>
        ) : (
          <span
            className={`w-1 h-1 bg-white rounded-full transition-transform duration-200 ${
              isHovered ? 'scale-0' : 'scale-100'
            }`}
          />
        )}
      </div>
    </div>
  );
}
