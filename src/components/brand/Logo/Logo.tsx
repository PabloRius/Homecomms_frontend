import "./Logo.css";

import LogoImage from "../../../images/brand/figma-logo-512.png";

interface LogoProps {
  size: string;
}

export function Logo({ size }: LogoProps) {
  return (
    <div className="LogoContainer">
      <img
        className="LogoPicture"
        src={LogoImage}
        alt="Brand logo square sized"
        style={{ maxHeight: size }}
      />
    </div>
  );
}
