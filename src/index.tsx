// Import deps
import React from "react";
import ReactDOM from "react-dom/client";

// Import components
import App from "./App";

// Import styles
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Render Shaparoo component in the DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
