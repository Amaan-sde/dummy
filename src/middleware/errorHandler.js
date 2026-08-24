const logger = require('../utils/logger');
const config = require('../config');

const errorHandler = (err, req, res, next) => {
  let { statusCode = 500, message } = err;

  if (config.env === 'production' && !err.isOperational) {
    statusCode = 500;
    message = 'Internal Server Error';
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  if (statusCode >= 500) {
    logger.error(err);
  } else {
    logger.warn(err.message);
  }

  res.status(statusCode).json(response);
};

const notFoundHandler = (req, res, next) => {
  const { NotFoundError } = require('../utils/errors');
  next(new NotFoundError(`Cannot ${req.method} ${req.originalUrl}`));
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
