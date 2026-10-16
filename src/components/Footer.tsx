import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSettings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#0284C7]/20 bg-[#050f16] py-12 text-[#ede8de]/70">
      {/* Top Tri-Color Micro Ribbon: Blue, Yellow, Orange */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0284C7] via-[#F9AB00] to-[#F97316] opacity-80" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Cultural Root */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-display text-lg font-bold text-[#ede8de]">
              Pierre K. Gatwaza
            </div>
            <p className="text-xs text-[#ede8de]/60">
              Creative AI Developer · Kigali, Rwanda
            </p>
          </div>

          {/* Quick Nav Links (Unboxed) */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs">
            <a href="#about" className="hover:text-[#F9AB00] transition-colors">
              About
            </a>
            <a href="#apps" className="hover:text-[#38BDF8] transition-colors">
              AI Apps
            </a>
            <a href="#projects" className="hover:text-[#FB923C] transition-colors">
              AI Projects
            </a>
            <a href="#ads" className="hover:text-[#F9AB00] transition-colors">
              AI Ads
            </a>
            <a href="#videos" className="hover:text-[#38BDF8] transition-colors">
              AI Videos
            </a>
            <a href="#skills" className="hover:text-[#FB923C] transition-colors">
              Skills
            </a>
            <a href="#culture" className="hover:text-[#F9AB00] transition-colors">
              Heritage
            </a>
            <a href="#contact" className="hover:text-[#38BDF8] transition-colors">
              Contact
            </a>
            <button
              onClick={onOpenSettings}
              className="text-[#F9AB00] hover:underline cursor-pointer"
            >
              Configure Data
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#0d2232] border border-[#0284C7]/30 text-xs font-semibold text-[#ede8de] hover:text-[#F9AB00] hover:border-[#F9AB00]/50 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#F9AB00]" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#0284C7]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ede8de]/50">
          <div>
            © {new Date().getFullYear()} Pierre K. Gatwaza. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://sites.google.com/view/pierre-k-gatwaza-ai-portofolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ede8de]/60 hover:text-[#F9AB00] transition-colors"
            >
              Google Sites Archive
            </a>
            <span aria-hidden="true">·</span>
            <span className="text-[#38BDF8]">Ubumwe</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F9AB00]">Ubuhanga</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#FB923C]">Umurava</span>
            <span aria-hidden="true">·</span>
            <span>Rwanda 🇷🇼</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
