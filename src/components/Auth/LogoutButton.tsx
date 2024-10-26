import { useAuth } from "../../hooks/useAuth";

export function SignOutButton() {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <button onClick={handleLogout} className="SecondaryButton">
      Logout
    </button>
  );
}
