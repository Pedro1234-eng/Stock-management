import React, { useState } from 'react';
import { ArrowDown, Copy, Check, Volume2, Sparkles, MapPin } from 'lucide-react';
import { PortfolioSettings } from '../types';

interface HeroProps {
  settings: PortfolioSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(settings.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlayGreeting = () => {
    if ('speechSynthesis' in window) {
      setIsPlayingAudio(true);
      const utterance = new SpeechSynthesisUtterance('Muraho! Welcome.');
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 1200);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#07151e]">
      {/* Subtle Imigongo geometric background overlay */}
      <div className="absolute inset-0 bg-imigongo-subtle opacity-50 pointer-events-none" />

      {/* Decorative ambient color spots (Blue, Yellow, Orange) */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#0284C7]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-[#F97316]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#F9AB00]/12 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography & Context */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kinyarwanda Greeting & Culture Anchor */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 border-b-2 border-[#F9AB00] pb-1">
                <span className="font-display text-2xl md:text-3xl font-bold tracking-wide text-[#F9AB00]">
                  Muraho!
                </span>
                <button
                  onClick={handlePlayGreeting}
                  className="p-1.5 text-[#38BDF8] hover:text-[#F9AB00] transition-colors rounded hover:bg-[#0284C7]/20"
                  title="Listen to Kinyarwanda greeting"
                  aria-label="Listen to greeting"
                >
                  <Volume2 className={`h-5 w-5 ${isPlayingAudio ? 'animate-pulse text-[#F9AB00]' : ''}`} />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs md:text-sm text-[#ede8de]/60 tracking-wider">
                <span aria-hidden="true">·</span>
                <span className="uppercase text-[#38BDF8] font-medium">Hello in Kinyarwanda</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-[#FB923C] font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  Kigali, Rwanda
                </span>
              </div>
            </div>

            {/* Main Name & Hero Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#ede8de] leading-[1.05]">
                {settings.name}
              </h1>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gradient-ybo">
                {settings.tagline}
              </p>
            </div>

            {/* Brief Manifesto Bridge */}
            <p className="max-w-xl text-base sm:text-lg text-[#ede8de]/85 leading-relaxed font-normal">
              Turning difficult ideas into <span className="text-[#38BDF8] font-semibold">simple</span>, <span className="text-[#F9AB00] font-semibold">useful</span>, and <span className="text-[#FB923C] font-semibold">beautiful</span> technology. Blending artificial intelligence, mathematical rigor, and interactive design to build real experiences.
            </p>

            {/* Tri-Color Imigongo Accent Line */}
            <div className="h-2 w-36 rounded-full imigongo-border opacity-90 my-4 shadow-sm" />

            {/* CTAs and Direct Touchpoints */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#apps"
                className="px-6 py-3.5 text-sm font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] via-[#fb923c] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded-lg transition-all shadow-md hover:shadow-[0_0_24px_rgba(249,115,22,0.4)] flex items-center gap-2"
              >
                <span>View AI Apps & Projects</span>
                <ArrowDown className="h-4 w-4 stroke-[2.5]" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3.5 text-sm font-semibold text-[#38BDF8] bg-[#0d2232] hover:bg-[#102a3d] border border-[#0284C7]/40 hover:border-[#38BDF8] rounded-lg transition-all flex items-center gap-2 shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[#F9AB00]" />
                    <span className="text-[#F9AB00]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-[#F9AB00]" />
                    <span>{settings.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Unboxed Metadata Highlights (Zero-Pill Discipline) */}
            <div className="pt-6 border-t border-[#0284C7]/20 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-[#ede8de]/70">
              <span className="font-semibold text-[#F9AB00]">Core Pillars:</span>
              <span className="text-[#38BDF8]">Artificial Intelligence</span>
              <span aria-hidden="true" className="text-[#ede8de]/30">·</span>
              <span className="text-[#F9AB00]">Interactive Architecture</span>
              <span aria-hidden="true" className="text-[#ede8de]/30">·</span>
              <span className="text-[#FB923C]">Mathematics & Physics</span>
              <span aria-hidden="true" className="text-[#ede8de]/30">·</span>
              <span className="text-[#38BDF8]">Full-Stack Systems</span>
            </div>
          </div>

          {/* Right Column: Editorial Portrait with Imigongo Geometric Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Tri-Color Geometric Frame Accent */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#0284C7] via-[#F9AB00] to-[#F97316] opacity-75 blur-xs" />
              
              {/* Card Container */}
              <div className="relative rounded-xl overflow-hidden border border-[#0284C7]/40 bg-[#0d2232] shadow-2xl">
                {/* Imigongo top ribbon */}
                <div className="h-2.5 w-full imigongo-border" />

                {/* Editorial Portrait Photo with styled fallback */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#07151e]">
                  <img
                    src="/src/assets/images/pierre_gatwaza_real_portrait_1790948763314.jpg"
                    alt="Pierre K. Gatwaza — Creative AI Developer"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center filter saturate-[1.05] contrast-[1.02] transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle dark gradient scrim at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07151e] via-[#07151e]/20 to-transparent" />

                  {/* Overlaid Editorial Monogram & Title */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#07151e]/85 backdrop-blur-md border border-[#0284C7]/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-display text-sm font-bold text-[#ede8de]">
                          Pierre K. Gatwaza
                        </p>
                        <p className="text-xs text-[#F9AB00]">
                          Creative AI Developer · Kigali
                        </p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-[#0284C7] border border-[#F9AB00] flex items-center justify-center text-xs font-bold text-[#ede8de]">
                        PKG
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Bar */}
                <div className="p-4 bg-[#0d2232] border-t border-[#0284C7]/20 flex items-center justify-between text-xs text-[#ede8de]/80">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#F9AB00]" />
                    <span className="text-[#38BDF8]">Creative AI Engineering</span>
                  </span>
                  <span className="text-[#F9AB00] font-mono">Rwanda 🇷🇼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
