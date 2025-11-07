import React, { useState } from 'react';

interface ModernLegacyTab {
  id: string;
  title: string;
  icon: string;
  content: {
    overview: string;
    points: string[];
    examples: string[];
    imageUrl: string;
  };
}

interface ModernLegacySectionProps {
  className?: string;
}

const modernLegacyData: ModernLegacyTab[] = [
  {
    id: 'culture',
    title: 'Cultural Heritage',
    icon: '🎭',
    content: {
      overview: 'The cultural practices and traditions of ancient steppe peoples continue to influence modern societies across Eurasia, from music and art to social structures.',
      points: [
        'Traditional music and instruments still used in Central Asian cultures',
        'Nomadic hospitality customs preserved in modern societies',
        'Animal motifs in art and decoration remain prominent',
        'Storytelling traditions continue through epic poetry and folklore',
        'Seasonal festivals and celebrations maintain ancient rhythms',
        'Traditional crafts like felt-making and metalwork persist'
      ],
      examples: [
        'Mongolian throat singing traces back to ancient steppe traditions',
        'Kazakh eagle hunting practices unchanged for centuries',
        'Kyrgyz epic "Manas" preserves 1000+ years of oral history',
        'Traditional yurt construction still used by nomadic families'
      ],
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/nomadic-encampment.jpg'
    }
  },
  {
    id: 'genetics',
    title: 'Genetic Legacy',
    icon: '🧬',
    content: {
      overview: 'Modern genetic research reveals the extensive influence of ancient steppe peoples on the genetic makeup of populations across Europe, Asia, and beyond.',
      points: [
        'Significant genetic markers found in European populations',
        'Y-chromosome lineages trace back to steppe migrations',
        'Lactose tolerance genes spread through steppe influence',
        'Horse domestication genes show ancient steppe origins',
        'Disease resistance adaptations from nomadic lifestyle',
        'Population genetics reveal ancient migration patterns'
      ],
      examples: [
        'R1a and R1b haplogroups dominant in many European populations',
        'Lactase persistence common where steppe peoples settled',
        'Ancient DNA from kurgans matches modern Central Asian populations',
        'Genetic diversity patterns reflect historical trade routes'
      ],
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/eurasian-influence-map.jpg'
    }
  },
  {
    id: 'traditions',
    title: 'Living Traditions',
    icon: '🏇',
    content: {
      overview: 'Many traditions established by ancient steppe peoples remain vibrant parts of modern life, particularly in Central Asia, Mongolia, and parts of Eastern Europe.',
      points: [
        'Horsemanship skills maintain practical and ceremonial importance',
        'Traditional foods and fermentation techniques still practiced',
        'Seasonal migration patterns adapted for modern contexts',
        'Ancient burial and memorial practices continue',
        'Traditional medicine using steppe plants and practices',
        'Oral traditions preserve historical knowledge and values'
      ],
      examples: [
        'Kazakhs still practice traditional horse games like kokpar',
        'Fermented mare\'s milk (kumys) remains a traditional drink',
        'Modern Mongolians maintain traditional ger (yurt) dwellings',
        'Ancient astronomical knowledge used in traditional calendars'
      ],
      imageUrl: 'https://tooma-uploads.s3.us-east-1.amazonaws.com/generated-images/steppe-horseman.jpg'
    }
  }
];

export const ModernLegacySection: React.FC<ModernLegacySectionProps> = ({
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<string>('culture');

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
  };

  const activeTabData = modernLegacyData.find(tab => tab.id === activeTab);

  return (
    <section
      id="legacy"
      className={`py-20 bg-gradient-to-b from-amber-50 to-amber-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Modern Legacy
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Discover how the ancient steppe peoples continue to influence our modern world 
            through their cultural heritage, genetic legacy, and living traditions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-2 inline-flex space-x-2">
            {modernLegacyData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-amber-600 text-white shadow-md transform scale-105'
                    : 'text-amber-700 hover:bg-amber-50 hover:text-amber-800'
                }`}
                aria-label={`View ${tab.title} information`}
              >
                <span className="text-lg" aria-hidden="true">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTabData && (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              {/* Image Section */}
              <div className="lg:order-2">
                <div 
                  className="h-64 lg:h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('${activeTabData.content.imageUrl}')`,
                  }}
                  role="img"
                  aria-label={`Illustration for ${activeTabData.title}`}
                >
                  <div className="h-full bg-gradient-to-t from-amber-900/30 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:order-1 p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl" aria-hidden="true">{activeTabData.icon}</span>
                  <h3 className="text-3xl font-bold text-amber-900">
                    {activeTabData.title}
                  </h3>
                </div>

                <p className="text-lg text-amber-800 mb-8 leading-relaxed">
                  {activeTabData.content.overview}
                </p>

                {/* Key Points */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-amber-900 mb-4">
                    Key Influences
                  </h4>
                  <ul className="space-y-2">
                    {activeTabData.content.points.map((point, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        <span className="text-amber-800 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div>
                  <h4 className="text-xl font-semibold text-amber-900 mb-4">
                    Modern Examples
                  </h4>
                  <div className="space-y-3">
                    {activeTabData.content.examples.map((example, index) => (
                      <div key={index} className="bg-amber-50 rounded-lg p-4">
                        <p className="text-amber-800 font-medium">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Explore the Continuing Story
            </h3>
            <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
              The legacy of ancient steppe peoples lives on in countless ways. 
              From genetic research to cultural preservation, new discoveries continue 
              to reveal their profound influence on our modern world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#timeline"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-300"
                aria-label="Explore historical timeline"
              >
                View Timeline
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#sites"
                className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors duration-300"
                aria-label="Discover archaeological sites"
              >
                Archaeological Sites
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};