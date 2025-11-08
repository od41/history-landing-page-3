import React, { useState } from 'react';
import type { WayOfLifeTab } from '../../types';

interface WayOfLifeSectionProps {
  wayOfLifeData: WayOfLifeTab[];
  className?: string;
}

export const WayOfLifeSection: React.FC<WayOfLifeSectionProps> = ({
  wayOfLifeData,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<string>(wayOfLifeData[0]?.id || 'migration');

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
  };

  const activeTabData = wayOfLifeData.find(tab => tab.id === activeTab);

  return (
    <section
      id="wayoflife"
      className={`py-20 bg-gradient-to-b from-amber-50 to-stone-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-6">
            Way of Life
          </h2>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            Discover the daily rhythms, seasonal patterns, and social structures 
            that defined life on the ancient steppes.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="bg-white rounded-lg shadow-lg p-2 inline-flex space-x-2">
            {wayOfLifeData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
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
                    backgroundImage: `url('${activeTabData.imageUrl}')`,
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
                  {activeTabData.description}
                </p>

                {/* Content Points */}
                <div className="space-y-4">
                  {activeTabData.content.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                      <p className="text-amber-800 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};