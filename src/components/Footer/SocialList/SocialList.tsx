import { IconButton } from "../../Buttons/IconButton/IconButton";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./SocialList.css";

export function SocialList() {
  return (
    <ul className="SocialList">
      <li>
        <IconButton Icon={FaXTwitter} callback={() => {}} size="md" />
      </li>
      <li>
        <IconButton Icon={FaInstagram} callback={() => {}} size="md" />
      </li>
      <li>
        <IconButton Icon={FaYoutube} callback={() => {}} size="md" />
      </li>
      <li>
        <IconButton Icon={FaGithub} callback={() => {}} size="md" />
      </li>
    </ul>
  );
}
