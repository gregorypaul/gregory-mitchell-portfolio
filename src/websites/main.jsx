import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter/wght.css";
import WebsitesPage from "./WebsitesPage.jsx";
import "./websites.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebsitesPage />
  </StrictMode>,
);
