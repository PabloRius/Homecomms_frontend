import { PresentationSection } from "./Sections/PresentationSection/PresentationSection";
import { useAppSelector } from "../../store/hooks";

import { AuthButtons } from "../../components/Auth/AuthButtons";

export function HomePage() {
  const { currentUser } = useAppSelector((state) => state.user);
  return (
    <div className="LandingPage">
      <section className="HeroSection">
        <h1 className="Title">HomeComms</h1>
        <h2 className="Subtitle">
          {!currentUser
            ? "Find your way to an easier house-sharing experience"
            : `Welcome Home ${currentUser.username}!`}
        </h2>
        {!currentUser ? (
          <AuthButtons />
        ) : (
          <a className="SecondaryButton LobbyButton" href="/lobby">
            Enter your Hub
          </a>
        )}
      </section>
      <PresentationSection />
    </div>
  );
}
