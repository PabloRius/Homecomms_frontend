import { NavigationAuth } from "../Auth/NavigationAuth/NavigationAuth";
import { Logo } from "../brand/Logo/Logo";
import { IconButton } from "../Buttons/IconButton/IconButton";
import { NavigationPillList } from "./Navigation/NavigationPillList/NavigationPillList";

import { IoMenuSharp } from "react-icons/io5";

import "./Header.css";
import { useState } from "react";

export function Header() {
  const [responsive, setResponsive] = useState(true);

  const toggleHeader = () => {
    setResponsive((prev) => !prev);
  };

  const logoSize = 50;

  return (
    <header className={`${responsive ? "Responsive" : ""}`}>
      <Logo size={`${logoSize}px`} />
      <NavigationPillList
        list="default"
        classes={responsive ? ["ResponsiveNav"] : []}
      />
      <NavigationAuth classes={responsive ? ["ResponsiveNav"] : []} />
      <IconButton
        Icon={IoMenuSharp}
        callback={toggleHeader}
        classes={["ResponsiveButton"]}
        size={"sm"}
      />
    </header>
  );
}
