'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from './ui/Button';

type NavLink = { label: string; href: `#${string}` };

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<NavLink['href']>('#home');

  const navLinks: NavLink[] = useMemo(
    () => [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Contact', href: '#contact' },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];
        if (!visible?.target?.id) return;
        setActiveHash(`#${visible.target.id}`);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-15% 0px -70% 0px',
      }
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [navLinks]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const handleNav = (href: NavLink['href']) => {
    setMobileMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className={[
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/75 backdrop-blur-md border-b border-border shadow-lg shadow-black/20'
            : 'bg-transparent',
        ].join(' ')}
        aria-label="Primary"
      >
        <div className="container-max px-4 md:px-8 lg:px-12">
          <div className="h-16 md:h-[72px] flex items-center justify-between gap-4">
            {/* Brand */}
            <button
              type="button"
              onClick={() => handleNav('#home')}
              className="group inline-flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-white/5 transition-colors"
              aria-label="Go to Home"
            >
              <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center">
                <span className="text-sm font-bold text-text-primary">AA</span>
              </span>
              <span className="leading-tight text-left hidden sm:block">
                <span className="block text-sm font-semibold text-text-primary group-hover:text-gradient transition-colors">
                  Azan Ali
                </span>
                <span className="block text-xs text-text-tertiary">
                  AI Engineer
                </span>
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-surface/40 backdrop-blur-md px-2 py-1">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className={[
                      'px-3 py-2 text-sm font-medium rounded-full transition-all duration-200',
                      isActive
                        ? 'text-text-primary bg-white/10 border border-white/10 shadow-sm shadow-black/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleNav('#contact')}
                >
                  Contact
                </Button>
              </div>

              <button
                type="button"
                className="lg:hidden p-2 rounded-lg border border-white/10 bg-surface/40 hover:bg-surface-light transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay + panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-background/95 backdrop-blur-md border-l border-border shadow-2xl shadow-black/40 animate-slide-left">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-text-primary">AA</span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-text-primary">
                    Azan Ali
                  </p>
                  <p className="text-xs text-text-tertiary">AI Engineer</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className={[
                      'w-full text-left px-4 py-3 rounded-xl border transition-colors',
                      isActive
                        ? 'bg-white/10 border-white/10 text-text-primary'
                        : 'bg-surface/30 border-white/5 text-text-secondary hover:text-text-primary hover:bg-white/5',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="text-sm font-semibold">{link.label}</span>
                  </button>
                );
              })}

              <div className="pt-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => handleNav('#contact')}
                >
                  Let’s talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
