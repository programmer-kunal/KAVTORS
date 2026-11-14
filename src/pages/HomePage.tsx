import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Zap, ChevronRight, Terminal } from 'lucide-react';
import { APPS_DATA, BRAND_INFO } from '../data/apps';
import { AppCard } from '../components/AppCard';
import { DynamicIcon } from '../components/DynamicIcon';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================================
          HERO SECTION (Inspired by KAVTORS Banner: Blue Mountains, Lake, Orbit)
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-darkNavy text-white pt-24 pb-20">
        {/* Background Banner with Opacity and Gradient Masks */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/brand/KAVTORS_Banner.png"
            alt="KAVTORS Brand Banner Background"
            className="w-full h-full object-cover object-center opacity-45 scale-105 transform motion-safe:animate-pulse-slow"
          />
          {/* Multi-layer atmospheric gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darkNavy via-brand-navy/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-darkNavy/80 via-transparent to-brand-darkNavy/80" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-royal/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[300px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-brand-cyan mb-8 shadow-glow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
            <span>Official Technology Brand & Digital Ecosystem</span>
          </div>

          {/* Main Title & Tagline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6">
            KAVTORS
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-cyan max-w-3xl mx-auto mb-6">
            Building Modern Digital Experiences
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Engineering intelligent mobile applications with high-utility AI, native Jetpack Compose architectures, and private, human-centric design.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/apps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-brand-royal via-brand-electric to-brand-cyan text-white shadow-lg shadow-brand-royal/40 hover:shadow-brand-royal/60 hover:scale-105 active:scale-95 transition-all duration-200 group"
            >
              <span>Explore Our Apps</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <span>About KAVTORS</span>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </Link>
          </div>

          {/* Four Pillars Pills matching the Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-white/10">
            {BRAND_INFO.philosophy.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-cyan/40 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-royal/30 flex items-center justify-center text-brand-cyan mb-2 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={pillar.iconName} className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-white tracking-wide">
                  {pillar.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom subtle wave/fade separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* =========================================================================
          1. BRAND INTRODUCTION & PHILOSOPHY
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-royal/20">
              Brand Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-textNavy mt-4 mb-6">
              Purpose-Driven Software. <br />
              <span className="brand-text-gradient">Zero Compromise on Polish.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
              At KAVTORS, we believe technology should empower everyday living without unnecessary complexity. Each application in our ecosystem is conceived to solve authentic human friction through modern software craft.
            </p>
          </div>

          {/* Philosophy Detail Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BRAND_INFO.philosophy.map((item, index) => (
              <div
                key={item.title}
                className="relative p-8 rounded-3xl bg-brand-lightBlue/40 border border-brand-royal/10 hover:border-brand-royal/30 hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-brand-royal/15 flex items-center justify-center text-brand-royal mb-6 group-hover:scale-105 group-hover:bg-brand-royal group-hover:text-white transition-all duration-300">
                    <DynamicIcon name={item.iconName} className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-brand-royal/60 mb-1">0{index + 1}</div>
                  <h3 className="font-display text-xl font-bold text-brand-textNavy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-slate leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED APPLICATION ECOSYSTEM
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-lightBlue/50 via-white to-brand-lightBlue/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-white px-3.5 py-1.5 rounded-full border border-brand-royal/20 shadow-xs">
                Digital Ecosystem
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-brand-textNavy mt-4">
                Three Distinct Products. <br />
                <span className="brand-text-gradient">One Unified Standard.</span>
              </h2>
            </div>
            <Link
              to="/apps"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-royal hover:text-brand-electric group"
            >
              <span>Explore Technical Specifications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {APPS_DATA.map((app) => (
              <AppCard key={app.id} app={app} featured={app.id === 'kchat'} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY KAVTORS? (Engineering Excellence & Practical AI)
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Showcase */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-brand-navy p-8 sm:p-10 text-white">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-royal/25 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-cyan text-xs font-bold border border-white/10">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Android Architecture Standard</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Modern Stacks Designed for Native Performance
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    We eliminate bloated hybrid abstractions. Every KAVTORS application is written natively in Kotlin with Jetpack Compose, paired with serverless edge infrastructure like Cloudflare Workers and Firebase AI logic for real-time reactivity.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-black text-brand-cyan mb-1">100%</div>
                      <div className="text-xs text-slate-300 font-medium">Jetpack Compose UI Framework</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-2xl font-black text-brand-cyan mb-1">&lt;50ms</div>
                      <div className="text-xs text-slate-300 font-medium">Serverless Edge Query Latency</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Kotlin Coroutines', 'Cloudflare D1 FTS5', 'Google Gemini AI', 'Supabase Realtime', 'ZEGOCLOUD Calling', 'Room DB Offline'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 text-slate-300 border border-white/5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Values */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-brand-lightBlue px-3.5 py-1.5 rounded-full border border-brand-royal/20">
                  Engineering Principles
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-textNavy mt-4 mb-4">
                  Why KAVTORS Products Feel Different
                </h2>
                <p className="text-base text-brand-slate leading-relaxed">
                  Most modern apps are overwhelmed by ads, telemetry tracking, and superficial gimmicks. KAVTORS crafts tools with purposeful restraint.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lightBlue text-brand-royal flex items-center justify-center shrink-0 border border-brand-royal/15">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-textNavy mb-1">
                      Native Performance First
                    </h4>
                    <p className="text-sm text-brand-slate leading-relaxed">
                      Zero webviews disguised as native apps. Smooth 120Hz scrolling, predictable memory footprints, and instant cold launches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lightBlue text-brand-royal flex items-center justify-center shrink-0 border border-brand-royal/15">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-textNavy mb-1">
                      Privacy & Data Respect
                    </h4>
                    <p className="text-sm text-brand-slate leading-relaxed">
                      From anonymous reporting in WeatherSnap to scam threat heuristics and local encrypted Room storage in K Chat, we protect user sovereignty.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lightBlue text-brand-royal flex items-center justify-center shrink-0 border border-brand-royal/15">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-textNavy mb-1">
                      Contextual AI, Not Chatbot Gimmicks
                    </h4>
                    <p className="text-sm text-brand-slate leading-relaxed">
                      AI is integrated directly into user workflows—summarizing high-volume threads, normalizing bilingual search, and scoring semantic plot matches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. DEVELOPMENT & RELEASE PIPELINE
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-cyan bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              Production Lifecycle
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4">
              Disciplined Android Engineering
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every release is verified against strict Google Play developer policies, automated test suites, and staged closed testing tracks before production distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-xs font-bold text-brand-cyan mb-2">PHASE 01</div>
              <h3 className="text-xl font-bold text-white mb-2">Architecture & Prototyping</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Strict separation of concerns using Clean Architecture, ViewModel state machines, and immutable UI states with Kotlin StateFlow.
              </p>
              <div className="text-xs text-brand-cyan/80 font-medium">Jetpack Compose • MVVM • Room DB</div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-xs font-bold text-brand-cyan mb-2">PHASE 02</div>
              <h3 className="text-xl font-bold text-white mb-2">Closed Testing & Verification</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Staged rollout across targeted testing cohorts to gather real-world telemetry, device compatibility feedback, and backend edge latency.
              </p>
              <div className="text-xs text-brand-cyan/80 font-medium">Play Console Tracks • Multi-device validation</div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-xs font-bold text-brand-cyan mb-2">PHASE 03</div>
              <h3 className="text-xl font-bold text-white mb-2">Global Production Release</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Verified public builds available on the Google Play Store with continuous performance monitoring, zero crashes, and iterative upgrades.
              </p>
              <div className="text-xs text-brand-cyan/80 font-medium">Signed AABs • Google Play Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FINAL CALL TO ACTION
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-navy via-brand-deepBlue to-brand-royal p-8 sm:p-14 text-center text-white shadow-2xl">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mx-auto flex items-center justify-center border border-white/20 shadow-md">
                <img
                  src="/assets/brand/KAVTORS_Logo.png"
                  alt="KAVTORS"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white">
                Experience KAVTORS Today
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Download our production apps on Google Play or explore our product roadmaps to preview the next generation of mobile digital tools.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  to="/apps"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-white text-brand-navy hover:bg-brand-lightBlue hover:shadow-lg transition-all"
                >
                  <span>Explore All 3 Applications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
