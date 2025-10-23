const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'Houston Airport Transport API is running!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Houston airport terminals data
app.get('/api/terminals', (req, res) => {
  const terminals = [
    { id: 'A', name: 'Terminal A', code: 'IAHA' },
    { id: 'B', name: 'Terminal B', code: 'IAHB' },
    { id: 'C', name: 'Terminal C', code: 'IAHC' },
    { id: 'D', name: 'Terminal D', code: 'IAHD' },
    { id: 'E', name: 'Terminal E', code: 'IAHE' }
  ];
  res.json(terminals);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;