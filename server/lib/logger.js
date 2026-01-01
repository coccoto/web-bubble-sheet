const { initLogger, getLogger } = require('@coccoto/node-logmanager')

initLogger()
const logger = getLogger()

module.exports = { logger }
