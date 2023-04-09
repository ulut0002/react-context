import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import { FavoriteProvider } from "./context/FavoriteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoriteProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </FavoriteProvider>
);
