import React, { useState, useEffect } from 'react';
import { BookOpen, Presentation, Video, ExternalLink, Edit3, ArrowUpRight, FileText, Sparkles, LogOut } from 'lucide-react';
import { AIProject } from '../types';

interface AIProjectsProps {
  projects: AIProject[];
  onEditProject: (project: AIProject) => void;
}

export const AIProjects: React.FC<AIProjectsProps> = ({ projects, onEditProject }) => {
  const [selectedProject, setSelectedProject] = useState<AIProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedProject]);

  const getLinkIcon = (type?: string) => {
    switch (type) {
      case 'notebooklm':
        return <BookOpen className="h-3.5 w-3.5 text-[#F9AB00]" />;
      case 'presentation':
        return <Presentation className="h-3.5 w-3.5 text-[#F9AB00]" />;
      case 'video':
        return <Video className="h-3.5 w-3.5 text-[#F9AB00]" />;
      default:
        return <FileText className="h-3.5 w-3.5 text-[#F9AB00]" />;
    }
  };

  const getLinkActionText = (type?: string) => {
    switch (type) {
      case 'notebooklm':
        return 'Open NotebookLM';
      case 'presentation':
        return 'View Slides';
      case 'video':
        return 'Watch Video';
      default:
        return 'Access File';
    }
  };

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 bg-[#0a1c28] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
              <span className="text-[#38BDF8]">03</span>
              <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
              <span className="text-[#FB923C]">Research, Synthesis & Artifacts</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
              MY AI PROJECTS
            </h2>
            <p className="text-sm text-[#ede8de]/70 max-w-2xl">
              Research synthesis, agritech satellite studies, and multimedia production pipelines grounded in NotebookLM, Google Slides, and generative workflows.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#ede8de]/80 bg-[#0d2232] px-3.5 py-2 rounded-lg border border-[#0284C7]/30 shadow-xs">
            <BookOpen className="h-4 w-4 text-[#F9AB00]" />
            <span className="font-semibold text-[#F9AB00]">{projects.length} Artifacts</span>
            <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
            <span className="text-[#38BDF8]">NotebookLM & Google Drive</span>
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
            All Projects & Research ({projects.length})
          </button>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveCategory(p.category)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeCategory === p.category
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#07151e] font-bold shadow-sm'
                  : 'text-[#ede8de]/70 hover:text-[#ede8de] bg-[#0d2232] border border-[#0284C7]/30'
              }`}
            >
              {p.category.split('&')[0]}
            </button>
          ))}
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              className="group relative rounded-xl border border-[#0284C7]/30 bg-[#0d2232] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#F9AB00]/70 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(249,171,0,0.2)]"
            >
              {/* Top Accent Ribbon: Orange -> Yellow -> Blue */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#F97316] via-[#F9AB00] to-[#0284C7]" />

              {/* Card Header & Content */}
              <div className="p-6 sm:p-7 space-y-4 flex-1">
                <div className="flex items-center justify-between text-xs text-[#ede8de]/60">
                  <span className="font-mono text-[#F9AB00] font-bold">0{idx + 1}</span>
                  <span className="flex items-center gap-1.5 text-[#38BDF8] font-semibold">
                    {getLinkIcon(proj.linkType)}
                    <span className="capitalize">{proj.linkType || 'Project File'}</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#ede8de] group-hover:text-[#F9AB00] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  {proj.subtitle && (
                    <p className="text-xs font-medium text-[#FB923C] mt-1">
                      {proj.subtitle}
                    </p>
                  )}
                  <div className="mt-2 text-xs text-[#38BDF8]/60 font-mono truncate">
                    {proj.driveLink}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#ede8de]/80 leading-relaxed">
                  {proj.description}
                </p>

                {/* Unboxed Metadata Technologies */}
                <div className="pt-3 border-t border-[#0284C7]/20 space-y-1.5">
                  <div className="text-[11px] uppercase tracking-wider text-[#ede8de]/50 font-semibold">
                    Toolkit & Methods
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#ede8de]/80">
                    {proj.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-[#F9AB00] font-medium">{tech}</span>
                        {i < proj.technologies.length - 1 && (
                          <span className="text-[#ede8de]/30" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 bg-[#081926] border-t border-[#0284C7]/20 flex items-center justify-between gap-2">
                <button
                  onClick={() => onEditProject(proj)}
                  className="flex items-center gap-1 text-xs text-[#FB923C] hover:text-[#F9AB00] p-1 transition-colors"
                  title="Configure project details"
                >
                  <Edit3 className="h-3.5 w-3.5 text-[#F9AB00]" />
                  <span>Config</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="px-3 py-1.5 text-xs font-semibold text-[#38BDF8] hover:text-white bg-[#0284C7]/20 hover:bg-[#0284C7]/40 border border-[#0284C7]/40 rounded transition-colors"
                  >
                    Details
                  </button>
                  <a
                    href={proj.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded transition-all shadow-sm"
                  >
                    <span>{getLinkActionText(proj.linkType)}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07151e]/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-xl border border-[#0284C7]/40 bg-[#0d2232] p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#0284C7]/20">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F9AB00] flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" />
                <span>Project Artifact Overview</span>
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                title="Exit project overview (Esc)"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded-md transition-all cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Exit</span>
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#ede8de]">
                {selectedProject.title}
              </h3>
              {selectedProject.subtitle && (
                <p className="text-xs font-medium text-[#FB923C]">
                  {selectedProject.subtitle}
                </p>
              )}
              <p className="text-sm text-[#ede8de]/85 leading-relaxed pt-1">
                {selectedProject.description}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#07151e] border border-[#0284C7]/30 space-y-1.5">
              <div className="text-xs font-mono text-[#ede8de]/60">Documented Resource Link:</div>
              <a
                href={selectedProject.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#F9AB00] hover:underline flex items-center gap-1.5 break-all"
              >
                <span>{selectedProject.driveLink}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-[#ede8de]/60 uppercase tracking-wider">
                Integrated Frameworks:
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-[#ede8de]">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-[#07151e] border border-[#0284C7]/40 text-[#38BDF8]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#0284C7]/20 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onEditProject(selectedProject);
                }}
                className="px-4 py-2 text-xs font-medium text-[#38BDF8] border border-[#0284C7]/40 rounded-md hover:bg-[#0284C7]/20 transition-colors"
              >
                Edit Details
              </button>
              
              <div className="flex items-center gap-2">
                <a
                  href={selectedProject.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] rounded-md hover:from-[#ffb71a] hover:to-[#ea580c] transition-all shadow-sm"
                >
                  <span>{getLinkActionText(selectedProject.linkType)}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  title="Exit project overview"
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded-md transition-colors"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Exit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

