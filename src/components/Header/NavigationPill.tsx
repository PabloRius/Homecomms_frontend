import { useNavigate } from "react-router-dom";

interface NavigationPillProps {
  title: string;
  route: string;
  important: boolean;
}

export function NavigationPill({
  title,
  route,
  important = false,
}: NavigationPillProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      className={`NavigationPill ${important ? "Important" : ""}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
