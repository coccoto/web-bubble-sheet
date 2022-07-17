const MenuModel = require(ROOT + '/server/src/models/menuModel')

module.exports = class {

    async getMstMenu() {
        const menuModel = new MenuModel()
        await menuModel.connect()
        return await menuModel.getMstMenu()
    }

    async main() {
        return await this.getMstMenu()
    }
}