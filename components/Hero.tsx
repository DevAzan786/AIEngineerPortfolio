'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Button } from './ui/Button';

const FloatingAvatar = dynamic(() => import('@/components/3d/FloatingAvatar'), {
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg animate-pulse" />
  ),
  ssr: false,
});

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/AIEngineerResume.pdf';
    link.download = 'Azan_Ali_Resume.pdf';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 md:pt-28 lg:pt-32 section-padding relative overflow-hidden"
    >
      <div className="container-max w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up z-10">
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">Welcome to my portfolio</p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
                Azan Ali
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gradient">
                Artificial Intelligence Engineer
              </h2>
              
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg">
                Crafting intelligent NLP solutions and scalable AI systems. Specialized in LLMs, RAG architectures, and production-grade machine learning.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="primary"
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://github.com/DevAzan786"
                className="p-3 rounded-lg bg-surface hover:bg-surface-light transition-all duration-300 text-text-secondary hover:text-primary" 
                aria-label="GitHub" 
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/malikazan/"
                className="p-3 rounded-lg bg-surface hover:bg-surface-light transition-all duration-300 text-text-secondary hover:text-primary" 
                aria-label="LinkedIn" 
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.643h3.554v1.364c.429-.662 1.196-1.608 2.906-1.608 2.122 0 3.713 1.388 3.713 4.37v5.517zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.954-1.71 1.182 0 1.915.754 1.94 1.71 0 .951-.758 1.71-1.979 1.71zm1.581 11.597H3.635V9.242h3.283v11.21zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a 
                href="mailto:azanaliworks@gmail.com" 
                className="p-3 rounded-lg bg-surface hover:bg-surface-light transition-all duration-300 text-text-secondary hover:text-primary" 
                aria-label="Email" 
                title="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right 3D Visualization */}
          <div className="flex items-center justify-center h-72 sm:h-80 md:h-96 lg:h-[420px] relative mt-10 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-3xl blur-3xl" />
            <div className="w-full max-w-[420px] h-full">
              <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-surface to-surface-light rounded-2xl animate-pulse" />}>
              <FloatingAvatar />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce rounded-full p-3 bg-surface/40 border border-white/10 backdrop-blur-md hover:bg-surface-light/40 hover:border-primary/40 transition-colors"
        aria-label="Scroll to About section"
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}
