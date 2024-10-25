import { RegisterButton } from "../RegisterButton/RegisterButton";
import { LoginButton } from "../LoginButton/LoginButton";

import "./NavigationAuth.css";

interface NavigationAuthProps {
  classes?: string[];
  size?: "sm" | "md" | "lg";
}

export function NavigationAuth({ classes, size = "md" }: NavigationAuthProps) {
  return (
    <menu className={`NavigationAuth ${classes?.join(" ")} ${size}`}>
      <LoginButton />
      <RegisterButton />
    </menu>
  );
}
