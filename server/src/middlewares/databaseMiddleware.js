const { dbManager } = require('@/lib/database')

const databaseMiddleware = async (req, res, next) => {
    try {
        await dbManager.connect()
        req.database = dbManager
        next()
    } catch (error) {
        next(error)
    }
}

const databaseCleanupMiddleware = (req, res, next) => {
    res.on('finish', async () => {
        if (req.database) {
            await dbManager.disconnect()
        }
    })
    next()
}

module.exports = { databaseMiddleware, databaseCleanupMiddleware }
