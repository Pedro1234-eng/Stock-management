import React, { useEffect, useState } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentScroll = window.scrollY;
        const progress = Math.min(Math.max((currentScroll / scrollHeight) * 100, 0), 100);
        setScrollProgress(progress);
        setIsVisible(currentScroll > 10);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-[3px] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background track */}
      <div className="absolute inset-0 bg-[#07151e]/80 backdrop-blur-xs" />

      {/* Progress fill with Blue, Yellow, Orange gradient */}
      <div
        className="h-full w-full bg-gradient-to-r from-[#0284C7] via-[#F9AB00] to-[#F97316] transition-transform duration-75 ease-out origin-left shadow-[0_0_10px_rgba(249,171,0,0.7)]"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
        }}
      />

      {/* Micro golden spark at the leading edge */}
      <div
        className="absolute top-0 bottom-0 w-3 -ml-1.5 bg-[#fff8e7] rounded-full blur-[2px] opacity-80 transition-all duration-75 ease-out pointer-events-none"
        style={{
          left: `${scrollProgress}%`,
          display: scrollProgress > 0.5 && scrollProgress < 99.5 ? 'block' : 'none',
        }}
      />
    </div>
  );
};
