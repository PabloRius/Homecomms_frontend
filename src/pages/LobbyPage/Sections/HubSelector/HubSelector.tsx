import { RedirectButton } from "../../../../components/Buttons/RedirectButton.tsx/RedirectButton";
import { useHubs } from "../../../../hooks/useHubs";

import "./HubSelector.css";
import { HubContainer } from "./HubContainer/HubContainer";
import { Loader } from "../../../../components/Info/Loader/Loader";

export function HubSelector() {
  const { hubs, loading, error } = useHubs(6);

  return (
    <section className="HubSelector">
      <div className="title">
        <h2>Your favorite places</h2>
        <RedirectButton content="See all" route="hubs" />
      </div>
      <ul className="HubSelector">
        {!loading && hubs ? (
          hubs.map((hub) => {
            return <HubContainer key={hub.name} hub={hub} />;
          })
        ) : !loading && !hubs ? (
          <p>{error}</p>
        ) : (
          <Loader />
        )}
      </ul>
    </section>
  );
}
