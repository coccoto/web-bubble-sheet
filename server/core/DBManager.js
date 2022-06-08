const dotenv = require('dotenv')

module.exports = class {

    constructor() {
        this.db = null
    }

    async connect() {
        const mysql = require('mysql2/promise')
        const env = dotenv.config().parsed

        const conn = await mysql.createConnection({
            host: env['HOST'],
            user: env['USER'],
            password: env['PASSWORD'],
            database: env['DATABASE'],
        })
        this.db = conn
    }
}