import "./NavigationLink.css";

interface NavigationLinkProps {
  title: string;
}

export function NavigationLink({ title }: NavigationLinkProps) {
  return <button className="NavigationLink">{title}</button>;
}
