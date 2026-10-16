import React, { useState } from 'react';
import { Cpu, Code, Binary, Atom, Globe, Palette, Award, Satellite, Network, Compass, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS_AND_DOMAINS } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manifesto' | 'certifications'>('manifesto');

  const pillars = [
    {
      name: 'Artificial Intelligence',
      icon: Cpu,
      desc: 'Harnessing generative models, reasoning agents, and multimodal architectures to solve real problems.',
    },
    {
      name: 'Programming (C++ & Python)',
      icon: Code,
      desc: 'Writing clean, resilient, and performant code across web, cloud, and edge runtime environments.',
    },
    {
      name: 'Mathematics',
      icon: Binary,
      desc: 'Applying linear algebra, probability, and algorithmic logic to turn theoretical models into practical software.',
    },
    {
      name: 'Physics',
      icon: Atom,
      desc: 'Grounding systems in fundamental first principles, dynamic modeling, and physical intuition.',
    },
    {
      name: 'ICT, GIS & Satellite (ESA SNAP)',
      icon: Globe,
      desc: 'Designing robust information architecture, earth observation processing, and cloud communications.',
    },
    {
      name: 'Design & Spatial Architecture',
      icon: Palette,
      desc: 'Crafting visceral, human-centered interfaces and CAD structural balance that make tech enjoyable to use.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0a1c28] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
              <span className="text-[#38BDF8]">01</span>
              <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
              <span className="text-[#FB923C]">About Pierre K. Gatwaza</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
              Turning difficult ideas into simple, useful, and beautiful technology.
            </h2>
          </div>

          {/* View Mode Toggle with Yellow, Blue, Orange */}
          <div className="flex items-center gap-2 bg-[#07151e] p-1 rounded-lg border border-[#0284C7]/30">
            <button
              onClick={() => setActiveTab('manifesto')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                activeTab === 'manifesto'
                  ? 'bg-gradient-to-r from-[#F9AB00] to-[#F97316] text-[#07151e] shadow-sm'
                  : 'text-[#ede8de]/70 hover:text-[#38BDF8]'
              }`}
            >
              Vision & Pillars
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#07151e] shadow-sm'
                  : 'text-[#ede8de]/70 hover:text-[#F9AB00]'
              }`}
            >
              Certified Credentials
            </button>
          </div>
        </div>

        {activeTab === 'manifesto' ? (
          /* Editorial Split: The Real Manifesto & Visual Cultural Harmony */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Statement (Exact Text from Brief & Site) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#F9AB00] space-y-6">
                <blockquote className="font-display text-xl sm:text-2xl text-[#ede8de] leading-relaxed font-medium">
                  “Muraho! I’m <span className="text-[#38BDF8] font-bold">Pierre K. Gatwaza</span> — I turn difficult ideas into simple, useful, and beautiful technology. I’m a Creative AI Developer who loves asking “Why?”, understanding how things really work, and then building something people can actually use.”
                </blockquote>

                <p className="text-base sm:text-lg text-[#ede8de]/85 leading-relaxed">
                  “I combine <span className="text-[#38BDF8] font-semibold">AI & programming</span>, <span className="text-[#F9AB00] font-semibold">mathematics & physics</span>, <span className="text-[#FB923C] font-semibold">ICT, and design</span> to transform ideas into interactive experiences. My goal is simple: make technology intelligent, understandable, and useful—and make the journey exciting along the way.”
                </p>

                <div className="p-4 rounded-lg bg-[#0d2232] border border-[#0284C7]/30 text-xs sm:text-sm text-[#ede8de]/85 leading-relaxed">
                  <span className="text-[#F9AB00] font-bold">Background from Google Site Portfolio: </span>
                  With a solid foundation in Physics and Mathematics, ICT (C++ & Python), and credentials in STEM, CAD (ArchiCAD), GIS, CISCO (Networking and IoT), and ESA SNAP for satellite data, Pierre recently graduated from the intensive <strong className="text-[#38BDF8]">AI for Business</strong> course to spearhead real-world digital transformation.
                </div>
              </div>

              {/* Core Pillars Grid with Yellow, Blue, Orange Accent distribution */}
              <div className="pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#F9AB00] mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0284C7]" />
                  <span>The Interdisciplinary Core</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    // Distribute colors across the 6 pillars: Blue, Yellow, Orange
                    const colorScheme = [
                      { border: 'border-[#0284C7]/40 hover:border-[#38BDF8]', iconBg: 'bg-[#0284C7]/20 text-[#38BDF8]' },
                      { border: 'border-[#F9AB00]/40 hover:border-[#ffb71a]', iconBg: 'bg-[#F9AB00]/20 text-[#F9AB00]' },
                      { border: 'border-[#F97316]/40 hover:border-[#fb923c]', iconBg: 'bg-[#F97316]/20 text-[#FB923C]' },
                      { border: 'border-[#0284C7]/40 hover:border-[#38BDF8]', iconBg: 'bg-[#0284C7]/20 text-[#38BDF8]' },
                      { border: 'border-[#F9AB00]/40 hover:border-[#ffb71a]', iconBg: 'bg-[#F9AB00]/20 text-[#F9AB00]' },
                      { border: 'border-[#F97316]/40 hover:border-[#fb923c]', iconBg: 'bg-[#F97316]/20 text-[#FB923C]' },
                    ][idx % 6];

                    return (
                      <div
                        key={pillar.name}
                        className={`p-4 rounded-lg bg-[#0d2232] border ${colorScheme.border} transition-all hover:bg-[#102a3d]`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`h-8 w-8 rounded-md ${colorScheme.iconBg} flex items-center justify-center`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="font-display text-sm font-bold text-[#ede8de]">
                            {pillar.name}
                          </h4>
                        </div>
                        <p className="text-xs text-[#ede8de]/75 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Visual Box: Photo & Rwandan Cultural Art */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card with Image Toggle or Showcase */}
              <div className="rounded-xl overflow-hidden border border-[#0284C7]/30 bg-[#0d2232] shadow-xl">
                {/* Visual Header */}
                <div className="flex items-center justify-between p-3.5 bg-[#07151e] border-b border-[#0284C7]/20">
                  <span className="text-xs font-bold text-[#F9AB00] uppercase tracking-wider flex items-center gap-1.5">
                    <span>Pierre K. Gatwaza</span>
                    <span className="text-[#ede8de]/40">·</span>
                    <span className="text-[#38BDF8] font-normal">Kigali Studio</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#0284C7]" />
                    <span className="h-2 w-2 rounded-full bg-[#F9AB00]" />
                    <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                  </div>
                </div>

                {/* Updated Studio / Innovator Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#07151e]">
                  <img
                    src="/src/assets/images/pierre_studio_innovator_1790948776868.jpg"
                    alt="Pierre K. Gatwaza in his Creative AI Studio in Kigali"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07151e] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-[#07151e]/85 backdrop-blur-sm border border-[#0284C7]/30 px-2.5 py-1 rounded text-[11px] text-[#F9AB00] font-semibold">
                      Creative AI Lab · Kigali, Rwanda
                    </span>
                    <span className="text-[11px] text-[#ede8de]/80 font-mono">
                      Rwanda 🇷🇼
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3 bg-[#0d2232]">
                  <div className="flex items-center justify-between text-xs text-[#ede8de]/60">
                    <span className="text-[#F9AB00] font-semibold">AI Developer & Interdisciplinary Thinker</span>
                    <span className="text-[#38BDF8]">Physics · Math · AI</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-[#ede8de]">
                    Bridging Code, Physics & Rwandan Innovation
                  </h4>
                  <p className="text-xs text-[#ede8de]/75 leading-relaxed">
                    Pierre combines first-principles scientific inquiry with applied machine learning. Grounded in Rwandan cultural values of unity, industriousness, and ingenuity (<em>Ubumwe, Umurava, Ubuhanga</em>), he builds interactive tools that demystify artificial intelligence for everyday users.
                  </p>
                </div>
              </div>

              {/* Cultural Anchor Card */}
              <div className="p-4 rounded-xl bg-[#0d2232] border border-[#0284C7]/30 flex items-center gap-4">
                <div className="h-14 w-14 rounded-lg overflow-hidden shrink-0 border border-[#F9AB00]/30 bg-[#07151e]">
                  <img
                    src="/src/assets/images/imigongo_cultural_motif_1790347944350.jpg"
                    alt="Traditional Rwandan Imigongo Motif"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#F9AB00]">
                    Cultural Geometry & Imigongo
                  </div>
                  <p className="text-xs text-[#ede8de]/70 leading-snug">
                    Rwandan spiral and chevron geometry inspires Pierre’s modular system architectures and clean visual symmetry.
                  </p>
                </div>
              </div>

              {/* Quick Google Site Badge Card */}
              <div className="p-4 rounded-xl bg-[#0d2232] border border-[#F97316]/30 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-[11px] text-[#FB923C] font-semibold uppercase tracking-wider">
                    Verified Portfolio Source
                  </div>
                  <div className="text-xs text-[#ede8de]/80">
                    Grounded in Pierre's live Google Site portfolio & verified projects.
                  </div>
                </div>
                <a
                  href="https://sites.google.com/view/pierre-k-gatwaza-ai-portofolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#07151e] hover:bg-[#102a3d] border border-[#0284C7]/40 text-xs font-semibold text-[#38BDF8] hover:text-[#F9AB00] flex items-center gap-1 shrink-0 transition-colors"
                >
                  <span>Google Site</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Credentials & Certifications View from Google Sites */
          <div className="space-y-8 animate-in fade-in">
            <div className="p-6 rounded-xl bg-[#0d2232] border border-[#0284C7]/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F9AB00]">
                <Award className="h-4 w-4" />
                <span>Academic & Industry Certified Foundation</span>
              </div>
              <p className="text-sm sm:text-base text-[#ede8de]/85 leading-relaxed max-w-3xl">
                Pierre bridges rigorous scientific fundamentals with contemporary generative artificial intelligence. His interdisciplinary toolkit spans mathematical modeling, satellite remote sensing, network engineering, and enterprise AI transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CERTIFICATIONS_AND_DOMAINS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-xl bg-[#0d2232] border border-[#0284C7]/30 hover:border-[#F9AB00]/70 transition-all hover:-translate-y-1 space-y-2.5"
                >
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#FB923C] font-semibold">
                    {cert.field}
                  </div>
                  <h4 className="font-display text-base font-bold text-[#ede8de]">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#ede8de]/70 leading-relaxed">
                    {cert.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

