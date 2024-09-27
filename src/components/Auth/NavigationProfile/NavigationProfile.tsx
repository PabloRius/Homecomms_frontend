import { IconButton } from "../../Buttons/IconButton/IconButton";
import { IoMdArrowDropdown } from "react-icons/io";

import placeholder from "../../../images/placeholder/profile.jpg";

import "./NavigationProfile.css";

interface NavigationProfileProps {
  classes: Array<string>;
}

export function NavigationProfile({ classes }: NavigationProfileProps) {
  const toggleProfileMenu = () => {};
  return (
    <menu className={`NavigationProfile ${classes?.join(" ")}`}>
      <img src={placeholder} alt="" />
      <IconButton
        Icon={IoMdArrowDropdown}
        size="sm"
        callback={toggleProfileMenu}
      />
    </menu>
  );
}
