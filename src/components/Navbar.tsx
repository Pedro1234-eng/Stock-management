import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Settings } from 'lucide-react';

interface NavbarProps {
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSettings }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#0284C7]/20 bg-[#07151e]/92 backdrop-blur-md transition-all shadow-[0_4px_20px_rgba(7,21,30,0.8)]">
      {/* Top Tri-Color Micro Ribbon: Blue, Yellow, Orange */}
      <div className="h-[2.5px] w-full bg-gradient-to-r from-[#0284C7] via-[#F9AB00] to-[#F97316]" />

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Zone 1: Wordmark with Blue-Yellow-Orange Glow */}
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-[#ede8de] transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-[#0284C7] group-hover:bg-[#F9AB00] transition-colors" />
          <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#38BDF8] group-hover:via-[#F9AB00] group-hover:to-[#FB923C] transition-all">
            Pierre K. Gatwaza
          </span>
        </a>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#ede8de]/80">
          <a
            href="#about"
            className="hover:text-[#F9AB00] hover:underline underline-offset-8 transition-colors"
          >
            About
          </a>
          <a
            href="#apps"
            className="hover:text-[#38BDF8] hover:underline underline-offset-8 transition-colors"
          >
            AI Apps
          </a>
          <a
            href="#projects"
            className="hover:text-[#FB923C] hover:underline underline-offset-8 transition-colors"
          >
            AI Projects
          </a>
          <a
            href="#ads"
            className="hover:text-[#F9AB00] hover:underline underline-offset-8 transition-colors"
          >
            AI Ads
          </a>
          <a
            href="#videos"
            className="hover:text-[#38BDF8] hover:underline underline-offset-8 transition-colors"
          >
            AI Videos
          </a>
          <a
            href="#skills"
            className="hover:text-[#FB923C] hover:underline underline-offset-8 transition-colors"
          >
            Skills
          </a>
          <a
            href="#culture"
            className="hover:text-[#F9AB00] hover:underline underline-offset-8 transition-colors"
          >
            Heritage
          </a>
          <a
            href="#contact"
            className="hover:text-[#38BDF8] hover:underline underline-offset-8 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions with Yellow, Blue, Orange */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSettings}
            title="Configure Project Links & Details"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#38BDF8] border border-[#0284C7]/40 bg-[#0d2232]/80 rounded-md hover:bg-[#0284C7]/20 hover:border-[#38BDF8] transition-all"
          >
            <Settings className="h-3.5 w-3.5 text-[#F9AB00]" />
            <span className="whitespace-nowrap">Edit Placeholders</span>
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded-md transition-all shadow-sm hover:shadow-[0_0_18px_rgba(249,115,22,0.45)] whitespace-nowrap"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSettings}
            aria-label="Edit placeholders"
            className="p-2 text-[#ede8de]/80 hover:text-[#F9AB00]"
          >
            <Settings className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#ede8de] hover:text-[#F9AB00] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Yellow, Blue, Orange Theme */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#0284C7]/20 bg-[#07151e]/98 backdrop-blur-lg px-6 py-5 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#ede8de]/90">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F9AB00] transition-colors py-1"
            >
              About
            </a>
            <a
              href="#apps"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38BDF8] transition-colors py-1"
            >
              AI Apps
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FB923C] transition-colors py-1"
            >
              AI Projects
            </a>
            <a
              href="#ads"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F9AB00] transition-colors py-1"
            >
              AI Ads
            </a>
            <a
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38BDF8] transition-colors py-1"
            >
              AI Videos
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#FB923C] transition-colors py-1"
            >
              Skills
            </a>
            <a
              href="#culture"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F9AB00] transition-colors py-1"
            >
              Heritage & Craft
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38BDF8] transition-colors py-1"
            >
              Contact
            </a>
          </nav>

          <div className="pt-3 border-t border-[#0284C7]/20 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSettings();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#38BDF8] border border-[#0284C7]/40 rounded-md bg-[#0d2232] hover:bg-[#102a3d] transition-colors"
            >
              <Settings className="h-4 w-4 text-[#F9AB00]" />
              <span>Configure Links & Info</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] rounded-md hover:from-[#ffb71a] hover:to-[#ea580c] transition-all shadow-sm"
            >
              Let's Build
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
