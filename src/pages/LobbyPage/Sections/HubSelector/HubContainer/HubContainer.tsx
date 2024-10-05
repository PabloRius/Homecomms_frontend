import { useNavigate } from "react-router-dom";
import { Hub } from "../../../../../models/Hub";

import "./HubContainer.css";

interface HubContainerProps {
  hub: Hub;
}

export function HubContainer({ hub }: HubContainerProps) {
  const navigate = useNavigate();

  const handleHubClick = (hubId: string) => {
    navigate(`hubs/${hubId}`);
  };
  return (
    <li
      className="HubContainer"
      onClick={() => {
        handleHubClick(hub._id);
      }}
    >
      <div className="row">
        <h2>{hub.name}</h2>
      </div>
      <div className="row">
        <img src={hub.CdnPhotoUrl} alt={`Picture for the hub: ${hub.name}`} />
        <p>{hub.description}</p>
      </div>
    </li>
  );
}
