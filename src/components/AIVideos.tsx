import React, { useState, useEffect } from 'react';
import { Video, Play, ExternalLink, Sparkles, CheckCircle2, Film, LogOut, ChevronLeft, ChevronRight, AlertTriangle, RotateCcw, ArrowLeft, ArrowUp } from 'lucide-react';
import { AIVideo } from '../types';

interface AIVideosProps {
  videos: AIVideo[];
}

export const AIVideos: React.FC<AIVideosProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<AIVideo | null>(null);
  const [videoError, setVideoError] = useState(false);

  const currentIndex = selectedVideo ? videos.findIndex((v) => v.id === selectedVideo.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex !== -1 && currentIndex < videos.length - 1;

  const handlePrevVideo = () => {
    if (currentIndex > 0) {
      setVideoError(false);
      setSelectedVideo(videos[currentIndex - 1]);
    }
  };

  const handleNextVideo = () => {
    if (currentIndex !== -1 && currentIndex < videos.length - 1) {
      setVideoError(false);
      setSelectedVideo(videos[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
        setVideoError(false);
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setVideoError(false);
          setSelectedVideo(videos[currentIndex - 1]);
        }
      } else if (e.key === 'ArrowRight') {
        if (currentIndex !== -1 && currentIndex < videos.length - 1) {
          setVideoError(false);
          setSelectedVideo(videos[currentIndex + 1]);
        }
      }
    };
    if (selectedVideo) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedVideo, currentIndex, videos]);

  return (
    <section id="videos" className="relative py-24 bg-[#0a1c28] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
              <span className="text-[#38BDF8]">05</span>
              <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
              <span className="text-[#FB923C]">Next-Gen Video Generation & Voice</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
              AI VIDEO PRODUCTIONS
            </h2>
            <p className="text-sm text-[#ede8de]/70 max-w-2xl">
              Next-generation video synthesis, AI voiceovers, and rhythm-matched editing — blending cinematic storytelling with agile digital production.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#top"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-xs font-semibold text-[#ede8de] hover:text-[#F9AB00] hover:border-[#F9AB00]/70 shadow-sm transition-all"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#F9AB00]" />
              <span>Return to Portfolio</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-[#ede8de]/80 bg-[#0d2232] px-3.5 py-2 rounded-lg border border-[#0284C7]/30 shadow-xs">
              <Film className="h-4 w-4 text-[#F9AB00]" />
              <span className="font-semibold text-[#F9AB00]">{videos.length} Video Projects</span>
              <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
              <span className="text-[#38BDF8]">CapCut · Runway ML · ElevenLabs</span>
            </div>
          </div>
        </div>

        {/* Pierre's Video Manifesto Callout with Yellow, Blue, Orange styling */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#0d2232] via-[#0f2a3e] to-[#12283a] border border-[#0284C7]/30 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F9AB00]">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Video Production Manifesto</span>
          </div>
          <p className="text-xs sm:text-sm text-[#ede8de]/90 leading-relaxed">
            “Hello, I’m Pierre K. Gatwaza, a creative professional with a fresh edge in <strong className="text-[#F9AB00]">AI-powered video production and editing</strong>, backed by my recent completion of an AI for Business course. I specialize in using next-generation tools like <strong className="text-[#38BDF8]">Runway ML, Pika, InVideo, Google AI Studio, and CapCut</strong> to generate, edit, and optimize videos with speed, precision, and style—whether it's automating scene creation, generating voiceovers, enhancing visuals, or tailoring content for different audiences.”
          </p>
          <div className="pt-2 text-xs text-[#ede8de]/60 flex flex-wrap items-center gap-2">
            <span className="text-[#FB923C] font-semibold">Video Pipelines:</span>
            <span className="text-[#F9AB00]">Script Architecture</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#38BDF8]">Voice Synthesis</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#FB923C]">Cinematic Pacing</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F9AB00]">Cross-Modal Assembly</span>
          </div>
        </div>

        {/* 3-Column Video Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((vid, idx) => (
            <div
              key={vid.id}
              className="group relative rounded-xl border border-[#0284C7]/30 bg-[#0d2232] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#F9AB00]/70 hover:shadow-[0_12px_32px_rgba(2,132,199,0.25)] hover:-translate-y-1"
            >
              {/* Top Accent Ribbon */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#0284C7] via-[#F9AB00] to-[#F97316]" />

              {/* Simulated Screen / Play Poster */}
              <div
                onClick={() => setSelectedVideo(vid)}
                className="relative aspect-video w-full bg-[#050f16] border-b border-[#0284C7]/20 flex items-center justify-center cursor-pointer overflow-hidden group-hover:bg-[#07151e] transition-colors"
              >
                {/* Visual subtle grid texture */}
                <div className="absolute inset-0 bg-imigongo-subtle opacity-30 pointer-events-none" />

                {/* Centered Play Button */}
                <div className="relative z-10 h-13 w-13 rounded-full bg-[#0284C7]/90 group-hover:bg-[#F9AB00] border border-[#38BDF8]/50 group-hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-lg transform group-hover:scale-110">
                  <Play className="h-5 w-5 text-[#F9AB00] group-hover:text-[#07151e] fill-current ml-0.5" />
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-[#ede8de]/80 z-10">
                  <span className="bg-[#07151e]/80 px-2 py-0.5 rounded border border-[#0284C7]/40 backdrop-blur-xs font-mono text-[#38BDF8]">
                    0{idx + 1}
                  </span>
                  <span className="bg-[#0284C7]/80 text-[#ede8de] px-2 py-0.5 rounded border border-[#38BDF8]/40 backdrop-blur-xs font-semibold">
                    Watch Stream
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1">
                <div>
                  <div className="text-[11px] font-mono text-[#FB923C] uppercase tracking-wider mb-1 font-semibold">
                    {vid.category}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#ede8de] group-hover:text-[#F9AB00] transition-colors leading-snug">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#ede8de]/60 mt-1 line-clamp-1">
                    {vid.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#ede8de]/80 leading-relaxed font-normal">
                  {vid.description}
                </p>

                {/* Tech Stack Unboxed */}
                <div className="pt-3 border-t border-[#0284C7]/20 space-y-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#ede8de]/50 font-semibold">
                    Production Stack
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#ede8de]/80">
                    {vid.technologies.map((t, i) => (
                      <React.Fragment key={t}>
                        <span className="text-[#F9AB00] font-medium">{t}</span>
                        {i < vid.technologies.length - 1 && (
                          <span className="text-[#ede8de]/30" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-[#050f16] border-t border-[#0284C7]/20 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedVideo(vid)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded transition-all shadow-sm"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Play Video</span>
                </button>

                <a
                  href={vid.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#38BDF8] hover:text-[#F9AB00] p-1 transition-colors font-medium"
                >
                  <span>Google Drive</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Return to Portfolio Navigation Bar */}
        <div className="mt-14 pt-8 border-t border-[#0284C7]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#ede8de]/70">
            Finished viewing video productions? Return to explore the full suite of Pierre's AI applications and creative systems.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#top"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d2232] border border-[#0284C7]/40 text-xs sm:text-sm font-bold text-[#ede8de] hover:text-[#F9AB00] hover:border-[#F9AB00]/70 shadow-md hover:shadow-[0_4px_20px_rgba(2,132,199,0.3)] transition-all cursor-pointer group"
            >
              <ArrowLeft className="h-4 w-4 text-[#F9AB00] group-hover:-translate-x-1 transition-transform" />
              <span>Return to Portfolio</span>
            </a>

            <a
              href="#apps"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#07151e] border border-[#0284C7]/30 text-xs sm:text-sm font-medium text-[#38BDF8] hover:text-[#F9AB00] hover:border-[#F9AB00]/40 transition-all cursor-pointer"
            >
              <span>Explore AI Apps</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Streaming Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07151e]/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl rounded-xl border border-[#0284C7]/40 bg-[#0d2232] shadow-2xl overflow-hidden space-y-4">
            {/* Modal Header with Category, Navigation Controls & Exit Button */}
            <div className="flex items-center justify-between p-4 sm:px-6 border-b border-[#0284C7]/20 bg-[#07151e]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F9AB00] uppercase tracking-wider">
                  <Video className="h-4 w-4" />
                  <span>{selectedVideo.category}</span>
                </div>

                {/* Header Video Stepper / Navigation */}
                <div className="flex items-center gap-1.5 bg-[#0d2232] px-2.5 py-1 rounded-md border border-[#0284C7]/30 text-xs">
                  <button
                    onClick={handlePrevVideo}
                    disabled={!hasPrev}
                    title="Previous Video (←)"
                    className="p-1 rounded text-[#ede8de] hover:text-[#F9AB00] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <span className="font-mono text-[11px] text-[#38BDF8] px-1 font-semibold">
                    {currentIndex + 1} / {videos.length}
                  </span>
                  <button
                    onClick={handleNextVideo}
                    disabled={!hasNext}
                    title="Next Video (→)"
                    className="p-1 rounded text-[#ede8de] hover:text-[#F9AB00] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Return to Portfolio Button */}
              <button
                onClick={() => {
                  setVideoError(false);
                  setSelectedVideo(null);
                }}
                title="Return to portfolio (Esc)"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded-md transition-all cursor-pointer shadow-sm hover:shadow-[0_0_10px_rgba(239,68,68,0.4)]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Return to Portfolio</span>
              </button>
            </div>

            {/* Video Player Embed (Google Drive Preview) or Error Fallback */}
            <div className="px-4 sm:px-6 space-y-3">
              {videoError ? (
                /* ERROR VIEW WITH PROMINENT RETURN TO PORTFOLIO BUTTON */
                <div className="relative aspect-video w-full rounded-lg bg-[#07151e] border-2 border-red-500/60 p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-red-950/90 border border-red-500/50 flex items-center justify-center text-red-400 shadow-md">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5 max-w-md">
                    <h4 className="text-base font-bold text-white">Video Stream Playback Error</h4>
                    <p className="text-xs text-[#ede8de]/80 leading-relaxed">
                      Google Drive video preview could not be loaded or third-party cookies/restrictions prevented streaming.
                    </p>
                  </div>

                  {/* PROMINENT RETURN TO PORTFOLIO BUTTON ON ERROR */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setVideoError(false);
                        setSelectedVideo(null);
                      }}
                      title="Return to portfolio on error"
                      className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-red-950/60 border border-red-400 transition-all cursor-pointer hover:scale-105"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Return to Portfolio</span>
                    </button>

                    <a
                      href={selectedVideo.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#0284C7] hover:bg-[#0284C7]/80 text-white text-xs font-semibold rounded-lg transition-all"
                    >
                      <span>Open in Drive</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <button
                      onClick={() => setVideoError(false)}
                      className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0d2232] hover:bg-[#102a3d] border border-[#0284C7]/30 text-xs text-[#ede8de] rounded-lg transition-all cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5 text-[#F9AB00]" />
                      <span>Retry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* ACTIVE VIDEO PLAYER */
                <div className="relative aspect-video w-full rounded-lg bg-black overflow-hidden border border-[#0284C7]/30 shadow-inner">
                  <iframe
                    key={selectedVideo.id}
                    src={selectedVideo.previewUrl}
                    title={selectedVideo.title}
                    allow="autoplay"
                    onError={() => setVideoError(true)}
                    className="w-full h-full border-0"
                  />
                </div>
              )}

              {/* Video Navigation Bar: Previous, Next & Playlist Selector */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevVideo}
                    disabled={!hasPrev}
                    title="Previous video (← Left Arrow)"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#07151e] border border-[#0284C7]/30 text-xs font-medium text-[#ede8de] hover:text-[#F9AB00] hover:border-[#F9AB00]/50 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                    <span>Previous Video</span>
                  </button>

                  <button
                    onClick={handleNextVideo}
                    disabled={!hasNext}
                    title="Next video (→ Right Arrow)"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#07151e] border border-[#0284C7]/30 text-xs font-medium text-[#ede8de] hover:text-[#F9AB00] hover:border-[#F9AB00]/50 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer shadow-xs"
                  >
                    <span>Next Video</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Playlist Quick Switcher */}
                <div className="hidden sm:flex items-center gap-1.5">
                  <span className="text-[11px] text-[#ede8de]/50 font-medium">Playlist:</span>
                  {videos.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setVideoError(false);
                        setSelectedVideo(v);
                      }}
                      title={v.title}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded transition-all cursor-pointer ${
                        v.id === selectedVideo.id
                          ? 'bg-[#F9AB00] text-[#07151e] font-bold shadow-xs'
                          : 'bg-[#07151e] text-[#ede8de]/70 hover:text-[#38BDF8] border border-[#0284C7]/20'
                      }`}
                    >
                      0{i + 1}
                    </button>
                  ))}
                </div>

                {/* Playback Issue Helper */}
                {!videoError && (
                  <button
                    onClick={() => setVideoError(true)}
                    title="Trigger error assistance and options"
                    className="text-[11px] text-[#ede8de]/50 hover:text-red-400 transition-colors underline cursor-pointer"
                  >
                    Playback issue?
                  </button>
                )}
              </div>
            </div>

            {/* Video Details */}
            <div className="p-4 sm:px-6 space-y-3 pb-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#ede8de]">
                  {selectedVideo.title}
                </h3>
                <p className="text-xs font-medium text-[#FB923C] mt-0.5">
                  {selectedVideo.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#ede8de]/85 leading-relaxed">
                {selectedVideo.description}
              </p>

              {selectedVideo.statement && (
                <div className="p-3.5 rounded bg-[#07151e] border border-[#0284C7]/30 text-xs text-[#ede8de]/75 leading-relaxed">
                  <span className="font-semibold text-[#F9AB00]">Director's Statement: </span>
                  {selectedVideo.statement}
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-[#0284C7]/20">
                <div className="flex flex-wrap gap-2 text-xs text-[#ede8de]">
                  {selectedVideo.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#07151e] border border-[#0284C7]/40 text-[#38BDF8] text-[11px]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedVideo.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded transition-all shadow-sm"
                  >
                    <span>Open in Drive</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setVideoError(false);
                      setSelectedVideo(null);
                    }}
                    title="Return to portfolio"
                    className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded transition-colors cursor-pointer shadow-xs"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Return to Portfolio</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
