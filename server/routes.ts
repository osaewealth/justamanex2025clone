import type { Express } from "express";

export function registerRoutes(app: Express): void {
  // put application routes here
  // prefix all routes with /api

  // Example API route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
  });

  // Test route
  app.get("/api/test", (req, res) => {
    res.json({ 
      message: "API is working!", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // Simple data route
  app.get("/api/data", (req, res) => {
    res.json({
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" }
      ]
    });
  });
}
