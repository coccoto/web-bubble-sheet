const { initLogger, getLogger } = require('@coccoto/node-logmanager')
const config = require('../config')

initLogger(config.log)
const logger = getLogger()

module.exports = { logger }
