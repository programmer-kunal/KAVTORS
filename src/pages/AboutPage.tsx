import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../data/apps';
import { DynamicIcon } from '../components/DynamicIcon';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart, Terminal, Compass } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-28 pb-24">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-royal/20">
            About The Brand
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-textNavy tracking-tight mt-4">
            Engineered for Utility. <br />
            <span className="brand-text-gradient">Refined by Human Need.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            KAVTORS is a modern digital technology brand founded with a singular focus: to engineer digital products that combine thoughtful native design, modern architectural robustness, and high-utility artificial intelligence.
          </p>
        </div>
      </div>

      {/* Brand Visual Anchor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-brand-navy aspect-[21/9] sm:aspect-[24/9]">
          <img
            src="/assets/brand/KAVTORS_Banner.png"
            alt="KAVTORS Brand Visual"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/30" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-white z-10 max-w-lg">
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              {BRAND_INFO.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Established 2024 • Android Developer Account: {BRAND_INFO.developerAccount.split(' ')[0]}
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-lightBlue/40 border border-brand-royal/15 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-royal text-white flex items-center justify-center font-bold">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-textNavy">
              Our Mission
            </h2>
            <p className="text-base text-brand-slate leading-relaxed">
              To eliminate friction in daily digital communication and information discovery. We believe software should feel immediate, respectful of attention, and technically transparent—empowering users through pragmatic utility rather than artificial lock-in.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-brand-textNavy">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                <span>Eliminate deceptive UI patterns and intrusive ad networks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                <span>Harness AI for authentic contextual assistance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-royal" />
                <span>Build with native performance standards</span>
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6 text-brand-cyan" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-textNavy">
              Our Vision
            </h2>
            <p className="text-base text-brand-slate leading-relaxed">
              To shape a cohesive digital ecosystem where personal communication (K Chat), environmental awareness (WeatherSnap), and cultural discovery (S Finder) interact seamlessly—establishing KAVTORS as a trusted mark of software integrity.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-brand-textNavy">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-navy" />
                <span>Deliver zero-compromise native Android applications</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-navy" />
                <span>Pioneer privacy-preserving crowd reporting networks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-navy" />
                <span>Make semantic multilingual search universally accessible</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values & Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-royal/20">
            Guiding Values
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-textNavy mt-3">
            The Pillars of KAVTORS
          </h2>
          <p className="text-base text-brand-slate mt-2">
            Derived directly from our founding design manifesto and reflected across every application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_INFO.philosophy.map((p, idx) => (
            <div
              key={p.title}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-lightBlue text-brand-royal flex items-center justify-center mb-6 border border-brand-royal/10">
                  <DynamicIcon name={p.iconName} className="w-7 h-7" />
                </div>
                <div className="text-xs font-bold text-slate-400 mb-1">PILLAR 0{idx + 1}</div>
                <h3 className="font-display text-xl font-bold text-brand-textNavy mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-brand-slate leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Innovation Philosophy & People First Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="rounded-3xl bg-gradient-to-br from-brand-darkNavy to-brand-navy p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                Philosophy in Practice
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
                People First, Always.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When designing digital products, our engineering team asks a single question first: does this respect the person using it? We deliberately reject addictive engagement loops, intrusive popups, and non-transparent background data harvesting.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Honest Software:</strong> No artificial subscriptions or forced logins for basic utilities.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Protective AI:</strong> Features like Scam Guard in K Chat exist purely to protect users from deception.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Terminal className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Transparent Architecture:</strong> Open repositories allowing anyone to audit implementations and verify security claims.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
              <h3 className="font-display text-xl font-bold text-white">
                Verified Development Credentials
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All software releases are strictly managed through our verified Google Play Console developer profile.
              </p>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-400">Developer Account</span>
                  <span className="font-bold text-white">KAVTORS</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-400">Play Console Account ID</span>
                  <span className="font-mono text-brand-cyan">7594727160353104737</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-400">Published Applications</span>
                  <span className="font-bold text-white">3 Verified Ecosystem Apps</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Open Repositories</span>
                  <span className="font-bold text-white">Public Source Code on GitHub</span>
                </div>
              </div>

              <Link
                to="/apps"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-brand-navy bg-white hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>View Certified Ecosystem</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
