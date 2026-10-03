import React from "react";

import { createRoot } from "react-dom/client";

// Import index CSS in full Project
import "./index.css";

// Import i18n
import "./i18n";

// Import App Component
import App from "./App.jsx";

//import Redux
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
