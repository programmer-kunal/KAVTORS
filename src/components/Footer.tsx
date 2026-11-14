import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { APPS_DATA, BRAND_INFO } from '../data/apps';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkNavy text-slate-300 border-t border-brand-navy relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-royal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-glow-sm bg-brand-navy border border-brand-royal/30">
                <img
                  src="/assets/brand/KAVTORS_Logo.png"
                  alt="KAVTORS Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-wider text-white">
                  KAVTORS
                </span>
                <p className="text-xs text-brand-cyan font-medium tracking-wider uppercase">
                  {BRAND_INFO.tagline}
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering high-performance Android applications with practical AI utilities, Jetpack Compose architectures, and user-centric privacy foundations.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/80 border border-brand-royal/30 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Google Play Developer Account ID: 7594727160353104737</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/apps" className="hover:text-white transition-colors">
                  Our Applications
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About KAVTORS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Ecosystem */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Ecosystem
            </h3>
            <ul className="space-y-3 text-sm">
              {APPS_DATA.map((app) => (
                <li key={app.id}>
                  <Link
                    to={`/apps/${app.id}`}
                    className="hover:text-white flex items-center justify-between group transition-colors"
                  >
                    <span className="truncate pr-2">{app.name.split(':')[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-cyan transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Philosophy Pillars */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Core Pillars
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <strong className="text-slate-200">Innovation:</strong> Next-gen UI
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <strong className="text-slate-200">Practical AI:</strong> Useful intelligence
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <strong className="text-slate-200">Modern Solutions:</strong> Native speed
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                <strong className="text-slate-200">People First:</strong> Privacy by default
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <a
                href="https://github.com/programmer-kunal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub @programmer-kunal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} KAVTORS. All rights reserved. Building Modern Digital Experiences.</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              Designed with precision <Heart className="w-3.5 h-3.5 text-brand-cyan fill-brand-cyan" /> for mobile excellence
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
