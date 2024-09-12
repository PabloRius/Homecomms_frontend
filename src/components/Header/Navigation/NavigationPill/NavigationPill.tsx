import "./NavigationPill.css";

interface NavigationPillProps {
  title: string;
  important: boolean;
  selected?: boolean;
}

export function NavigationPill({
  title,
  important,
  selected = false,
}: NavigationPillProps) {
  return (
    <button
      className={`NavigationPill ${important ? "Important" : ""} ${
        selected ? "Selected" : ""
      }`}
    >
      {title}
    </button>
  );
}
