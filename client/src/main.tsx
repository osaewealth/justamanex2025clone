import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("main.tsx loaded");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found");
  document.body.innerHTML = "<h1>Error: Root element not found</h1>";
} else {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Error rendering app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Error Loading App</h1>
        <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
        <button onclick="window.location.reload()">Reload Page</button>
      </div>
    `;
  }
}
