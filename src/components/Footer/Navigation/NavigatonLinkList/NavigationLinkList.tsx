import { NavigationLink } from "../NavigationLink/NavigationLink";
import { DefaultNavigationLinkListDefinition } from "../NavigationLinkListDefinition";

import "./NavigationLinkList.css";

interface NavigationLinkListProps {
  list: "default";
}

export function NavigationLinkList({ list }: NavigationLinkListProps) {
  const linkList =
    list === "default" ? DefaultNavigationLinkListDefinition : null;

  return (
    <section className="NavigationLinkList">
      {linkList?.map((link) => {
        return (
          <menu className="Column" key={link.title}>
            <h6>{link.title}</h6>
            <ul className="Body">
              {link.subtitles.map((sublink) => {
                return <NavigationLink title={sublink.subtitle} />;
              })}
            </ul>
          </menu>
        );
      })}
    </section>
  );
}
