import { IconType } from "react-icons";

import "./IconButton.css";

interface IconButtonInterface {
  Icon: IconType;
  callback: () => object | void | null;
  classes?: string[];
  size: "sm" | "md" | "lg";
  color?: string;
}

export function IconButton({
  Icon,
  callback,
  classes,
  size,
  color = "black",
}: IconButtonInterface) {
  return (
    <button
      className={`IconButton ${classes?.join(" ")} ${size}`}
      onClick={() => {
        callback();
      }}
    >
      <Icon
        size={size === "md" ? "24px" : size === "lg" ? "30px" : "18px"}
        color={color}
      />
    </button>
  );
}
