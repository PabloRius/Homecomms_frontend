import { Loader } from "../../components/Loader";
// import { useHubs } from "../../hooks/useHubs";

import "./HubsPage.css";

export function HubsPage() {
  // const { hubs, loading, error } = useHubs();
  // return !loading && hubs ? (
  //   <div className="HubsPage"></div>
  // ) : !loading && !hubs ? (
  //   <p>{error}</p>
  // ) : (
  //   <Loader />
  // );
  return <Loader />;
}
