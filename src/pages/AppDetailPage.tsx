import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { APPS_DATA } from '../data/apps';
import { StatusBadge } from '../components/StatusBadge';
import { DynamicIcon } from '../components/DynamicIcon';
import { ArrowLeft, ExternalLink, CheckCircle2, ChevronRight, X, Sparkles, Shield, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const AppDetailPage: React.FC = () => {
  const { appId } = useParams<{ appId: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const app = APPS_DATA.find((a) => a.id.toLowerCase() === appId?.toLowerCase());

  if (!app) {
    return <Navigate to="/apps" replace />;
  }

  const filteredScreenshots = app.screenshots.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 pt-24 pb-28">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200 py-4 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center space-x-2 text-slate-500">
            <Link to="/" className="hover:text-brand-navy">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/apps" className="hover:text-brand-navy">Our Apps</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-bold text-brand-navy truncate max-w-[200px]">{app.name.split(':')[0]}</span>
          </div>

          <Link
            to="/apps"
            className="inline-flex items-center gap-1.5 text-brand-royal hover:text-brand-navy font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Apps</span>
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            APP HERO HEADER CARD
           ========================================================================= */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-card overflow-hidden">
          <div className={`h-3 w-full bg-gradient-to-r ${app.gradient}`} />
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-5 sm:gap-6">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50 shrink-0">
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <StatusBadge status={app.releaseStatus} />
                  <h1 className="font-display text-2xl sm:text-4xl font-black text-brand-textNavy mt-2">
                    {app.name.split(':')[0]}
                  </h1>
                  <p className="text-sm sm:text-base text-brand-royal font-bold">
                    {app.name.includes(':') ? app.name.split(':')[1].trim() : app.tagline}
                  </p>
                  <div className="text-xs text-slate-400 font-mono mt-1">
                    Package: {app.packageName}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                {app.releaseStatus === 'Production' && app.playStoreUrl ? (
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#01875f] hover:bg-[#01704f] transition-all shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Get on Google Play</span>
                  </a>
                ) : (
                  <div className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-amber-800 bg-amber-50 border border-amber-200">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Closed Testing Track • In Development</span>
                  </div>
                )}

                <a
                  href={app.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-700 hover:text-brand-navy bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Overview Text & Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-display text-lg font-bold text-brand-textNavy">
                  Application Architecture & Overview
                </h3>
                <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                  {app.fullDescription}
                </p>
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Verified Repository Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {app.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-textNavy">
                        <CheckCircle2 className="w-4 h-4 text-brand-royal shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics sidebar */}
              <div className="rounded-2xl bg-brand-lightBlue/40 border border-brand-royal/10 p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-royal">
                  Verified Telemetry & Status
                </h4>
                {app.metrics?.map((metric, idx) => (
                  <div key={idx} className="pb-3 border-b border-brand-royal/10 last:border-b-0 last:pb-0">
                    <div className="text-xs text-brand-slate">{metric.label}</div>
                    <div className="text-sm font-bold text-brand-textNavy mt-0.5">{metric.value}</div>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="text-[11px] text-slate-400">
                    Data verified via Google Play Console & upstream repository commits.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CORE FUNCTIONALITY & ARCHITECTURE
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {app.features.map((feat) => (
            <div
              key={feat.title}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-lightBlue text-brand-royal flex items-center justify-center mb-5 border border-brand-royal/10">
                  <DynamicIcon name={feat.iconName} className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-textNavy mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-brand-slate leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            HOW IT WORKS STEP-BY-STEP
           ========================================================================= */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-card">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-royal/20">
              Workflow Pipeline
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-textNavy mt-3">
              How {app.name.split(':')[0]} Works
            </h2>
            <p className="text-sm sm:text-base text-brand-slate mt-2">
              From user action to native rendering and real-time backend synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {app.howItWorks.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 relative">
                <span className="text-2xl font-black text-brand-royal/40 font-display">
                  {step.step}
                </span>
                <h3 className="font-display text-base font-bold text-brand-textNavy">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE SCREENSHOT GALLERY
           ========================================================================= */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-royal/20">
                Visual Evidence
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-brand-textNavy mt-3">
                Interface Gallery
              </h2>
              <p className="text-xs sm:text-sm text-brand-slate mt-1">
                Click any screenshot to inspect in full resolution.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['all', 'core', 'ai', 'features'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold capitalize transition-colors ${
                    selectedCategory === cat
                      ? 'bg-brand-navy text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Screenshots Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredScreenshots.map((screen, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(screen.url)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs hover:shadow-lg transition-all duration-300 relative aspect-[9/16]"
              >
                <img
                  src={screen.url}
                  alt={screen.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                    Zoom Image
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-[11px] font-semibold text-white text-center leading-tight">
                  {screen.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            TECHNICAL SPECIFICATIONS MATRIX
           ========================================================================= */}
        <div className="rounded-3xl bg-brand-darkNavy text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-royal/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                Technical Specifications
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white mt-3">
                Full-Stack Architecture & Dependencies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Languages & UI Toolkit</span>
                </div>
                <div className="space-y-1.5">
                  {app.techStack.language.concat(app.techStack.ui).map((item) => (
                    <div key={item} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm">
                  <Layers className="w-4 h-4" />
                  <span>Architecture & Local Storage</span>
                </div>
                <div className="space-y-1.5">
                  {app.techStack.architecture.map((item) => (
                    <div key={item} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Cloud Backend & AI Pipelines</span>
                </div>
                <div className="space-y-1.5">
                  {app.techStack.cloudBackend.concat(app.techStack.aiServices || [], app.techStack.integrations || []).map((item) => (
                    <div key={item} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-sm sm:max-w-md max-h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Enlarged screenshot"
              className="w-full h-auto object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
