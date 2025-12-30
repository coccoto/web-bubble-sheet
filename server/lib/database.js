const { DBManager } = require('@coccoto/node-dbmanager')
const { logger } = require('./logger')
const config = require('../config')

const dbManager = new DBManager({
    dbConnectionConfig: config.database,
    logger: logger,
})

module.exports = { dbManager }
