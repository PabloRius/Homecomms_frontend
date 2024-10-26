import LoadSpinner from "../../../images/placeholder/loader.gif";

import "./Loader.css";

interface LoaderProps {
  full?: boolean;
}

export function Loader({ full = false }: LoaderProps) {
  return (
    <div className={`"Loader ${full ? "Full" : ""}`}>
      <img src={LoadSpinner} alt="Loading spinner" />
    </div>
  );
}
