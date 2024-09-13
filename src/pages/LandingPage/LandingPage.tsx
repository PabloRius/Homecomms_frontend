import { HeroSection } from "../../components/Sections/HeroSection/HeroSection";
import { PresentationSection } from "../../components/Sections/PresentationSection/PresentationSection";

import "./LadingPage.css";

export function LandingPage() {
  return (
    <div className="LandingPage">
      <HeroSection
        title="HomeComms"
        subtitle="Find your way to an easier house-sharing experience"
      />
      <PresentationSection />
    </div>
  );
}
