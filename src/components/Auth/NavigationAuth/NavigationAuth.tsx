import { RegisterButton } from "../RegisterButton/RegisterButton";
import { SignInButton } from "../SignInButton/SignInButton";

import "./NavigationAuth.css";

interface NavigationAuthProps {
  classes?: string[];
  size?: "sm" | "md" | "lg";
}

export function NavigationAuth({ classes, size = "md" }: NavigationAuthProps) {
  return (
    <menu className={`NavigationAuth ${classes?.join(" ")} ${size}`}>
      <SignInButton />
      <RegisterButton />
    </menu>
  );
}
