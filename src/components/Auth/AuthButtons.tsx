import { RegisterButton } from "./RegisterButton";
import { LoginButton } from "./LoginButton";

export function AuthButtons() {
  return (
    <menu className="AuthButtons">
      <LoginButton />
      <RegisterButton />
    </menu>
  );
}
