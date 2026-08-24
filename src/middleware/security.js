const cors = require('cors');
const helmet = require('helmet');
const config = require('../config');

const corsOptions = {
  origin: config.cors.origin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

const setupSecurityMiddleware = (app) => {
  // Set security HTTP headers
  app.use(helmet());
  // Enable CORS
  app.use(cors(corsOptions));
};

module.exports = setupSecurityMiddleware;
