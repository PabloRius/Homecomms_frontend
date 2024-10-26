import { IconButton } from "../IconButton";

import { DefaultNavigationLinkListDefinition } from "./NavigationLinkListDefinition";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  const links = DefaultNavigationLinkListDefinition;
  return (
    <footer>
      <ul className="SocialList">
        <li>
          <IconButton Icon={FaXTwitter} callback={() => {}} />
        </li>
        <li>
          <IconButton Icon={FaInstagram} callback={() => {}} />
        </li>
        <li>
          <IconButton Icon={FaYoutube} callback={() => {}} />
        </li>
        <li>
          <IconButton Icon={FaGithub} callback={() => {}} />
        </li>
      </ul>
      <section className="NavigationLinkList">
        {links?.map((link, idx_1) => {
          return (
            <menu className="Column" key={idx_1}>
              <h6>{link.title}</h6>
              <ul className="Body">
                {link.subtitles.map((sublink, idx_2) => {
                  return (
                    <a className="NavigationLink" key={`${idx_1}_${idx_2}`}>
                      {sublink.subtitle}{" "}
                    </a>
                  );
                })}
              </ul>
            </menu>
          );
        })}
      </section>
    </footer>
  );
}
