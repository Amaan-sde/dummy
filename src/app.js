const express = require('express');
const setupSecurityMiddleware = require('./middleware/security');
const requestLogger = require('./middleware/requestLogger');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');
const healthRoutes = require('./routes/health');
const v1Router = require('./routes/v1');
const userRoutes = require('./routes/v1/userRoutes');

const app = express();

// Security and parser middleware
setupSecurityMiddleware(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use(requestLogger);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello Amaan 95 ! API service is operational.',
    version: '1.0.0',
    health: '/health',
    api: '/api/v1',
  });
});

// Mount modular routes
app.use('/health', healthRoutes);
app.use('/api/v1', v1Router);
app.use('/api/v1/users', userRoutes);

// 404 handler & global error handler
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
