const { initLogger, getLogger } = require('@coccoto/node-logmanager')

const requiredEnv = ['LOG_DIR', 'ENVIRONMENT']

for (const key of requiredEnv) {
    if (! process.env[key]) {
        throw new Error('The .env file is not configured.')
    }
}

initLogger({
    environment: process.env.ENVIRONMENT,
    logDir: process.env.LOG_DIR,
})

const logger = getLogger()
module.exports = { logger }
