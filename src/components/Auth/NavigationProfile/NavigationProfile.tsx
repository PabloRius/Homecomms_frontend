import { IconButton } from "../../Buttons/IconButton/IconButton";
import { IoMdArrowDropdown } from "react-icons/io";

import placeholder from "../../../images/placeholder/profile.jpg";

import "./NavigationProfile.css";
import { SignOutButton } from "../LogoutButton";
import { useState } from "react";

interface NavigationProfileProps {
  classes: Array<string>;
}

export function NavigationProfile({ classes }: NavigationProfileProps) {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleProfileMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <menu className={`NavigationProfile ${classes?.join(" ")}`}>
        <img src={placeholder} alt="" />
        <IconButton
          Icon={IoMdArrowDropdown}
          size="sm"
          callback={toggleProfileMenu}
        />
      </menu>
      {menu && (
        <menu className="ProfileOptions">
          <SignOutButton />
        </menu>
      )}
    </>
  );
}
