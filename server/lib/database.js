const { DBManager } = require('@coccoto/node-dbmanager')
const { logger } = require('@/lib/logger')
const config = require('@/config/config')

const dbManager = new DBManager({
    dbConnectionConfig: config.database,
    logger: logger,
})

module.exports = { dbManager }
