import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import "./App.css";
import { HubPage } from "./pages/HubPage/HubPage";

export function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/hub" element={<HubPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
