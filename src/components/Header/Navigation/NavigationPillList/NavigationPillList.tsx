import { useLocation } from "react-router-dom";
import { NavigationPill } from "../NavigationPill/NavigationPill";
import { DefaultNavigationPillListDefinition } from "../NavigationPillListDefinition";

import "./NavigationPillList.css";

interface NavigationPillListProps {
  list: "default";
  classes: string[];
}

export function NavigationPillList({ list, classes }: NavigationPillListProps) {
  const location = useLocation();

  const pillList =
    list === "default" ? DefaultNavigationPillListDefinition : null;

  return (
    <menu className={`NavigationPillList ${classes.join(" ")}`}>
      {pillList &&
        pillList.map((pill) => (
          <NavigationPill
            key={pill.title}
            title={pill.title}
            route={pill.route}
            important={pill.route === location.pathname}
          />
        ))}
    </menu>
  );
}
