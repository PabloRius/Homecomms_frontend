import { HeroSection } from "./Sections/HeroSection/HeroSection";
import { PresentationSection } from "./Sections/PresentationSection/PresentationSection";
import { useAppSelector } from "../../store/hooks";

import "./LadingPage.css";

export function LandingPage() {
  const { username, isLoggedIn } = useAppSelector((state) => state.user);
  return (
    <div className="LandingPage">
      <HeroSection
        title="HomeComms"
        subtitle={
          !isLoggedIn
            ? "Find your way to an easier house-sharing experience"
            : `Welcome Home ${username}!`
        }
      />
      <PresentationSection />
    </div>
  );
}
