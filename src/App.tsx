import './App.css';
import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';
import { PricingAdvancedSection } from '@/components/sections/pricing-advanced';
import { CTASection } from '@/components/sections/cta';
import { Footer } from '@/components/layout/footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <div data-section="pricing">
          <PricingAdvancedSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;