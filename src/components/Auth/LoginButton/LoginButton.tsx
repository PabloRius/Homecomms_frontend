import { useNavigate } from "react-router-dom";
import "./LoginButton.css";

export function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <button onClick={handleLogin} className="LoginButton">
      Log In
    </button>
  );
}
