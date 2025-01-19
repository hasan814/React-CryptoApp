import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CryptoProvider from "./context/CryptoProvider.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <CryptoProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CryptoProvider>
);
