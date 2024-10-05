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
      {linkList?.map((link, idx_1) => {
        return (
          <menu className="Column" key={idx_1}>
            <h6>{link.title}</h6>
            <ul className="Body">
              {link.subtitles.map((sublink, idx_2) => {
                return (
                  <NavigationLink
                    title={sublink.subtitle}
                    key={`${idx_1}_${idx_2}`}
                  />
                );
              })}
            </ul>
          </menu>
        );
      })}
    </section>
  );
}
