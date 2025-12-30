const MenuListService = require('../services/MenuListService')

module.exports = class {

    constructor(req, res) {
        this.req = req
        this.res = res
    }

    async main() {
        const menuListService = new MenuListService(this.req.database)
        const result = await menuListService.getViewMenu()
        return this.res.json({ result })
    }
}
