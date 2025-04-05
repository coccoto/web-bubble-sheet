const { logger } = require(ROOT + '/server/lib/logger.js')
const { DBManager } = require('@coccoto/node-dbmanager')

const requiredEnv = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_DATABASE']

for (const key of requiredEnv) {
    if (! process.env[key]) {
        throw new Error('The .env file is not configured.')
    }
}

const dbManager = new DBManager({
    dbConnectionConfig: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    logger: logger,
})

module.exports = { dbManager }
