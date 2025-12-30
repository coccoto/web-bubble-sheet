const MenuListService = require('../services/MenuListService')
const { dbManager } = require('../../lib/database')

module.exports = class {

    constructor(req, res) {
        this.req = req
        this.res = res
    }

    async main() {
        await dbManager.connect()
        try {
            const menuListService = new MenuListService(dbManager)
            const result = await menuListService.getViewMenu()
            return this.res.json({ result })
        } finally {
            await dbManager.disconnect()
        }
    }
}
