import React, { useState } from 'react';
import type { CulturalInnovation } from '../../types';

interface InnovationsSectionProps {
  innovations: CulturalInnovation[];
  className?: string;
}

export const InnovationsSection: React.FC<InnovationsSectionProps> = ({
  innovations,
  className = ''
}) => {
  const [activeInnovation, setActiveInnovation] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (innovationId: string): void => {
    if (expandedCard === innovationId) {
      setExpandedCard(null);
      setActiveInnovation(null);
    } else {
      setExpandedCard(innovationId);
      setActiveInnovation(innovationId);
    }
  };

  const handleCardHover = (innovationId: string | null): void => {
    if (!expandedCard) {
      setActiveInnovation(innovationId);
    }
  };

  return (
    <section
      id="innovations"
      className={`py-20 bg-gradient-to-b from-stone-100 to-amber-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Cultural Innovations
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Explore the groundbreaking innovations that transformed ancient steppe societies 
            and influenced civilizations across Eurasia.
          </p>
        </div>

        {/* Innovations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation) => {
            const isActive = activeInnovation === innovation.id;
            const isExpanded = expandedCard === innovation.id;
            
            return (
              <div
                key={innovation.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isActive ? 'transform scale-105' : 'hover:transform hover:scale-102'
                }`}
                onClick={() => handleCardClick(innovation.id)}
                onMouseEnter={() => handleCardHover(innovation.id)}
                onMouseLeave={() => handleCardHover(null)}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${innovation.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(innovation.id);
                  }
                }}
              >
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                  isActive ? 'shadow-2xl ring-4 ring-amber-200' : 'hover:shadow-xl'
                }`}>
                  {/* Innovation Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url('${innovation.imageUrl}')`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <span className="text-2xl" aria-hidden="true">{innovation.icon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Innovation Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl" aria-hidden="true">{innovation.icon}</span>
                      <h3 className="text-xl font-bold text-amber-900">
                        {innovation.title}
                      </h3>
                    </div>
                    
                    <p className="text-amber-800 mb-4 leading-relaxed">
                      {innovation.shortDescription}
                    </p>

                    <div className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-amber-200 pt-4 mt-4">
                        <p className="text-amber-800 mb-4 text-sm leading-relaxed">
                          {innovation.detailedContent.overview}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-amber-900 mb-2 text-sm">
                            Key Techniques:
                          </h4>
                          <ul className="space-y-1">
                            {innovation.detailedContent.techniques.slice(0, 3).map((technique, index) => (
                              <li key={index} className="flex items-start space-x-2 text-xs">
                                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true" />
                                <span className="text-amber-700">{technique}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="text-xs text-amber-600 font-medium">
                          {innovation.detailedContent.timeline}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-amber-600 font-medium">
                        {isExpanded ? 'Click to collapse' : 'Click to expand'}
                      </span>
                      <div className={`transform transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed View Section */}
        {expandedCard && (
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-amber-200">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              {/* Image Section */}
              <div className="lg:order-2">
                <div 
                  className="h-64 lg:h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url('${innovations.find(i => i.id === expandedCard)?.imageUrl}')`,
                  }}
                  role="img"
                  aria-label={`Detailed view of ${innovations.find(i => i.id === expandedCard)?.title}`}
                >
                  <div className="h-full bg-gradient-to-t from-amber-900/40 to-transparent" />
                </div>
              </div>

              {/* Detailed Content */}
              <div className="lg:order-1 p-8 lg:p-12">
                {innovations.filter(innovation => innovation.id === expandedCard).map((innovation) => (
                  <div key={innovation.id}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl" aria-hidden="true">{innovation.icon}</span>
                        <h3 className="text-3xl font-bold text-amber-900">
                          {innovation.title}
                        </h3>
                      </div>
                      <button
                        onClick={() => setExpandedCard(null)}
                        className="text-amber-600 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-lg p-2"
                        aria-label="Close detailed view"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-lg text-amber-800 mb-8 leading-relaxed">
                      {innovation.detailedContent.overview}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-amber-900 mb-4">
                        Techniques & Methods
                      </h4>
                      <div className="grid sm:grid-cols-1 gap-3">
                        {innovation.detailedContent.techniques.map((technique, index) => (
                          <div key={index} className="bg-amber-50 rounded-lg p-4">
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                              <p className="text-amber-800 font-medium">{technique}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold text-amber-900 mb-4">
                        Historical Significance
                      </h4>
                      <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg p-6">
                        <p className="text-amber-800 leading-relaxed mb-4">
                          {innovation.detailedContent.significance}
                        </p>
                        <div className="flex items-center space-x-2 text-amber-700">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{innovation.detailedContent.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">
              Discover More Archaeological Evidence
            </h3>
            <p className="text-amber-800 mb-6 max-w-2xl mx-auto">
              Explore the artifacts and archaeological sites that provide evidence 
              of these remarkable innovations and their impact on ancient civilizations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#artifacts"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-300"
                aria-label="View archaeological artifacts"
              >
                View Artifacts
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#sites"
                className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-colors duration-300"
                aria-label="Explore archaeological sites"
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