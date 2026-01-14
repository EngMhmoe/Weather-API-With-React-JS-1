import { createRoot } from "react-dom/client";

//import index css in full Project
import "./index.css";

import App from "./App.jsx";
import React from "react";

// import i18n (needs to be bundled ;))
import "./i18n";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
