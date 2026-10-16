import React, { useState } from 'react';
import { Sparkles, Brain, Cpu, Wand2 } from 'lucide-react';
import { SKILL_GROUPS, ALL_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillNotes: Record<string, string> = {
    ChatGPT: 'Advanced prompt architecture, zero-shot and few-shot reasoning, agentic pipeline structuring.',
    Gemini: 'Multimodal processing (text, code, image, video reasoning), high-context window exploration.',
    'Claude AI': 'Nuanced analytical synthesis, artifact generation, rigorous long-form technical reasoning.',
    Canva: 'Rapid visual direction, brand identity asset drafting, high-resolution layout composition.',
    ElevenLabs: 'Hyper-realistic voice synthesis, emotional tone calibration, multilingual audio generation.',
    CapCut: 'High-retention video sequencing, rhythm-matched editorial pacing, visual transition crafting.',
    'Google Flow': 'Complex workflow automation, state machines, and API integration orchestration.',
    NotebookLM: 'Source-grounded research synthesis, cross-document analysis, structured audio overviews.',
    'Perplexity AI': 'Deep empirical web retrieval, citations verification, rapid competitive domain analysis.',
    'Google AI Studio': 'Rapid prototyping, system prompt optimization, structured JSON output fine-tuning.',
  };

  const filteredGroups = activeCategory === 'all'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.group === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#07151e] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
            <span className="text-[#38BDF8]">06</span>
            <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
            <span className="text-[#FB923C]">Core Competencies & Tooling</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
            SKILLS & AI STACK
          </h2>
          <p className="text-sm text-[#ede8de]/70 max-w-2xl">
            A curated arsenal of state-of-the-art AI models, research systems, and generative production software used to build intelligent tools.
          </p>
        </div>

        {/* Verbatim Skills Ribbon (Exact Prompt Format) */}
        <div className="mb-12 p-6 rounded-xl bg-[#0d2232] border border-[#0284C7]/30 shadow-lg">
          <div className="text-xs uppercase tracking-wider text-[#F9AB00] font-bold mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Exact Skill Stack Specification</span>
          </div>
          
          <div className="space-y-2 font-display text-base sm:text-lg md:text-xl text-[#ede8de] font-semibold">
            {/* Group 1 */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>ChatGPT</span>
              <span className="text-[#38BDF8]" aria-hidden="true">·</span>
              <span>Gemini</span>
              <span className="text-[#F9AB00]" aria-hidden="true">·</span>
              <span>Claude AI</span>
              <span className="text-[#FB923C]" aria-hidden="true">·</span>
              <span>Canva</span>
              <span className="text-[#38BDF8]" aria-hidden="true">·</span>
              <span>ElevenLabs</span>
              <span className="text-[#F9AB00]" aria-hidden="true">·</span>
              <span>CapCut</span>
            </div>

            {/* Group 2 */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#ede8de]/90">
              <span>Google Flow</span>
              <span className="text-[#FB923C]" aria-hidden="true">·</span>
              <span>NotebookLM</span>
              <span className="text-[#38BDF8]" aria-hidden="true">·</span>
              <span>Perplexity AI</span>
              <span className="text-[#F9AB00]" aria-hidden="true">·</span>
              <span>Google AI Studio</span>
            </div>
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#F9AB00] via-[#fb923c] to-[#F97316] text-[#07151e] font-bold shadow-sm'
                : 'text-[#ede8de]/70 hover:text-[#38BDF8] bg-[#0d2232] border border-[#0284C7]/30'
            }`}
          >
            All Skills ({ALL_SKILLS.length})
          </button>
          {SKILL_GROUPS.map((g, idx) => {
            const activeGradient = idx === 0 
              ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#07151e]' 
              : idx === 1 
              ? 'bg-gradient-to-r from-[#F97316] to-[#FB923C] text-[#07151e]' 
              : 'bg-gradient-to-r from-[#F9AB00] to-[#ffb71a] text-[#07151e]';

            return (
              <button
                key={g.group}
                onClick={() => setActiveCategory(g.group)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                  activeCategory === g.group
                    ? `${activeGradient} font-bold shadow-sm`
                    : 'text-[#ede8de]/70 hover:text-[#ede8de] bg-[#0d2232] border border-[#0284C7]/30'
                }`}
              >
                {g.group}
              </button>
            );
          })}
        </div>

        {/* Detailed Competency Grid with Yellow, Blue, Orange headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => {
            const groupHeaderColor = idx === 0 ? 'text-[#38BDF8]' : idx === 1 ? 'text-[#FB923C]' : 'text-[#F9AB00]';
            const groupBorderColor = idx === 0 ? 'border-[#0284C7]/30 hover:border-[#38BDF8]/60' : idx === 1 ? 'border-[#F97316]/30 hover:border-[#FB923C]/60' : 'border-[#F9AB00]/30 hover:border-[#F9AB00]/60';

            return (
              <div
                key={group.group}
                className={`p-6 rounded-xl bg-[#0d2232] border ${groupBorderColor} space-y-4 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${groupHeaderColor}`}>
                  <Brain className="h-4 w-4" />
                  <span>{group.group}</span>
                </div>

                <div className="divide-y divide-[#0284C7]/15">
                  {group.skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                      className="w-full text-left py-3 transition-colors hover:text-[#F9AB00] group flex items-start justify-between gap-2 cursor-pointer"
                    >
                      <div>
                        <div className="font-display text-base font-bold text-[#ede8de] group-hover:text-[#F9AB00]">
                          {skill}
                        </div>
                        <div className="text-xs text-[#ede8de]/60 mt-1 leading-relaxed">
                          {skillNotes[skill]}
                        </div>
                      </div>
                      <Wand2 className="h-4 w-4 text-[#0284C7]/50 group-hover:text-[#F9AB00] shrink-0 mt-1 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#0d2232] via-[#0f2a3e] to-[#12283a] border border-[#0284C7]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-display text-base font-bold text-[#ede8de]">
              Algorithmic Fluency + Design Craft
            </h4>
            <p className="text-xs text-[#ede8de]/70">
              Tools are multipliers for creative thought. Pierre integrates these platforms to engineer real-world solutions.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded-md transition-all self-start sm:self-auto whitespace-nowrap shadow-sm"
          >
            Discuss a Project
          </a>
        </div>
      </div>
    </section>
  );
};
