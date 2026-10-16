import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles, Edit3, CheckCircle2, Rocket, LogOut, Play, Maximize2, AlertTriangle, RotateCcw, ArrowLeft, Loader2 } from 'lucide-react';
import { AIApp } from '../types';

interface AIAppsProps {
  apps: AIApp[];
  onEditApp: (app: AIApp) => void;
}

export const AIApps: React.FC<AIAppsProps> = ({ apps, onEditApp }) => {
  const [selectedApp, setSelectedApp] = useState<AIApp | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'info' | 'live'>('live');
  const [appError, setAppError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Keyboard shortcut: Press Escape to Exit app modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedApp(null);
        setAppError(false);
      }
    };
    if (selectedApp) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedApp]);

  const categories = ['all', ...Array.from(new Set(apps.map((a) => a.category)))];

  const filteredApps = activeCategory === 'all'
    ? apps
    : apps.filter((app) => app.category === activeCategory);

  const handleOpenApp = (app: AIApp, mode: 'info' | 'live' = 'live') => {
    setSelectedApp(app);
    setViewMode(mode);
    setAppError(false);
    setIsLoading(true);
  };

  return (
    <section id="apps" className="relative py-24 bg-[#07151e] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
              <span className="text-[#38BDF8]">02</span>
              <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
              <span className="text-[#FB923C]">Live Deployed Applications</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
              MY AI APPS
            </h2>
            <p className="text-sm text-[#ede8de]/70 max-w-2xl">
              Production web applications built with Google AI Studio, GitHub, and Vercel — engineered for interactive physics simulations, adaptive arithmetic games, generative storytelling, and career prep.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#ede8de]/80 bg-[#0d2232] px-3.5 py-2 rounded-lg border border-[#0284C7]/30 shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#F9AB00] animate-pulse" />
            <span className="font-semibold text-[#F9AB00]">{apps.length} Live Tools</span>
            <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
            <span className="text-[#38BDF8]">Vercel & Google AI Studio</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-all whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#F9AB00] via-[#fb923c] to-[#F97316] text-[#07151e] shadow-sm'
                : 'text-[#ede8de]/70 hover:text-[#38BDF8] bg-[#0d2232] border border-[#0284C7]/30'
            }`}
          >
            All Deployed Apps ({apps.length})
          </button>
          {categories.filter((c) => c !== 'all').map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#07151e] font-bold shadow-sm'
                  : 'text-[#ede8de]/70 hover:text-[#ede8de] bg-[#0d2232] border border-[#0284C7]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic App Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredApps.map((app, index) => (
            <div
              key={app.id}
              className="group relative rounded-xl border border-[#0284C7]/30 bg-[#0d2232] overflow-hidden transition-all duration-300 hover:border-[#F9AB00]/70 hover:shadow-[0_12px_36px_rgba(2,132,199,0.25)] hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Tri-Color Accent Ribbon: Blue -> Yellow -> Orange */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0284C7] via-[#F9AB00] to-[#F97316]" />

              <div className="p-6 sm:p-7 space-y-5 flex-1">
                {/* Unboxed Metadata */}
                <div className="flex items-center justify-between text-xs text-[#ede8de]/60">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[#F9AB00] font-bold">0{index + 1}</span>
                    <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
                    <span className="truncate max-w-[170px] text-[#38BDF8] font-medium">{app.category}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[#FB923C] text-xs font-semibold">
                    <Rocket className="h-3 w-3" />
                    <span>Live</span>
                  </span>
                </div>

                {/* App Title & Subtitle */}
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#ede8de] group-hover:text-[#F9AB00] transition-colors">
                    {app.name}
                  </h3>
                  {app.subtitle && (
                    <p className="text-xs font-medium text-[#FB923C] mt-0.5">
                      “{app.subtitle}”
                    </p>
                  )}
                  <div className="mt-2 text-xs font-mono text-[#38BDF8]/70 truncate">
                    {app.url}
                  </div>
                </div>

                {/* App Description */}
                <p className="text-xs sm:text-sm text-[#ede8de]/80 leading-relaxed font-normal">
                  {app.description}
                </p>

                {/* Tech Stack */}
                <div className="pt-3 border-t border-[#0284C7]/20 space-y-1.5">
                  <div className="text-[11px] text-[#ede8de]/50 uppercase tracking-wider font-semibold">
                    Tools & Infrastructure
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#ede8de]/80">
                    {app.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#F9AB00] font-medium">{tech}</span>
                        {i < app.technologies.length - 1 && <span className="text-[#ede8de]/40" aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar with Yellow, Blue, Orange */}
              <div className="p-4 bg-[#081926] border-t border-[#0284C7]/20 flex items-center justify-between gap-2">
                <button
                  onClick={() => onEditApp(app)}
                  className="flex items-center gap-1 text-xs text-[#FB923C] hover:text-[#F9AB00] transition-colors p-1"
                  title="Configure App details"
                >
                  <Edit3 className="h-3.5 w-3.5 text-[#F9AB00]" />
                  <span>Config</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenApp(app, 'live')}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#38BDF8] hover:text-white bg-[#0284C7]/20 hover:bg-[#0284C7]/40 border border-[#0284C7]/40 rounded transition-colors"
                    title="Run app in screen with instant Exit button"
                  >
                    <Play className="h-3 w-3 fill-current text-[#F9AB00]" />
                    <span>Run App</span>
                  </button>

                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Launch live app in new tab"
                    className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded transition-all shadow-sm"
                  >
                    <span>New Tab</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive App Window / Modal with prominent EXIT BUTTON */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#07151e]/92 backdrop-blur-md animate-in fade-in">
          <div className={`relative w-full ${viewMode === 'live' ? 'max-w-5xl' : 'max-w-xl'} rounded-xl border border-[#0284C7]/40 bg-[#0d2232] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]`}>
            {/* Top Control Header with Prominent Exit Button */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#081926] border-b border-[#0284C7]/25">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F9AB00] animate-pulse" />
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#ede8de] leading-none flex items-center gap-2">
                    <span>{selectedApp.name}</span>
                    <span className="hidden sm:inline text-xs font-semibold text-[#38BDF8]">
                      ({selectedApp.category})
                    </span>
                  </h3>
                </div>
              </div>

              {/* Header Right Actions: View Mode, Launch, and PROMINENT EXIT BUTTON */}
              <div className="flex items-center gap-2.5">
                <div className="hidden sm:flex items-center bg-[#07151e] p-1 rounded-md border border-[#0284C7]/30">
                  <button
                    onClick={() => setViewMode('live')}
                    className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
                      viewMode === 'live'
                        ? 'bg-gradient-to-r from-[#F9AB00] to-[#F97316] text-[#07151e]'
                        : 'text-[#ede8de]/70 hover:text-[#38BDF8]'
                    }`}
                  >
                    Live App
                  </button>
                  <button
                    onClick={() => setViewMode('info')}
                    className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
                      viewMode === 'info'
                        ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#07151e]'
                        : 'text-[#ede8de]/70 hover:text-[#F9AB00]'
                    }`}
                  >
                    Details
                  </button>
                </div>

                <a
                  href={selectedApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open app in new browser tab"
                  className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#38BDF8] bg-[#0284C7]/20 hover:bg-[#0284C7]/40 border border-[#0284C7]/40 rounded-md transition-colors"
                >
                  <span>New Tab</span>
                  <ExternalLink className="h-3 w-3 text-[#F9AB00]" />
                </a>

                {/* PROMINENT EXIT BUTTON FOR ALL APPS */}
                <button
                  onClick={() => {
                    setSelectedApp(null);
                    setAppError(false);
                  }}
                  title="Exit this application and return to portfolio (or press Esc)"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-red-800/90 hover:bg-red-700 border border-red-500/50 hover:border-red-400 rounded-md transition-all shadow-md hover:shadow-[0_0_12px_rgba(239,68,68,0.4)] cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Exit App</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            {viewMode === 'live' ? (
              /* Live Embed View */
              <div className="flex-1 flex flex-col bg-black overflow-hidden relative min-h-[500px]">
                {/* Error State if embed fails */}
                {appError ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#07151e] border-2 border-red-500/50 text-center space-y-5 m-4 rounded-xl">
                    <div className="h-14 w-14 rounded-full bg-red-950/90 border border-red-500/50 flex items-center justify-center text-red-400 shadow-lg">
                      <AlertTriangle className="h-7 w-7" />
                    </div>

                    <div className="space-y-2 max-w-lg">
                      <h4 className="text-lg font-bold text-white">
                        Direct Tab Recommended for Full Experience
                      </h4>
                      <p className="text-xs sm:text-sm text-[#ede8de]/80 leading-relaxed">
                        Google AI Studio applications run with specialized GPU acceleration, cloud state, and authentication. To run <strong className="text-[#F9AB00]">{selectedApp.name}</strong> with no cross-origin errors or restrictions, launch it directly in a dedicated tab.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={selectedApp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded-lg transition-all shadow-md cursor-pointer hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Launch App in New Tab</span>
                      </a>

                      <button
                        onClick={() => {
                          setAppError(false);
                          setSelectedApp(null);
                        }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-red-900/90 hover:bg-red-800 text-white text-xs sm:text-sm font-bold rounded-lg border border-red-500/50 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Return to Portfolio</span>
                      </button>

                      <button
                        onClick={() => {
                          setAppError(false);
                          setIsLoading(true);
                        }}
                        className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0d2232] hover:bg-[#102a3d] border border-[#0284C7]/40 text-xs text-[#ede8de] rounded-lg transition-colors cursor-pointer"
                      >
                        <RotateCcw className="h-3.5 w-3.5 text-[#38BDF8]" />
                        <span>Retry</span>
                      </button>
                    </div>

                    {selectedApp.alternateUrl && (
                      <div className="pt-2 text-xs text-[#ede8de]/60">
                        <span>Alternate mirror: </span>
                        <a
                          href={selectedApp.alternateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#38BDF8] hover:text-[#F9AB00] underline ml-1"
                        >
                          {selectedApp.alternateUrl}
                        </a>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Loading Overlay */}
                    {isLoading && (
                      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#07151e]/90 backdrop-blur-xs space-y-3 pointer-events-none">
                        <Loader2 className="h-8 w-8 text-[#F9AB00] animate-spin" />
                        <span className="text-xs font-semibold text-[#ede8de]/80">
                          Initializing application session...
                        </span>
                      </div>
                    )}

                    {/* Direct Embed Frame */}
                    <iframe
                      key={selectedApp.url}
                      src={selectedApp.url}
                      title={selectedApp.name}
                      onLoad={() => setIsLoading(false)}
                      onError={() => {
                        setIsLoading(false);
                        setAppError(true);
                      }}
                      className="w-full flex-1 min-h-[500px] h-[65vh] border-0"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                      loading="lazy"
                    />

                    {/* Sub-bar with Live Help and Bottom Exit Button */}
                    <div className="p-3 bg-[#07151e] border-t border-[#0284C7]/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[#ede8de]/80 z-10">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#F9AB00] font-semibold">Running:</span>
                        <span className="font-mono text-[11px] truncate max-w-xs text-[#38BDF8]">{selectedApp.url}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setViewMode('info')}
                          className="px-3 py-1 text-xs text-[#ede8de]/70 hover:text-[#38BDF8] underline transition-colors"
                        >
                          View Framework Info
                        </button>

                        <a
                          href={selectedApp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] rounded hover:from-[#ffb71a] hover:to-[#ea580c] transition-all"
                        >
                          <span>Open Fullscreen</span>
                          <Maximize2 className="h-3 w-3" />
                        </a>

                        {/* Bottom Exit Button */}
                        <button
                          onClick={() => {
                            setAppError(false);
                            setSelectedApp(null);
                          }}
                          title="Exit application and return to portfolio"
                          className="flex items-center gap-1 px-3.5 py-1 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded transition-colors cursor-pointer"
                        >
                          <LogOut className="h-3 w-3" />
                          <span>Exit App</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Info & Specification View */
              <div className="p-6 sm:p-8 space-y-5 overflow-y-auto">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-[#ede8de]">
                    {selectedApp.name}
                  </h3>
                  {selectedApp.subtitle && (
                    <p className="text-sm font-medium text-[#F9AB00]">
                      “{selectedApp.subtitle}”
                    </p>
                  )}
                  <p className="text-sm text-[#ede8de]/85 leading-relaxed pt-1">
                    {selectedApp.description}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#07151e] border border-[#0284C7]/30 space-y-2">
                  <div className="text-xs font-mono text-[#ede8de]/60">Target Web Destination:</div>
                  <a
                    href={selectedApp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#F9AB00] hover:underline flex items-center gap-1.5 break-all font-semibold"
                  >
                    <span>{selectedApp.url}</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  </a>

                  {selectedApp.alternateUrl && (
                    <div className="pt-2 border-t border-[#0284C7]/20">
                      <div className="text-[11px] font-mono text-[#ede8de]/50">Alternate / Mirror Link:</div>
                      <a
                        href={selectedApp.alternateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#38BDF8] hover:text-[#F9AB00] hover:underline flex items-center gap-1.5 break-all"
                      >
                        <span>{selectedApp.alternateUrl}</span>
                        <ExternalLink className="h-3 w-3 shrink-0" />
                      </a>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#ede8de]/60 uppercase tracking-wider">
                    Integrated Frameworks & Architecture:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-[#ede8de]/90">
                    {selectedApp.technologies.map((t) => (
                      <span key={t} className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#07151e] border border-[#0284C7]/40 text-[#38BDF8]">
                        <CheckCircle2 className="h-3 w-3 text-[#F9AB00]" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions with Exit Button */}
                <div className="pt-4 border-t border-[#0284C7]/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedApp(null);
                      onEditApp(selectedApp);
                    }}
                    className="px-4 py-2 text-xs font-medium text-[#38BDF8] border border-[#0284C7]/40 rounded-md hover:bg-[#0284C7]/20 transition-colors"
                  >
                    Edit URL / Name
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('live')}
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#ede8de] bg-[#0284C7]/40 hover:bg-[#0284C7]/60 border border-[#38BDF8]/40 rounded-md transition-colors"
                    >
                      <Play className="h-3.5 w-3.5 fill-current text-[#F9AB00]" />
                      <span>Run in Window</span>
                    </button>

                    <a
                      href={selectedApp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Launch application in new tab"
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] rounded-md hover:from-[#ffb71a] hover:to-[#ea580c] transition-all shadow-sm"
                    >
                      <span>New Tab</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    {/* Exit Button */}
                    <button
                      onClick={() => {
                        setSelectedApp(null);
                        setAppError(false);
                      }}
                      title="Exit application and return to portfolio"
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/50 rounded-md transition-all shadow-xs cursor-pointer"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Exit App</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

