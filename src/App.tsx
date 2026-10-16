import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AIApps } from './components/AIApps';
import { AIProjects } from './components/AIProjects';
import { AIAds } from './components/AIAds';
import { AIVideos } from './components/AIVideos';
import { Skills } from './components/Skills';
import { CulturalElement } from './components/CulturalElement';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditModal } from './components/EditModal';
import { ScrollToTop } from './components/ScrollToTop';
import {
  PortfolioSettings,
  AIApp,
  AIProject,
} from './types';
import {
  loadPortfolioSettings,
  savePortfolioSettings,
} from './data/portfolioData';

import type { Variants } from 'framer-motion';

// Framer Motion reveal configuration for smooth fade and slide-in
const sectionRevealVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={sectionRevealVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [settings, setSettings] = useState<PortfolioSettings>(() => loadPortfolioSettings());
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [targetAppId, setTargetAppId] = useState<string | undefined>(undefined);
  const [targetProjectId, setTargetProjectId] = useState<string | undefined>(undefined);

  const handleSaveSettings = (updated: PortfolioSettings) => {
    setSettings(updated);
    savePortfolioSettings(updated);
  };

  const handleEditApp = (app: AIApp) => {
    setTargetAppId(app.id);
    setTargetProjectId(undefined);
    setIsEditModalOpen(true);
  };

  const handleEditProject = (project: AIProject) => {
    setTargetProjectId(project.id);
    setTargetAppId(undefined);
    setIsEditModalOpen(true);
  };

  const handleOpenGeneralSettings = () => {
    setTargetAppId(undefined);
    setTargetProjectId(undefined);
    setIsEditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07151e] text-[#ede8de] flex flex-col selection:bg-[#F9AB00] selection:text-[#07151e]">
      {/* Subtle Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* 3-Zone Top Navigation */}
      <Navbar onOpenSettings={handleOpenGeneralSettings} />

      {/* Main Content Sections with Framer Motion Reveal */}
      <main className="flex-1">
        {/* HERO with Kinyarwanda greeting & Editorial Portrait */}
        <SectionReveal>
          <Hero settings={settings} />
        </SectionReveal>

        {/* ABOUT ME verbatim statement & 6 pillars */}
        <SectionReveal>
          <About />
        </SectionReveal>

        {/* MY AI APPS */}
        <SectionReveal>
          <AIApps apps={settings.apps} onEditApp={handleEditApp} />
        </SectionReveal>

        {/* MY AI PROJECTS */}
        <SectionReveal>
          <AIProjects projects={settings.projects} onEditProject={handleEditProject} />
        </SectionReveal>

        {/* AI AD CAMPAIGNS */}
        <SectionReveal>
          <AIAds ads={settings.ads || []} />
        </SectionReveal>

        {/* AI VIDEO PRODUCTIONS */}
        <SectionReveal>
          <AIVideos videos={settings.videos || []} />
        </SectionReveal>

        {/* SKILLS & AI Stack */}
        <SectionReveal>
          <Skills />
        </SectionReveal>

        {/* RWANDAN CULTURAL ELEMENT: Imigongo Geometry & Values */}
        <SectionReveal>
          <CulturalElement />
        </SectionReveal>

        {/* CONTACT: Email & WhatsApp */}
        <SectionReveal>
          <Contact settings={settings} onOpenSettings={handleOpenGeneralSettings} />
        </SectionReveal>
      </main>

      {/* FOOTER */}
      <Footer onOpenSettings={handleOpenGeneralSettings} />

      {/* Placeholders Configurator Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
        targetAppId={targetAppId}
        targetProjectId={targetProjectId}
      />
      {/* Floating Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
}
