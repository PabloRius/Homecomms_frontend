import { IconType } from "react-icons";

import "./IconButton.css";

interface IconButtonInterface {
  Icon: IconType;
  callback: () => object | void | null;
  classes: string[];
  size: string;
}

export function IconButton({
  Icon,
  callback,
  classes,
  size,
}: IconButtonInterface) {
  return (
    <button
      className={`IconButton ${classes.join(" ")}`}
      style={{ height: size }}
      onClick={() => {
        callback();
      }}
    >
      <Icon />
    </button>
  );
}
