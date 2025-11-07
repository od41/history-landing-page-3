// TypeScript interfaces for Ancient Steppe Peoples data structures

export interface SteppePeople {
  id: string;
  name: string;
  timeRange: string;
  location: string;
  description: string;
  keyCharacteristics: string[];
  culturalContributions: string[];
  imageUrl: string;
}

export interface Artifact {
  id: string;
  name: string;
  type: 'weapon' | 'jewelry' | 'tool' | 'pottery' | 'harness' | 'ceremonial';
  culture: string;
  timeRange: string;
  description: string;
  significance: string;
  imageUrl: string;
}

export interface ArchaeologicalSite {
  id: string;
  name: string;
  type: 'kurgan' | 'settlement' | 'burial_ground' | 'petroglyphs';
  location: string;
  timeRange: string;
  description: string;
  discoveries: string[];
  significance: string;
  imageUrl: string;
}

export interface CulturalExchange {
  id: string;
  route: string;
  cultures: string[];
  timeRange: string;
  tradedGoods: string[];
  culturalInfluences: string[];
  description: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  callToAction: {
    text: string;
    action: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface WayOfLifeTab {
  id: string;
  title: string;
  description: string;
  content: string[];
  imageUrl: string;
  icon: string;
}

export interface CulturalInnovation {
  id: string;
  title: string;
  shortDescription: string;
  detailedContent: {
    overview: string;
    techniques: string[];
    significance: string;
    timeline: string;
  };
  imageUrl: string;
  icon: string;
}

export interface SteppeData {
  hero: HeroContent;
  navigation: NavigationItem[];
  peoples: SteppePeople[];
  artifacts: Artifact[];
  sites: ArchaeologicalSite[];
  culturalExchanges: CulturalExchange[];
  timeline: TimelineEvent[];
  wayOfLife: WayOfLifeTab[];
  culturalInnovations: CulturalInnovation[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  culture: string;
  significance: 'major' | 'moderate' | 'minor';
}

export interface SectionConfig {
  id: string;
  title: string;
  description: string;
  isVisible: boolean;
  order: number;
}