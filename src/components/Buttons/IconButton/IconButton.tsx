import { IconType } from "react-icons";

import "./IconButton.css";

interface IconButtonInterface {
  Icon: IconType;
  callback: () => object | void | null;
  classes?: string[];
  size: "sm" | "md" | "lg";
}

export function IconButton({
  Icon,
  callback,
  classes,
  size,
}: IconButtonInterface) {
  return (
    <button
      className={`IconButton ${classes?.join(" ")} ${size}`}
      onClick={() => {
        callback();
      }}
    >
      <Icon size={size === "md" ? "24px" : size === "lg" ? "30px" : "18px"} />
    </button>
  );
}
