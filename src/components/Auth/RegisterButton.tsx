import { useNavigate } from "react-router-dom";

export function RegisterButton() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <button onClick={handleRegister} className="PrimaryButton">
      Register
    </button>
  );
}
