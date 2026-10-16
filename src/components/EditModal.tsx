import React, { useState, useEffect } from 'react';
import { X, Save, RotateCcw, LogOut } from 'lucide-react';
import { PortfolioSettings, AIApp, AIProject } from '../types';
import { DEFAULT_SETTINGS } from '../data/portfolioData';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: PortfolioSettings;
  onSave: (updated: PortfolioSettings) => void;
  targetAppId?: string;
  targetProjectId?: string;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
  targetAppId,
  targetProjectId,
}) => {
  const [formData, setFormData] = useState<PortfolioSettings>(settings);
  const [activeTab, setActiveTab] = useState<'contact' | 'apps' | 'projects'>(
    targetAppId ? 'apps' : targetProjectId ? 'projects' : 'contact'
  );

  // Sync state if settings change
  useEffect(() => {
    setFormData(settings);
    if (targetAppId) setActiveTab('apps');
    else if (targetProjectId) setActiveTab('projects');
  }, [settings, targetAppId, targetProjectId, isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleAppChange = (index: number, field: keyof AIApp, value: string) => {
    const updatedApps = [...formData.apps];
    updatedApps[index] = { ...updatedApps[index], [field]: value };
    setFormData({ ...formData, apps: updatedApps });
  };

  const handleProjectChange = (index: number, field: keyof AIProject, value: string) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    if (window.confirm('Reset all values back to the original prompt placeholders?')) {
      setFormData(DEFAULT_SETTINGS);
      onSave(DEFAULT_SETTINGS);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07151e]/90 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#0284C7]/40 bg-[#0d2232] p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#0284C7]/20">
          <div>
            <h2 className="font-display text-xl font-bold text-[#ede8de]">
              Configure Portfolio Placeholders
            </h2>
            <p className="text-xs text-[#ede8de]/60">
              Customize your real App names, URLs, Google Drive links, and WhatsApp number.
            </p>
          </div>
          <button
            onClick={onClose}
            title="Exit configuration (Esc)"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded-md transition-all cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Exit</span>
          </button>
        </div>

        {/* Tab Controls with Yellow, Blue, Orange */}
        <div className="flex items-center gap-2 border-b border-[#0284C7]/20 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#07151e] shadow-sm'
                : 'text-[#ede8de]/70 hover:text-[#38BDF8]'
            }`}
          >
            Contact & Bio
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('apps')}
            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
              activeTab === 'apps'
                ? 'bg-gradient-to-r from-[#F9AB00] to-[#ffb71a] text-[#07151e] shadow-sm'
                : 'text-[#ede8de]/70 hover:text-[#F9AB00]'
            }`}
          >
            AI Apps ({formData.apps.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-[#F97316] to-[#FB923C] text-[#07151e] shadow-sm'
                : 'text-[#ede8de]/70 hover:text-[#FB923C]'
            }`}
          >
            AI Projects & Research ({formData.projects.length})
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tab 1: Contact */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#ede8de]/80">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#ede8de]/80">Tagline</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#ede8de]/80">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#ede8de]/80">
                    MTN Telephone (e.g. 0782207515 (MTN))
                  </label>
                  <input
                    type="text"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#ede8de]/80">
                    WhatsApp Number (e.g. +250782207515)
                  </label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Apps */}
          {activeTab === 'apps' && (
            <div className="space-y-6">
              {formData.apps.map((app, idx) => (
                <div key={app.id} className="p-4 rounded-lg bg-[#07151e] border border-[#0284C7]/30 space-y-3">
                  <div className="text-xs font-bold text-[#F9AB00] uppercase">
                    App {idx + 1} Configuration
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-[#ede8de]/70">Name</label>
                    <input
                      type="text"
                      value={app.name}
                      onChange={(e) => handleAppChange(idx, 'name', e.target.value)}
                      className="w-full px-3 py-1.5 rounded bg-[#0d2232] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-[#ede8de]/70">Description</label>
                    <textarea
                      rows={2}
                      value={app.description}
                      onChange={(e) => handleAppChange(idx, 'description', e.target.value)}
                      className="w-full px-3 py-1.5 rounded bg-[#0d2232] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-[#ede8de]/70">URL</label>
                    <input
                      type="text"
                      value={app.url}
                      onChange={(e) => handleAppChange(idx, 'url', e.target.value)}
                      className="w-full px-3 py-1.5 rounded bg-[#0d2232] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {formData.projects.map((proj, idx) => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#07151e] border border-[#0284C7]/30 space-y-3">
                  <div className="text-xs font-bold text-[#FB923C] uppercase">
                    Project {idx + 1} Configuration
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-[#ede8de]/70">Title</label>
                    <input
                      type="text"
                      value={proj.title}
                      onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                      className="w-full px-3 py-1.5 rounded bg-[#0d2232] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-[#ede8de]/70">Description</label>
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => handleProjectChange(idx, 'description', e.target.value)}
                      className="w-full px-3 py-1.5 rounded bg-[#0d2232] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-[#ede8de]/70">Google Drive Link</label>
                    <input
                      type="text"
                      value={proj.driveLink}
                      onChange={(e) => handleProjectChange(idx, 'driveLink', e.target.value)}
                      className="w-full px-3 py-1.5 rounded bg-[#0d2232] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Controls */}
          <div className="pt-4 border-t border-[#0284C7]/20 flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 text-xs text-[#ede8de]/60 hover:text-rose-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-red-900/80 hover:bg-red-800 border border-red-500/40 rounded-md transition-colors cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Exit</span>
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded-md transition-all shadow-sm cursor-pointer"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
