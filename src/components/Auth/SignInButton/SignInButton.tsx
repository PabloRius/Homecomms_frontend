import { useNavigate } from "react-router-dom";
import "./SignInButton.css";

export function SignInButton() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/signIn");
  };
  return (
    <button onClick={handleLogin} className="SignInButton">
      Sign In
    </button>
  );
}
