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

  const padding = 10;
  const logoSize = 50;
  const rowGap = 10;
  const buttonSize = 40;

  const headerStyle: { [key: string]: string | number } = {
    rowGap: `${rowGap}px`,
    padding: `${padding}px 0`,
  };

  if (responsive)
    headerStyle["height"] = `${logoSize + rowGap + buttonSize + padding * 2}px`;

  return (
    <nav
      className={`Header ${responsive ? "Responsive" : ""}`}
      style={headerStyle}
    >
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
        size={`${buttonSize}px`}
      />
    </nav>
  );
}
