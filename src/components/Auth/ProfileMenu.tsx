import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { SignOutButton } from "./LogoutButton";
import { IconButton } from "../Buttons/IconButton/IconButton";

import placeholder from "../../images/placeholder/profile.jpg";

export function ProfileMenu() {
  const [menu, setMenu] = useState<boolean>(false);
  const toggleProfileMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <menu className="ProfileMenu">
        <img
          src={placeholder}
          alt="Placeholder for a user with no Profile picture"
        />
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
