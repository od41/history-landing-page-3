import type { SteppeData } from '../types';

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
    { id: 'nav-wayoflife', label: 'Way of Life', href: '#wayoflife' },
    { id: 'nav-innovations', label: 'Innovations', href: '#innovations' },
    { id: 'nav-artifacts', label: 'Artifacts', href: '#artifacts' },
    { id: 'nav-sites', label: 'Sites', href: '#sites' },
    { id: 'nav-timeline', label: 'Timeline', href: '#timeline' },
    { id: 'nav-exchanges', label: 'Cultural Exchange', href: '#exchanges' },
    { id: 'nav-legacy', label: 'Modern Legacy', href: '#legacy' }
  ],
  wayOfLife: [
    {
      id: 'migration',
      title: 'Migration Patterns',
      description: 'Seasonal movements across vast grasslands following herds and weather patterns',
      content: [
        'Followed seasonal grazing patterns across hundreds of miles',
        'Moved herds between summer and winter pastures',
        'Established temporary camps at water sources and strategic locations',
        'Used traditional routes passed down through generations',
        'Coordinated movements with other tribal groups to avoid conflicts',
        'Adapted migration timing based on weather and grass conditions'
      ],
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/eurasian-influence-map.jpg',
      icon: '🗺️'
    },
    {
      id: 'daily-life',
      title: 'Daily Life',
      description: 'The rhythms of nomadic existence centered around livestock and family',
      content: [
        'Dawn rituals of milking mares and caring for newborn animals',
        'Men tended to herds while women managed camp and crafts',
        'Children learned riding and animal care from an early age',
        'Communal meals featuring fermented mare\'s milk and meat dishes',
        'Evening storytelling and oral tradition preservation',
        'Skilled artisans crafted tools, weapons, and decorative items',
        'Trade negotiations with merchants along established routes'
      ],
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/nomadic-encampment.jpg',
      icon: '🏕️'
    },
    {
      id: 'seasonal-patterns',
      title: 'Seasonal Cycles',
      description: 'Life organized around the changing seasons and natural rhythms',
      content: [
        'Spring: Birthing season for livestock, repair of winter damage',
        'Summer: Peak grazing season, major tribal gatherings and trade',
        'Autumn: Preparation for winter, slaughter and preservation of meat',
        'Winter: Shelter in protected valleys, craft production and storytelling',
        'Seasonal festivals marking solstices and equinoxes',
        'Weather prediction based on animal behavior and sky patterns',
        'Stockpiling of resources during abundant seasons'
      ],
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/steppe-landscape-hero.jpg',
      icon: '🌱'
    }
  ],
  culturalInnovations: [
    {
      id: 'horse-domestication',
      title: 'Horse Domestication',
      shortDescription: 'Revolutionary mastery of horse breeding, training, and riding techniques',
      detailedContent: {
        overview: 'The domestication of horses by steppe peoples around 3500 BCE revolutionized transportation, warfare, and cultural development across Eurasia. This innovation gave nomadic cultures unprecedented mobility and military advantage.',
        techniques: [
          'Selective breeding for speed, endurance, and temperament',
          'Development of sophisticated bridles and saddles',
          'Training methods for war horses and riding techniques',
          'Veterinary knowledge for horse health and care',
          'Integration of horses into daily nomadic life'
        ],
        significance: 'Horse domestication enabled the rapid spread of cultures, technologies, and genetic material across vast distances. It fundamentally changed warfare, trade, and communication patterns throughout the ancient world.',
        timeline: '3500-3000 BCE: Initial domestication period'
      },
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/steppe-horseman.jpg',
      icon: '🐎'
    },
    {
      id: 'metalworking',
      title: 'Advanced Metalworking',
      shortDescription: 'Sophisticated bronze and iron working techniques for tools and artistic objects',
      detailedContent: {
        overview: 'Steppe peoples developed advanced metallurgical techniques, creating both functional tools and elaborate decorative objects. Their metalworking skills influenced cultures from Europe to Asia.',
        techniques: [
          'Bronze casting using complex molds and alloys',
          'Iron forging techniques for superior weapons',
          'Decorative inlay work with precious metals',
          'Animal-style artistic motifs in metalwork',
          'Portable forges for nomadic metalworking'
        ],
        significance: 'Steppe metalworking innovations spread across trade networks, influencing artistic styles and technological development throughout Eurasia. Their portable techniques enabled craft production during migration.',
        timeline: '2000-500 BCE: Peak metalworking period'
      },
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/steppe-artifacts-collection.jpg',
      icon: '⚒️'
    },
    {
      id: 'burial-practices',
      title: 'Elaborate Burial Practices',
      shortDescription: 'Complex kurgan burial mounds reflecting social hierarchy and spiritual beliefs',
      detailedContent: {
        overview: 'The construction of kurgan burial mounds represents one of the most distinctive cultural practices of steppe peoples. These elaborate tombs provide invaluable insights into their social structure, beliefs, and material culture.',
        techniques: [
          'Multi-chambered underground burial structures',
          'Preservation techniques for organic materials',
          'Astronomical alignment of burial complexes',
          'Ritual sacrifice and grave good arrangements',
          'Community labor organization for large projects'
        ],
        significance: 'Kurgan burials demonstrate sophisticated understanding of engineering, astronomy, and social organization. They preserve the richest archaeological evidence of steppe culture and provide insight into ancient spiritual beliefs.',
        timeline: '3500-300 BCE: Kurgan building tradition'
      },
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/kurgan-archaeology.jpg',
      icon: '⛰️'
    }
  ],
  peoples: [],
  artifacts: [],
  sites: [],
  culturalExchanges: [],
  timeline: []
};