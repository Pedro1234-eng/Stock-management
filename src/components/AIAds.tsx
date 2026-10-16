import React, { useState, useEffect } from 'react';
import { Megaphone, ExternalLink, Sparkles, FileText, CheckCircle2, ArrowUpRight, LogOut } from 'lucide-react';
import { AIAd } from '../types';

interface AIAdsProps {
  ads: AIAd[];
}

export const AIAds: React.FC<AIAdsProps> = ({ ads }) => {
  const [selectedAd, setSelectedAd] = useState<AIAd | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedAd(null);
      }
    };
    if (selectedAd) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedAd]);

  return (
    <section id="ads" className="relative py-24 bg-[#07151e] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
              <span className="text-[#38BDF8]">04</span>
              <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
              <span className="text-[#FB923C]">Generative Advertising & Branding</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
              AI AD CAMPAIGNS
            </h2>
            <p className="text-sm text-[#ede8de]/70 max-w-2xl">
              Brand narratives, commercial advertising copy, and visual identity systems crafted with generative AI models and strategic audience psychology.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#ede8de]/80 bg-[#0d2232] px-3.5 py-2 rounded-lg border border-[#0284C7]/30 shadow-xs">
            <Megaphone className="h-4 w-4 text-[#FB923C]" />
            <span className="font-semibold text-[#F9AB00]">{ads.length} Campaigns</span>
            <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
            <span className="text-[#38BDF8]">Commercial & Creative Strategy</span>
          </div>
        </div>

        {/* Lead Quote Banner */}
        <div className="mb-12 p-6 sm:p-7 rounded-xl bg-gradient-to-r from-[#0d2232] via-[#0f2a3e] to-[#12283a] border border-[#F97316]/30 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-[#F97316]/20 border border-[#F97316]/40 flex items-center justify-center shrink-0 text-[#FB923C]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-base sm:text-lg font-bold text-[#ede8de]">
                The Strategy: Where Logic Meets Persuasion
              </h3>
              <p className="text-xs sm:text-sm text-[#ede8de]/85 leading-relaxed italic">
                “I bring a unique fusion of creativity, strategic marketing, and advanced AI knowledge to craft compelling brand narratives. From persuasive copywriting and product storytelling to visual branding and audience psychology, I design messages that not only sell but resonate.”
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid of Campaigns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ads.map((ad, idx) => (
            <div
              key={ad.id}
              className="group relative rounded-xl border border-[#0284C7]/30 bg-[#0d2232] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#F9AB00]/70 hover:shadow-[0_12px_36px_rgba(249,115,22,0.2)] hover:-translate-y-1"
            >
              {/* Top Accent Ribbon: Orange -> Yellow -> Blue */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#F97316] via-[#F9AB00] to-[#0284C7]" />

              <div className="p-7 space-y-5 flex-1">
                <div className="flex items-center justify-between text-xs text-[#ede8de]/60">
                  <span className="font-mono text-[#F9AB00] font-bold">0{idx + 1}</span>
                  <span className="text-[#38BDF8] font-semibold">{ad.galleryType || ad.category}</span>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold text-[#ede8de] group-hover:text-[#F9AB00] transition-colors leading-snug">
                    {ad.title}
                  </h3>
                  <p className="text-xs font-medium text-[#FB923C] mt-1">
                    {ad.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#ede8de]/80 leading-relaxed font-normal">
                  {ad.concept}
                </p>

                {ad.copy && (
                  <div className="p-4 rounded-lg bg-[#081926] border border-[#0284C7]/30 text-xs text-[#ede8de]/85 leading-relaxed line-clamp-3">
                    “{ad.copy}”
                  </div>
                )}

                {/* Unboxed Metadata Tools */}
                <div className="pt-3 border-t border-[#0284C7]/20 space-y-1.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#ede8de]/50 font-semibold">
                    Creative Tools & AI Stack
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#ede8de]/80">
                    {ad.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#F9AB00] font-medium">{tech}</span>
                        {i < ad.technologies.length - 1 && (
                          <span className="text-[#ede8de]/30" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 bg-[#081926] border-t border-[#0284C7]/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedAd(ad)}
                  className="px-3 py-1.5 text-xs font-semibold text-[#38BDF8] hover:text-white hover:bg-[#0284C7]/20 rounded border border-[#0284C7]/40 transition-colors"
                >
                  Read Campaign Story
                </button>

                {ad.docLink && (
                  <a
                    href={ad.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded transition-all shadow-sm"
                  >
                    <span>Campaign Page</span>
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Story Modal */}
      {selectedAd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07151e]/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-xl border border-[#0284C7]/40 bg-[#0d2232] p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#0284C7]/20">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F9AB00] flex items-center gap-1.5">
                <Megaphone className="h-4 w-4" />
                <span>Campaign Strategy & Copy</span>
              </span>
              <button
                onClick={() => setSelectedAd(null)}
                title="Exit campaign story (Esc)"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded-md transition-all cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Exit</span>
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-[#ede8de]">
                {selectedAd.title}
              </h3>
              <p className="text-xs font-medium text-[#FB923C]">
                {selectedAd.subtitle}
              </p>
              <p className="text-sm text-[#ede8de]/85 leading-relaxed pt-1">
                {selectedAd.concept}
              </p>
            </div>

            {selectedAd.copy && (
              <div className="p-5 rounded-lg bg-[#07151e] border border-[#0284C7]/30 space-y-2">
                <div className="text-xs font-mono text-[#F9AB00] font-semibold uppercase">
                  Verbatim Campaign Narrative:
                </div>
                <p className="text-xs sm:text-sm text-[#ede8de]/90 leading-relaxed font-normal">
                  {selectedAd.copy}
                </p>
              </div>
            )}

            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#ede8de]/60 uppercase tracking-wider">
                Integrated Frameworks:
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#ede8de]">
                {selectedAd.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-[#07151e] border border-[#0284C7]/40 text-[#38BDF8] flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-[#F9AB00]" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#0284C7]/20 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedAd(null)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded-md transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Exit</span>
              </button>

              {selectedAd.docLink && (
                <a
                  href={selectedAd.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] rounded-md hover:from-[#ffb71a] hover:to-[#ea580c] transition-all shadow-sm"
                >
                  <span>Open Full Campaign</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
