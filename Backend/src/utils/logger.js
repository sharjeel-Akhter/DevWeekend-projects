const pino = require('pino')

const logger = pino(
    {
        level: "info"
    },
    pino.destination("../logs/app.log")
);

module.exports = logger