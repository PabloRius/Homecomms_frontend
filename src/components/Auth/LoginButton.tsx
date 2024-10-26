import { useNavigate } from "react-router-dom";

export function LoginButton() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <button onClick={handleLogin} className="SecondaryButton">
      Log In
    </button>
  );
}
