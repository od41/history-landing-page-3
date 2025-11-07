import { NavigationHeader } from './components/NavigationHeader';
import { HeroSection } from './components/sections/HeroSection';
import { WayOfLifeSection } from './components/sections/WayOfLifeSection';
import { InnovationsSection } from './components/sections/InnovationsSection';
import { ModernLegacySection } from './components/sections/ModernLegacySection';
import { steppeData } from './data/steppeData';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <NavigationHeader 
        navigationItems={steppeData.navigation}
      />
      
      <main className="relative">
        <HeroSection heroContent={steppeData.hero} />
        <WayOfLifeSection wayOfLifeData={steppeData.wayOfLife} />
        <InnovationsSection innovations={steppeData.culturalInnovations} />
        <ModernLegacySection />
      </main>
    </div>
  );
}

export default App;