// import { NavigationAuth } from "../../../../components/Auth/NavigationAuth/NavigationAuth";
// import { RedirectButton } from "../../../../components/Buttons/RedirectButton.tsx/RedirectButton";
import "./HeroSection.css";

// import { Loader } from "../../../../components/Info/Loader/Loader";

interface HeroSectionProps {
  title: string;
  subtitle: string | null;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="HeroSection">
      <h1 className="Title">{title}</h1>
      <h2 className="Subtitle">{subtitle}</h2>
      {/* {!user && !loading ? (
        <NavigationAuth size="lg" />
      ) : !user && loading ? (
        <Loader full={false} />
      ) : (
        <RedirectButton content="Enter your Hub" route="/lobby" />
      )} */}
    </section>
  );
}
