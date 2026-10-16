import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, Send, ArrowUpRight, Phone, ExternalLink } from 'lucide-react';
import { PortfolioSettings } from '../types';

interface ContactProps {
  settings: PortfolioSettings;
  onOpenSettings: () => void;
}

export const Contact: React.FC<ContactProps> = ({ settings, onOpenSettings }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(settings.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(settings.phone || '0782207515');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${settings.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding Creative AI collaboration'
    )}&body=${encodeURIComponent(
      `From: ${senderName || 'A collaborator'}\n\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  const handleWhatsAppClick = () => {
    const rawNumber = settings.whatsapp || '+250782207515';
    const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      `Muraho Pierre! I saw your portfolio and would love to discuss a project or collaboration.`
    )}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07151e] border-t border-[#0284C7]/20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F9AB00]">
            <span className="text-[#38BDF8]">08</span>
            <span aria-hidden="true" className="text-[#ede8de]/40">·</span>
            <span className="text-[#FB923C]">Direct Communication & Network</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ede8de]">
            CONTACT PIERRE
          </h2>
          <p className="text-sm text-[#ede8de]/70 max-w-xl">
            Have a difficult problem that needs a simple, intelligent, and beautiful technological solution? Reach out directly via email, phone, or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card (Blue Accent) */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#0d2232] border border-[#0284C7]/40 shadow-lg space-y-4">
              <div className="flex items-center justify-between text-xs text-[#ede8de]/60">
                <span className="flex items-center gap-2 font-semibold text-[#38BDF8]">
                  <Mail className="h-4 w-4" />
                  <span>Primary Channel</span>
                </span>
                <span className="text-[#ede8de]/50 font-mono">Direct Inbox</span>
              </div>

              <div>
                <div className="text-xs text-[#ede8de]/50 font-mono mb-1">Email:</div>
                <a
                  href={`mailto:${settings.email}`}
                  className="font-display text-xl sm:text-2xl font-bold text-[#ede8de] hover:text-[#38BDF8] transition-colors break-all"
                >
                  {settings.email}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold rounded-md border border-[#0284C7]/40 hover:bg-[#0284C7]/20 text-[#ede8de] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#F9AB00]" />
                      <span className="text-[#F9AB00]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#38BDF8]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${settings.email}`}
                  className="py-2.5 px-4 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#0284C7] to-[#38BDF8] hover:from-[#0284c7] hover:to-[#7dd3fc] rounded-md transition-all flex items-center gap-1 shadow-sm"
                >
                  <span>Compose</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* WhatsApp & Telephone Card (Orange Accent) */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#0d2232] border border-[#F97316]/40 shadow-lg space-y-4">
              <div className="flex items-center justify-between text-xs text-[#ede8de]/60">
                <span className="flex items-center gap-2 font-semibold text-[#FB923C]">
                  <MessageCircle className="h-4 w-4" />
                  <span>Instant Messaging & Call</span>
                </span>
                <span className="text-[#ede8de]/50 font-mono">MTN Rwanda</span>
              </div>

              <div>
                <div className="text-xs text-[#ede8de]/50 font-mono mb-1">Telephone & WhatsApp:</div>
                <div className="font-display text-xl sm:text-2xl font-bold text-[#ede8de] flex items-center gap-2">
                  <span>{settings.phone || '0782207515 (MTN)'}</span>
                </div>
                <div className="text-xs text-[#ede8de]/60 mt-1">
                  International format: <span className="font-mono text-[#FB923C]">{settings.whatsapp || '+250782207515'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyPhone}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold rounded-md border border-[#F97316]/40 hover:bg-[#F97316]/20 text-[#ede8de] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#F9AB00]" />
                      <span className="text-[#F9AB00]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-[#FB923C]" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppClick}
                  className="py-2.5 px-4 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#ea580c] hover:to-[#f97316] rounded-md transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Google Site Reference & Location */}
            <div className="p-5 rounded-xl bg-[#0d2232] border border-[#0284C7]/30 space-y-3 text-xs text-[#ede8de]/80">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F9AB00]" />
                  <span>Based in Kigali, Rwanda (UTC+2)</span>
                </div>
                <span className="text-[#F9AB00] font-semibold">Fast Response</span>
              </div>
              <div className="pt-2 border-t border-[#0284C7]/20 flex items-center justify-between">
                <span className="text-[#ede8de]/60">Original Google Site:</span>
                <a
                  href={settings.googleSiteUrl || 'https://sites.google.com/view/pierre-k-gatwaza-ai-portofolio/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38BDF8] hover:text-[#F9AB00] hover:underline flex items-center gap-1 transition-colors"
                >
                  <span>sites.google.com/...</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Note Composer */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-xl bg-[#0d2232] border border-[#0284C7]/30 shadow-xl space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-[#ede8de]">
                  Draft a Direct Message
                </h3>
                <p className="text-xs text-[#ede8de]/60 mt-1">
                  Compose your inquiry below; clicking 'Send Message' will open your default email client addressed to <strong className="text-[#F9AB00]">{settings.email}</strong>.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#ede8de]/70 uppercase tracking-wider">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Marie Claire / Tech Studio"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#ede8de]/70 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Collaboration on AI Web App Architecture"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#ede8de]/70 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your vision, timeline, or questions..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#07151e] border border-[#0284C7]/40 text-sm text-[#ede8de] focus:border-[#F9AB00] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded bg-[#07151e] border border-[#F9AB00]/50 text-xs text-[#F9AB00] flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    <span>Email client opened! Thank you for reaching out.</span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#ede8de]/50 font-mono">
                    Direct routing to pkaligirgt@gmail.com
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 text-xs font-bold text-[#07151e] bg-gradient-to-r from-[#F9AB00] via-[#fb923c] to-[#F97316] hover:from-[#ffb71a] hover:to-[#ea580c] rounded-lg transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

