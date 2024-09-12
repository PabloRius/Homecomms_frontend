import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import "@fontsource/inter";

import "./index.css";
import "./styles/Palette.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
