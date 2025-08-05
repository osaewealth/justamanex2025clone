import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import path from "path";
import fs from "fs";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Initialize API routes
registerRoutes(app);

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  // Try to serve the built client files
  const possiblePaths = [
    path.join(process.cwd(), "dist", "public"),
    path.join(process.cwd(), "dist"),
    path.join(__dirname, "..", "dist", "public"),
    path.join(__dirname, "..", "dist"),
  ];

  let staticPath = null;
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      staticPath = possiblePath;
      break;
    }
  }

  if (staticPath) {
    console.log(`Serving static files from: ${staticPath}`);
    app.use(express.static(staticPath));
    
    // Serve index.html for all non-API routes
    app.get("*", (req, res) => {
      if (!req.path.startsWith("/api")) {
        const indexPath = path.join(staticPath, "index.html");
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          res.status(404).json({ message: "index.html not found" });
        }
      } else {
        res.status(404).json({ message: "API route not found" });
      }
    });
  } else {
    // Fallback if no build files found
    app.get("*", (req, res) => {
      if (req.path.startsWith("/api")) {
        res.status(404).json({ message: "API route not found" });
      } else {
        res.status(200).json({ 
          message: "Server is running", 
          note: "Build files not found. Please run 'npm run build' first." 
        });
      }
    });
  }
} else {
  // Development mode - just return a message
  app.get("*", (req, res) => {
    if (req.path.startsWith("/api")) {
      res.status(404).json({ message: "API route not found" });
    } else {
      res.status(200).json({ message: "Development server running" });
    }
  });
}

// Export for Vercel
export default app;
