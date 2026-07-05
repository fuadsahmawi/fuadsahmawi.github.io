import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App page="home" />} />
        <Route path="/skills" element={<App page="skills" />} />
        <Route path="/portfolio" element={<App page="portfolio" />} />
        <Route path="/career" element={<App page="career" />} />
        <Route path="/education" element={<App page="education" />} />
        <Route path="/contact" element={<App page="contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
