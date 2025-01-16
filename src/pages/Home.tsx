import { HeroSection } from "../components/ui/HeroSection";
import { FeaturesSection } from "../components/ui/FeaturesSection";
import { ServicesSection } from "../components/ui/ServicesSection";
import { MapSection } from "../components/ui/MapSection";
import { ContactSection } from "../components/ui/ContactSection";

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-5xl mx-auto px-6">
        <MapSection />
        <ServicesSection />
        <FeaturesSection />
        <ContactSection />
      </div>
    </div>
  );
};
