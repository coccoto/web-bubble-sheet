const ViewMenuModel = require(ROOT + '/server/src/models/ViewMenuModel')

module.exports = class {

    constructor(dbManager) {
        this.dbManager = dbManager
    }

    async getViewMenu() {
        const query = await this.dbManager.readFile(__dirname + '/../queries/selectMenuList.sql')
        const result = await this.dbManager.select(query)
        const viewMenuModels = result.map(record => new ViewMenuModel(record))
        return viewMenuModels
    }
}
