import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/**
 * POINT D'ENTRÉE PRINCIPAL DE L'APPLICATION
 *
 * Ce fichier initialise l'application React et la monte dans le DOM
 * Suppression de tous les imports et styles Vite par défaut
 */

// Monte l'application React dans l'élément #root
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
