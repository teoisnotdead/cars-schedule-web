import { HeroSection } from "../components/ui/HeroSection";
import { FeaturesSection } from "../components/ui/FeaturesSection";
import { ServicesSection } from "../components/ui/ServicesSection";

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-5xl mx-auto px-6">
        <ServicesSection />
        <FeaturesSection />
      </div>
    </div>
  );
};
