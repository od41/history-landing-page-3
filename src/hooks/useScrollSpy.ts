import { useState, useEffect, useCallback } from 'react';

interface UseScrollSpyOptions {
  threshold?: number;
  rootMargin?: string;
}

interface UseScrollSpyReturn {
  activeSection: string | null;
  scrollY: number;
  isScrolled: boolean;
}

export const useScrollSpy = (
  sectionIds: string[],
  options: UseScrollSpyOptions = {}
): UseScrollSpyReturn => {
  const { threshold = 0.5, rootMargin = '0px 0px -50% 0px' } = options;
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const updateScrollPosition = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Add scroll listener
    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    updateScrollPosition(); // Initialize scroll position

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [sectionIds, threshold, rootMargin, updateScrollPosition]);

  return { activeSection, scrollY, isScrolled };
};