import { NavigationAuth } from "../../Auth/NavigationAuth/NavigationAuth";
import "./HeroSection.css";

interface HeroSectionProps {
  title: string;
  subtitle: string | null;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="HeroSection">
      <h1 className="Title">{title}</h1>
      <h2 className="Subtitle">{subtitle}</h2>
      <NavigationAuth size="lg" />
    </section>
  );
}
