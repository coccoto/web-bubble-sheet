const path = require('path')
const ViewMenuModel = require('@/src/models/ViewMenuModel')

module.exports = class {

    constructor(database) {
        this.database = database
    }

    async getViewMenu() {
        const queryPath = path.join(__dirname, '../queries/selectMenuList.sql')
        const query = await this.database.readFile(queryPath)
        const result = await this.database.select(query)
        const viewMenuModels = result.map(record => new ViewMenuModel(record))
        return viewMenuModels
    }
}
