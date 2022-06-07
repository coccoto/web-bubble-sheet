const fs = require('fs')
const DBManager = require(ROOT + '/server/core/DBManager')

module.exports = class extends DBManager {

    async getMstMenu() {
        const query = await fs.readFileSync(ROOT + '/server/src/sql/getMstMenu.sql', 'utf-8')
        const [rows, fields] = await this.db.query(query)
        return rows
    }
}
