import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Apps', path: '/apps' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-brand-navy/60 backdrop-blur-md border-b border-white/10 text-white'
          : 'bg-white/95 backdrop-blur-xl border-b border-brand-royal/10 text-brand-textNavy shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-glow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/brand/KAVTORS_Logo.png"
                alt="KAVTORS Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-display text-xl font-extrabold tracking-wider transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-brand-navy'
              }`}>
                KAVTORS
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-medium -mt-1 transition-colors duration-300 ${
                isTransparent ? 'text-brand-cyan' : 'text-brand-royal'
              }`}>
                Digital Systems
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? isTransparent
                        ? 'text-white bg-white/15 shadow-sm'
                        : 'text-brand-royal bg-brand-lightBlue'
                      : isTransparent
                      ? 'text-slate-200 hover:text-white hover:bg-white/10'
                      : 'text-brand-slate hover:text-brand-textNavy hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/apps"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-brand-royal to-brand-electric text-white shadow-md shadow-brand-royal/25 hover:shadow-lg hover:shadow-brand-royal/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
              <span>Explore Apps</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2.5 rounded-xl transition-colors ${
                isTransparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-brand-navy hover:bg-slate-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-6 pt-4 pb-8 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-brand-lightBlue text-brand-royal'
                      : 'text-brand-textNavy hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-royal" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/apps"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-brand-royal to-brand-electric shadow-lg shadow-brand-royal/30"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Explore All Ecosystem Apps</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
