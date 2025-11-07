import { SteppeData } from '../types';

export const steppeData: SteppeData = {
  hero: {
    title: "Ancient Steppe Peoples",
    subtitle: "Guardians of the Eurasian Grasslands",
    description: "Discover the remarkable civilizations that thrived across the vast steppes of Eurasia, from nomadic warriors to skilled artisans who shaped the course of human history.",
    backgroundImage: "https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/steppe-landscape-hero.jpg",
    callToAction: {
      text: "Begin Your Journey",
      action: "scroll"
    }
  },
  navigation: [
    { id: 'nav-hero', label: 'Home', href: '#hero' },
    { id: 'nav-peoples', label: 'Peoples', href: '#peoples' },
    { id: 'nav-artifacts', label: 'Artifacts', href: '#artifacts' },
    { id: 'nav-sites', label: 'Sites', href: '#sites' },
    { id: 'nav-timeline', label: 'Timeline', href: '#timeline' },
    { id: 'nav-exchanges', label: 'Cultural Exchange', href: '#exchanges' }
  ],
  peoples: [],
  artifacts: [],
  sites: [],
  culturalExchanges: [],
  timeline: []
};