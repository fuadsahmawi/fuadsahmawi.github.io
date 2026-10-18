import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// The site used to have one page per section; keep those links working.
const legacyRoutes = {
  "/skills": "stack",
  "/portfolio": "work",
  "/career": "experience",
  "/education": "education",
  "/contact": "contact",
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {Object.entries(legacyRoutes).map(([path, id]) => (
          <Route key={path} path={path} element={<Navigate to={`/#${id}`} replace />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
