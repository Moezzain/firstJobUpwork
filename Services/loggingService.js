const {createLogger, format, transports} = require('winston'); // Node Logger Lib
const {combine, timestamp, label, printf} = format;

//__Log Message Format__
const myFormat = printf(({level, message, label, timestamp}) => {
  return `[${label}] level[${level}] ${timestamp}: ${message}`;
});

//__Logger Configuration__
const logger = createLogger({
  format: combine(label({label: 'Ecommerce Service'}), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({filename: 'error.log', level: 'error'}),
    new transports.File({filename: 'combined.log'}),
  ],
});

//__Custom logging Method__
const logMessage = (level, message) => {
  logger.log({
    level: level,
    message: message,
  });
};

let Info = 'info';
let logError = 'error';

module.exports = {logMessage, Info, logError};
