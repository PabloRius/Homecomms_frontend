import { RegisterButton } from "../RegisterButton/RegisterButton";
import { SignInButton } from "../SignInButton/SignInButton";

import "./NavigationAuth.css";

interface NavigationAuthProps {
  classes: string[];
}

export function NavigationAuth({ classes }: NavigationAuthProps) {
  return (
    <menu className={`NavigationAuth ${classes.join(" ")}`}>
      <SignInButton />
      <RegisterButton />
    </menu>
  );
}
