import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

import { useAuth } from "../../hooks/useAuth";

import { NavigationPillList } from "./Navigation/NavigationPillList/NavigationPillList";

import { AuthButtons } from "../Auth/AuthButtons";
import { ProfileMenu } from "../Auth/ProfileMenu";

import LogoImage from "../../images/brand/figma-logo-512.png";

export function Header() {
  const [responsive, setResponsive] = useState(true);
  const { currentUser } = useAuth();

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
        <NavigationPillList
          list="default"
          classes={responsive ? ["ResponsiveNav"] : []}
        />
        {currentUser ? <ProfileMenu /> : <AuthButtons />}
      </div>
      <button
        className="IconButton ResponsiveIconButton"
        onClick={toggleResponsive}
      >
        <IoMenuSharp
          // size={size === "md" ? "24px" : size === "lg" ? "30px" : "18px"}
          size="24px"
          color="black"
        />
      </button>
    </header>
  );
}
