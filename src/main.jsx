import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Contato from "./components/Contato";
import Distros from "./components/Distros";
import Layout from "./components/Layout";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Rota que contém Header e Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="contato" element={<Contato />} />
          <Route path="distros" element={<Distros />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
