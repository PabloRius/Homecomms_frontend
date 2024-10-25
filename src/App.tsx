import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import "./App.css";
import { LobbyPage } from "./pages/LobbyPage/LobbyPage";
// import { ProtectedRoute } from "./ProtectedRoute";
import { HubsPage } from "./pages/HubsPage/HubsPage";
import { Hub } from "./pages/Hub/Hub";
import { LoginPage } from "./pages/Auth/LoginPage/LoginPage";
import { RegisterPage } from "./pages/Auth/RegisterPage/RegisterPage";

export function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/lobby" element={<Outlet />}>
          {/* <Route path="/lobby" element={<ProtectedRoute element={<Outlet />} />}> */}
          <Route path="" element={<LobbyPage />} />
          <Route path="hubs" element={<Outlet />}>
            <Route path="" element={<HubsPage />} />
            <Route path=":id" element={<Hub />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
