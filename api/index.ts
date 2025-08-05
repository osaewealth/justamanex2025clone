import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working!', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/api/data', (req, res) => {
  res.json({
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ]
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  const possiblePaths = [
    path.join(process.cwd(), 'dist', 'public'),
    path.join(process.cwd(), 'dist'),
    path.join(__dirname, '..', 'dist', 'public'),
    path.join(__dirname, '..', 'dist'),
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
    
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api')) {
        const indexPath = path.join(staticPath, 'index.html');
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          res.status(404).json({ message: 'index.html not found' });
        }
      } else {
        res.status(404).json({ message: 'API route not found' });
      }
    });
  } else {
    app.get('*', (req, res) => {
      if (req.path.startsWith('/api')) {
        res.status(404).json({ message: 'API route not found' });
      } else {
        res.status(200).json({ 
          message: 'Server is running', 
          note: 'Build files not found. Please run npm run build first.' 
        });
      }
    });
  }
} else {
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      res.status(404).json({ message: 'API route not found' });
    } else {
      res.status(200).json({ message: 'Development server running' });
    }
  });
}

// Export for Vercel
export default app; 