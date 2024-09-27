import { useNavigate } from "react-router-dom";
import "./RedirectButton.css";

interface RedirectButtonProps {
  content: string;
  route: string;
}

export function RedirectButton({ content, route }: RedirectButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button onClick={handleClick} className="RedirectButton">
      {content}
    </button>
  );
}
