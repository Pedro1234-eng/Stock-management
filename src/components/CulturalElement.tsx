import React, { useState } from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';

export const CulturalElement: React.FC = () => {
  const [activeMotif, setActiveMotif] = useState<'itangaze' | 'umuraza' | 'amagere'>('itangaze');

  const motifs = {
    itangaze: {
      title: 'Itangaze (The Spiral of Wonder)',
      desc: 'Concentric diamond spirals symbolizing continuous discovery, curiosity, and iterative technological evolution.',
      patternSvg: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#F9AB00]" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="10" y="10" width="80" height="80" transform="rotate(45 50 50)" />
          <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" transform="rotate(45 50 50)" />
          <rect x="40" y="40" width="20" height="20" transform="rotate(45 50 50)" />
        </svg>
      ),
    },
    umuraza: {
      title: 'Umuraza (The River Chevron)',
      desc: 'Rhythmic alternating angles reflecting continuous flow, resilience, and adaptability in computational logic.',
      patternSvg: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#38BDF8]" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M10,20 L30,50 L50,20 L70,50 L90,20" />
          <path d="M10,40 L30,70 L50,40 L70,70 L90,40" />
          <path d="M10,60 L30,90 L50,60 L70,90 L90,60" />
        </svg>
      ),
    },
    amagere: {
      title: 'Amagere (The Interlocking Triangles)',
      desc: 'Interdependent geometric triangles representing community solidarity (Ubumwe) and foundational architectural strength.',
      patternSvg: (
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#FB923C]" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="50,15 90,85 10,85" />
          <polygon points="50,40 75,85 25,85" />
          <polygon points="50,60 65,85 35,85" />
        </svg>
      ),
    },
  };

  return (
    <section id="culture" className="relative py-24 bg-[#0a1c28] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
            <span className="text-[#38BDF8]">07</span>
            <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
            <span className="text-[#FB923C]">Rwandan Cultural Heritage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
            The Rwandan Heritage of Geometry & Craft
          </h2>
          <p className="text-sm text-[#ede8de]/70 max-w-2xl">
            Rooted in Rwanda — "The Land of a Thousand Hills". How centuries-old Imigongo mathematical art informs Pierre's vision of modern AI architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context & Philosophical Bridge */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#ede8de]/85 leading-relaxed">
              <p>
                In Rwanda, geometry has always been more than decoration—it is a language of meaning, order, and social harmony. In the 18th century, <strong className="text-[#F9AB00]">Imigongo</strong> art was pioneered in eastern Rwanda (Kibungo, Gisaka), using relief modeling to create bold, hypnotic geometric designs.
              </p>
              <p>
                As a Creative AI Developer, Pierre draws a direct line between these ancestral geometric patterns and modern algorithmic structures: recursive loops, matrix transformations, neural attention mechanisms, and minimal design precision.
              </p>
            </div>

            {/* Cultural Values Trio (Zero-Pill) with Blue, Yellow, Orange */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#0284C7]/20">
              <div className="p-4 rounded-lg bg-[#0d2232] border border-[#0284C7]/40 hover:border-[#38BDF8] transition-colors">
                <div className="font-display text-base font-bold text-[#38BDF8] mb-1">
                  Ubumwe
                </div>
                <div className="text-xs text-[#ede8de]/60 mb-2">Unity & Cohesion</div>
                <p className="text-xs text-[#ede8de]/75 leading-relaxed">
                  Harmonizing multifaceted disciplines—AI, math, physics, design—into cohesive software.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0d2232] border border-[#F9AB00]/40 hover:border-[#ffb71a] transition-colors">
                <div className="font-display text-base font-bold text-[#F9AB00] mb-1">
                  Ubuhanga
                </div>
                <div className="text-xs text-[#ede8de]/60 mb-2">Wisdom & Ingenuity</div>
                <p className="text-xs text-[#ede8de]/75 leading-relaxed">
                  Digging deep into "Why?", understanding fundamentals before engineering solutions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0d2232] border border-[#F97316]/40 hover:border-[#fb923c] transition-colors">
                <div className="font-display text-base font-bold text-[#FB923C] mb-1">
                  Umurava
                </div>
                <div className="text-xs text-[#ede8de]/60 mb-2">Courage & Craft</div>
                <p className="text-xs text-[#ede8de]/75 leading-relaxed">
                  Relentless commitment to build technology that is simple, resilient, and beautiful.
                </p>
              </div>
            </div>

            {/* Kinyarwanda Blessing / Touchpoint */}
            <div className="p-4 rounded-xl bg-[#0d2232] border border-[#0284C7]/30 flex items-center gap-3 text-xs sm:text-sm text-[#ede8de]/80">
              <Heart className="h-4 w-4 text-[#F9AB00] shrink-0" />
              <span>
                <strong className="text-[#ede8de]">Murakaza neza:</strong> You are warmly welcome to explore, collaborate, and innovate together.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Imigongo Motif Explorer */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#0284C7]/30 bg-[#0d2232] overflow-hidden shadow-2xl p-6 sm:p-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#0284C7]/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#F9AB00]">
                  <Compass className="h-4 w-4" />
                  <span>Interactive Motif Explorer</span>
                </div>
                <span className="text-xs text-[#38BDF8] font-mono">Rwanda Craft</span>
              </div>

              {/* Geometric Visualizer Canvas */}
              <div className="relative aspect-square w-full rounded-lg bg-[#07151e] border border-[#0284C7]/30 flex items-center justify-center p-8 overflow-hidden">
                <div className="w-48 h-48 sm:w-56 sm:h-56 transition-all duration-500 transform hover:scale-105">
                  {motifs[activeMotif].patternSvg}
                </div>

                <div className="absolute bottom-3 right-3 text-[11px] font-mono text-[#F9AB00]/80">
                  Pattern: {activeMotif.toUpperCase()}
                </div>
              </div>

              {/* Motif Selection Tabs with Yellow, Blue, Orange */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveMotif('itangaze')}
                  className={`flex-1 py-2 text-xs font-bold rounded transition-all cursor-pointer ${
                    activeMotif === 'itangaze'
                      ? 'bg-gradient-to-r from-[#F9AB00] to-[#ffb71a] text-[#07151e] shadow-sm'
                      : 'bg-[#07151e] border border-[#0284C7]/30 text-[#ede8de]/70 hover:text-[#F9AB00]'
                  }`}
                >
                  Itangaze (Yellow)
                </button>
                <button
                  onClick={() => setActiveMotif('umuraza')}
                  className={`flex-1 py-2 text-xs font-bold rounded transition-all cursor-pointer ${
                    activeMotif === 'umuraza'
                      ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#07151e] shadow-sm'
                      : 'bg-[#07151e] border border-[#0284C7]/30 text-[#ede8de]/70 hover:text-[#38BDF8]'
                  }`}
                >
                  Umuraza (Blue)
                </button>
                <button
                  onClick={() => setActiveMotif('amagere')}
                  className={`flex-1 py-2 text-xs font-bold rounded transition-all cursor-pointer ${
                    activeMotif === 'amagere'
                      ? 'bg-gradient-to-r from-[#F97316] to-[#FB923C] text-[#07151e] shadow-sm'
                      : 'bg-[#07151e] border border-[#0284C7]/30 text-[#ede8de]/70 hover:text-[#FB923C]'
                  }`}
                >
                  Amagere (Orange)
                </button>
              </div>

              {/* Motif Description */}
              <div className="p-4 rounded-lg bg-[#07151e] border border-[#0284C7]/30 space-y-1">
                <h4 className="font-display text-sm font-bold text-[#ede8de]">
                  {motifs[activeMotif].title}
                </h4>
                <p className="text-xs text-[#ede8de]/75 leading-relaxed">
                  {motifs[activeMotif].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
