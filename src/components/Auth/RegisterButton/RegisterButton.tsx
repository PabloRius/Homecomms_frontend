import { useNavigate } from "react-router-dom";
import "./RegisterButton.css";

export function RegisterButton() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <button onClick={handleRegister} className="RegisterButton">
      Register
    </button>
  );
}
