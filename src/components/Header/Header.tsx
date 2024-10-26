import { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

import { useAuth } from "../../hooks/useAuth";

import { DefaultNavigationPillListDefinition } from "./NavigationPillListDefinition";

import { NavigationPill } from "./NavigationPill";
import { AuthButtons } from "../Auth/AuthButtons";
import { ProfileMenu } from "../Auth/ProfileMenu";

import LogoImage from "../../images/brand/figma-logo-512.png";

export function Header() {
  const [responsive, setResponsive] = useState(true);
  const currentLocation = useLocation();
  const { currentUser } = useAuth();

  const navigation = DefaultNavigationPillListDefinition;

  const toggleResponsive = () => {
    setResponsive((prev) => !prev);
  };

  return (
    <header>
      <div className="LogoContainer">
        <img
          className="LogoPicture"
          src={LogoImage}
          alt="Brand logo square sized"
          style={{ maxHeight: 50 }}
        />
      </div>
      <div className={responsive ? "ResponsiveHeader" : ""}>
        <menu className="NavigationPillList">
          {navigation &&
            navigation.map((pill) => (
              <NavigationPill
                key={pill.title}
                title={pill.title}
                route={pill.route}
                important={pill.route === currentLocation.pathname}
              />
            ))}
        </menu>
        {currentUser ? <ProfileMenu /> : <AuthButtons />}
      </div>
      <button
        className="IconButton ResponsiveIconButton"
        onClick={toggleResponsive}
      >
        <IoMenuSharp size="24px" color="black" />
      </button>
    </header>
  );
}
