import { useParams } from "react-router-dom";
import { useHub } from "../../hooks/useHub";

export function Hub() {
  const { id } = useParams<{ id: string }>();
  const { hub, loading, error } = useHub(id);
  return !loading && hub ? (
    <div className="Hub">
      <h1>{hub.name}</h1>
      <p>{hub.description}</p>
    </div>
  ) : !loading && !hub ? (
    <p>{error}</p>
  ) : (
    <p>Loading</p>
  );
}
