const dotenv = require('dotenv')
dotenv.config()

const requiredEnv = ['ENVIRONMENT', 'PORT', 'DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_DATABASE']

for (const key of requiredEnv) {
    if (! process.env[key]) {
        throw new Error('The .env file is not configured.')
    }
}

module.exports = {
    server: {
        port: process.env.PORT,
    },
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
}
