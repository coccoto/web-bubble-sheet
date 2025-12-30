const path = require('path')
const ViewMenuModel = require('../models/ViewMenuModel')

module.exports = class {

    constructor(dbManager) {
        this.dbManager = dbManager
    }

    async getViewMenu() {
        const sqlPath = path.join(__dirname, '../sql/selectMenuList.sql')
        const query = await this.dbManager.readFile(sqlPath)
        const result = await this.dbManager.select(query)
        const viewMenuModels = result.map(record => new ViewMenuModel(record))
        return viewMenuModels
    }
}
