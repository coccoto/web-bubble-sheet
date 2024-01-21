const BaseController = require(ROOT + '/server/core/BaseController')
const MenuListService = require(ROOT + '/server/src/services/MenuListService')

module.exports = class extends BaseController {

    constructor(req, res) {
        super()

        this.req = req
        this.res = res
    }

    async main() {
        try {
            await this.dbManager.connect()

            const menuListService = new MenuListService(this.dbManager)
            const result = await menuListService.getViewMenu()
            return this.res.json({ result: result })

        } catch (error) {
            throw error

        } finally {
            await this.dbManager.disconnect()
        }
    }
}
