// logger.js
const winston = require('winston');

// custom logger format
const customFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
  }),
  winston.format.errors({ stack: true })
);

// cerate logger instance
const logger = winston.createLogger({
  level: 'info',
  format: customFormat,
  transports: [
    new winston.transports.File({ filename: './logs/error.log',level: 'error' }),
    new winston.transports.File({ filename: './logs/info.log',level: 'info' }),
  ],
});

module.exports = logger;