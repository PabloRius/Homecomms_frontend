import { HeroSection } from "./Sections/HeroSection/HeroSection";
// import { HubSelector } from "./Sections/HubSelector/HubSelector";

import "./LobbyPage.css";
import { Outlet } from "react-router-dom";

export function LobbyPage() {
  return (
    <div className="LobbyPage">
      <HeroSection
        title="Welcome to your Lobby"
        subtitle="Here you can administrate your hubs and add new ones"
      />
      {/* <HubSelector /> */}
      <Outlet />
    </div>
  );
}
