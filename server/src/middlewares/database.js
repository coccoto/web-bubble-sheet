const { dbManager } = require('../../lib/database')

/**
 * Database connection middleware
 * Manages DB connection lifecycle for each request
 */
const databaseMiddleware = async (req, _res, next) => {
    try {
        await dbManager.connect()
        req.db = dbManager
        next()
    } catch (error) {
        next(error)
    } finally {
        await dbManager.disconnect()
    }
}

module.exports = { databaseMiddleware }
