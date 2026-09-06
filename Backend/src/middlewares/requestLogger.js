const pinoHttp = require('pino-http')

const logger = require('../utils/logger')

const requestLogger = pinoHttp({
    logger
})

module.exports = requestLogger