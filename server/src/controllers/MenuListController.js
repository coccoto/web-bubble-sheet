const MenuListService = require(ROOT + '/server/src/services/MenuListService')
const { dbManager } = require(ROOT + '/server/lib/dbManager.js')

module.exports = class {

    constructor(req, res) {
        this.req = req
        this.res = res
    }

    async main() {
        try {
            await dbManager.connect()

            const menuListService = new MenuListService(dbManager)
            const result = await menuListService.getViewMenu()
            return this.res.json({ result: result })

        } catch (error) {
            throw error

        } finally {
            await dbManager.disconnect()
        }
    }
}
