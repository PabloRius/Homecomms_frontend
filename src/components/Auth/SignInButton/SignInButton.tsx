import { UseAppDispatch } from "../../../store/hooks";
import { login } from "../../../store/userSlice";
import "./SignInButton.css";

export function SignInButton() {
  const dispatch = UseAppDispatch();
  const handleLogin = () => {
    dispatch(login({ username: "Test User", email: "Test Email" }));
  };
  return (
    <button onClick={handleLogin} className="SignInButton">
      Sign In
    </button>
  );
}
