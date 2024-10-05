import { useNavigate } from "react-router-dom";
import "./RegisterButton.css";

export function RegisterButton() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/SignUp");
  };

  return (
    <button onClick={handleRegister} className="RegisterButton">
      Register
    </button>
  );
}
