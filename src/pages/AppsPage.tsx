import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { APPS_DATA } from '../data/apps';
import type { ReleaseStatus } from '../data/apps';
import { StatusBadge } from '../components/StatusBadge';
import { ArrowRight, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export const AppsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | ReleaseStatus>('All');

  const filteredApps = APPS_DATA.filter((app) => {
    if (filter === 'All') return true;
    return app.releaseStatus === filter;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightBlue border border-brand-royal/20 text-xs font-bold text-brand-royal mb-4">
            <Layers className="w-3.5 h-3.5 text-brand-electric" />
            <span>Product Ecosystem</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-textNavy tracking-tight">
            Applications Built for <br />
            <span className="brand-text-gradient">Everyday Human Impact</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            Explore KAVTORS' certified suite of Android products. Each application is crafted with native Jetpack Compose architectures, verified security models, and high-utility AI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-200">
          {(['All', 'Production', 'Closed Testing'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === status
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-brand-slate hover:text-brand-textNavy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {status === 'All' ? 'All Applications (3)' : `${status} (${APPS_DATA.filter(a => a.releaseStatus === status).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Main Apps Showcase List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            id={app.id}
            className="rounded-3xl bg-white border border-slate-200 shadow-card overflow-hidden transition-all duration-300 hover:shadow-glass-hover"
          >
            {/* Header Banner */}
            <div className={`h-3 w-full bg-gradient-to-r ${app.gradient}`} />

            <div className="p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column: App Identity & Description */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Status & Icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 shrink-0">
                      <img
                        src={app.icon}
                        alt={`${app.name} icon`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <StatusBadge status={app.releaseStatus} />
                      <div className="text-xs text-slate-400 mt-2 font-mono">
                        pkg: {app.packageName}
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-textNavy">
                      {app.name.split(':')[0]}
                    </h2>
                    <p className="text-sm sm:text-base text-brand-royal font-bold mt-1">
                      {app.name.includes(':') ? app.name.split(':')[1].trim() : app.tagline}
                    </p>
                  </div>

                  {/* Full Description */}
                  <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                    {app.fullDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Verified Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {app.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-textNavy">
                          <CheckCircle2 className="w-4 h-4 text-brand-royal shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Core Technology
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {app.techStack.language.concat(app.techStack.ui.slice(0, 1), app.techStack.cloudBackend.slice(0, 2)).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <Link
                      to={`/apps/${app.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-brand-navy text-white hover:bg-brand-royal transition-all shadow-md group"
                    >
                      <span>Explore Technical Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {app.releaseStatus === 'Production' && app.playStoreUrl ? (
                      <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-[#01875f] hover:bg-[#01704f] transition-all shadow-md"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Get on Google Play</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200">
                        <span>Closed Testing Track • Launching Soon</span>
                      </div>
                    )}

                    <a
                      href={app.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-brand-navy bg-slate-100 hover:bg-slate-200 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Screenshots Showcase */}
                <div className="lg:col-span-5 bg-slate-100/60 rounded-2xl p-4 sm:p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Verified App Screens ({app.screenshots.length})
                    </h4>
                    <span className="text-[11px] text-brand-royal font-semibold">
                      Authentic Repository Assets
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {app.screenshots.slice(0, 4).map((screen, idx) => (
                      <div
                        key={idx}
                        className="group/item relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs aspect-[9/16]"
                      >
                        <img
                          src={screen.url}
                          alt={screen.caption}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-[11px] font-medium text-white text-center leading-tight">
                          {screen.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
