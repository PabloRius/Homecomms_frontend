import { useNavigate } from "react-router-dom";
import "./SignOutButton.css";
import { useAuth } from "../../../contexts/AuthContext";

export function SignOutButton() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };
  return (
    <button onClick={handleLogout} className="SignOutButton">
      Log out
    </button>
  );
}
