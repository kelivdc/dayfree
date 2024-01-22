const simpleLogger = require('simple-node-logger');

const logger = simpleLogger.createRollingFileLogger({
  logDirectory: 'logs/',
  fileNamePattern: 'strapi_log_<DATE>.log',
  dateFormat: 'YYYY.MM.DD',
});

module.exports = logger;