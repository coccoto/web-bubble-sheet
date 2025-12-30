const path = require('path')
const ViewMenuModel = require('../models/ViewMenuModel')

module.exports = class {

    constructor(dbManager) {
        this.dbManager = dbManager
    }

    async getViewMenu() {
        const queryPath = path.join(__dirname, '../queries/selectMenuList.sql')
        const query = await this.dbManager.readFile(queryPath)
        const result = await this.dbManager.select(query)
        const viewMenuModels = result.map(record => new ViewMenuModel(record))
        return viewMenuModels
    }
}
