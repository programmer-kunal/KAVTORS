import React from 'react';
import { Link } from 'react-router-dom';
import type { AppData } from '../data/apps';
import { StatusBadge } from './StatusBadge';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

interface AppCardProps {
  app: AppData;
  featured?: boolean;
}

export const AppCard: React.FC<AppCardProps> = ({ app, featured = false }) => {
  return (
    <div
      className={`group relative rounded-3xl bg-white border border-slate-200/80 transition-all duration-300 hover:shadow-glass-hover hover:-translate-y-1 overflow-hidden flex flex-col justify-between ${
        featured ? 'ring-2 ring-brand-royal/20 shadow-card' : 'shadow-sm'
      }`}
    >
      {/* Top subtle decorative gradient banner */}
      <div className={`h-2.5 w-full bg-gradient-to-r ${app.gradient}`} />

      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        {/* Header: Icon, Name & Status */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-slate-100 shadow-md transition-transform duration-300 group-hover:scale-105 bg-slate-50">
              <img
                src={app.icon}
                alt={`${app.name} icon`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <StatusBadge status={app.releaseStatus} size="sm" />
        </div>

        {/* Title & Tagline */}
        <div className="mb-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-textNavy group-hover:text-brand-royal transition-colors">
            <Link to={`/apps/${app.id}`}>
              {app.name.split(':')[0]}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-brand-royal font-semibold mt-1">
            {app.name.includes(':') ? app.name.split(':')[1].trim() : app.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-brand-slate leading-relaxed mb-6 line-clamp-3">
          {app.shortDescription}
        </p>

        {/* Highlights / Key Features Pill list */}
        <div className="mb-6 space-y-2 flex-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Key Capabilities
          </p>
          <div className="flex flex-wrap gap-1.5">
            {app.features.slice(0, 3).map((feature) => (
              <span
                key={feature.title}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-lightBlue text-brand-textNavy border border-brand-royal/10"
              >
                <Sparkles className="w-3 h-3 text-brand-electric" />
                <span>{feature.title}</span>
              </span>
            ))}
            {app.features.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                +{app.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Screenshot Sneak Peek Preview */}
        {app.screenshots.length > 0 && (
          <div className="mb-6 pt-4 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Interface Preview
            </p>
            <div className="grid grid-cols-3 gap-2">
              {app.screenshots.slice(0, 3).map((screen, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[9/16] rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-xs group/thumb"
                >
                  <img
                    src={screen.url}
                    alt={screen.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-6 sm:p-8 pt-0 bg-slate-50/50 border-t border-slate-100 mt-auto">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <Link
            to={`/apps/${app.id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-brand-navy text-white hover:bg-brand-royal transition-all duration-200 shadow-sm"
          >
            <span>Explore Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {app.releaseStatus === 'Production' && app.playStoreUrl ? (
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#01875f] hover:bg-[#01704f] transition-colors shadow-sm"
              title="Get it on Google Play"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Google Play</span>
            </a>
          ) : (
            <span
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 cursor-default"
              title="Coming to Google Play after closed testing"
            >
              <span>Coming Soon</span>
            </span>
          )}

          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-600 hover:text-brand-navy hover:bg-slate-200/60 border border-slate-200 transition-colors"
            title="View verified source code on GitHub"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
