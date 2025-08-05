import type { Express } from "express";
import { storage } from "./storage";

export function registerRoutes(app: Express): void {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

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
}
