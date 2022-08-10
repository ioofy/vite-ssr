import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/index.css";

const container = document.getElementById("app");

const FullApp = () => (
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// @ts-ignore
if (import.meta.hot || container?.innerText) {
  const root = createRoot(container!); // createRoot(container!) if you use TypeScript
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
