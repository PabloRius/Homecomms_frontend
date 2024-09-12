import { NavigationPill } from "../NavigationPill/NavigationPill";
import { DefaultNavigationPillListDefinition } from "../NavigationPillListDefinition";

import "./NavigationPillList.css";

interface NavigationPillListProps {
  list: "default";
  classes: string[];
}

export function NavigationPillList({ list, classes }: NavigationPillListProps) {
  const pillList =
    list === "default" ? DefaultNavigationPillListDefinition : null;

  return (
    <menu className={`NavigationPillList ${classes.join(" ")}`}>
      {pillList &&
        pillList.map((pill) => (
          <NavigationPill title={pill.title} important={pill.important} />
        ))}
    </menu>
  );
}
