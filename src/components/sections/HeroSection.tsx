import React from 'react';
import type { HeroContent } from '../../types';

interface HeroSectionProps {
  heroContent: HeroContent;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  heroContent,
  className = ''
}) => {
  const scrollToNext = (): void => {
    const nextSection = document.getElementById('wayoflife');
    if (nextSection) {
      const headerOffset = 80;
      const elementPosition = nextSection.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className={`relative h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${heroContent.backgroundImage}')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-100 leading-tight">
            {heroContent.title}
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-amber-200 leading-relaxed">
            {heroContent.subtitle}
          </h2>
          
          <p className="text-lg sm:text-xl text-amber-100 leading-relaxed max-w-2xl mx-auto">
            {heroContent.description}
          </p>
          
          <div className="pt-8">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-amber-900 bg-amber-200 hover:bg-amber-100 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300"
              aria-label={heroContent.callToAction.text}
            >
              {heroContent.callToAction.text}
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-amber-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};