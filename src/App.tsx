import { Header } from "./components/Header/Header";
import { LandingPage } from "./pages/LandingPage/LandingPage";

import "./App.css";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <main className="App">
      <Header />
      <LandingPage />
      <Footer />
    </main>
  );
}
