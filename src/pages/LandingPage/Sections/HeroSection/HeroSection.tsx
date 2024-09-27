import { useAppSelector } from "../../../../store/hooks";
import { NavigationAuth } from "../../../../components/Auth/NavigationAuth/NavigationAuth";
import { RedirectButton } from "../../../../components/Buttons/RedirectButton.tsx/RedirectButton";
import "./HeroSection.css";

interface HeroSectionProps {
  title: string;
  subtitle: string | null;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  const { isLoggedIn } = useAppSelector((state) => state.user);

  return (
    <section className="HeroSection">
      <h1 className="Title">{title}</h1>
      <h2 className="Subtitle">{subtitle}</h2>
      {!isLoggedIn ? (
        <NavigationAuth size="lg" />
      ) : (
        <RedirectButton content="Enter your Hub" route="hub" />
      )}
    </section>
  );
}
