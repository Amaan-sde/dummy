const app = require('./src/app');
const config = require('./src/config');
const logger = require('./src/utils/logger');
const express = require('express');

const app = express();

const server = app.listen(config.port, () => {
  logger.info(`Server is running at http://localhost:${config.port} in ${config.env} mode`);
});

// Graceful shutdown handling
const gracefulShutdown = (signal) => {
  logger.info(`${signal} signal received: closing HTTP server`);
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
};

app.get('/' , (req,res)=>{
  res.send("hello world");
});

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

module.exports = server;

