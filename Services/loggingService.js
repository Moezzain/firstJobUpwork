const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;

const myFormat = printf(({level, message, label, timestamp}) => {
  return `[${label}] level[${level}] ${timestamp}: ${message}`;
});

const logger = createLogger({
  format: combine(label({label: 'Ecommerce Service'}), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({filename: 'error.log', level: 'error'}),
    new transports.File({filename: 'combined.log'}),
  ],
});

const logMessage = (level, message) => {
  logger.log({
    level: level,
    message: message,
  });
};

let Info = 'info';
let logError = 'error';

module.exports = {logMessage, Info, logError};
