import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { NavigationItem } from '../types';

interface NavigationHeaderProps {
  navigationItems: NavigationItem[];
  className?: string;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  navigationItems,
  className = ''
}) => {
  const sectionIds = navigationItems.map(item => item.href.replace('#', ''));
  const { activeSection, isScrolled } = useScrollSpy(sectionIds);

  const scrollToSection = (href: string): void => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-amber-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      } ${className}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-amber-100">
              Ancient Steppes
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-amber-200 border-b-2 border-amber-200'
                        : 'text-amber-100 hover:text-amber-200 hover:border-b-2 hover:border-amber-200'
                    }`}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-amber-100 hover:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 p-2"
              aria-label="Open mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};