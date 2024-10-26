import { IconType } from "react-icons";

interface IconButtonInterface {
  Icon: IconType;
  callback: () => object | void | null;
  color?: string;
}

export function IconButton({
  Icon,
  callback,
  color = "black",
}: IconButtonInterface) {
  return (
    <button
      className="IconButton"
      onClick={() => {
        callback();
      }}
    >
      <Icon size="24px" color={color} />
    </button>
  );
}
