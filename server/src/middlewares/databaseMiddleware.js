const { dbManager } = require('../../lib/database')

const databaseMiddleware = async (req, _res, next) => {
    try {
        await dbManager.connect()
        req.database = dbManager
        next()
    } catch (error) {
        next(error)
    } finally {
        await dbManager.disconnect()
    }
}

module.exports = { databaseMiddleware }
