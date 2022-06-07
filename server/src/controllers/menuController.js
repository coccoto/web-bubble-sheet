const MenuModel = require(ROOT + '/server/src/models/menuModel')

module.exports = class {

    async getMstMenu() {
        const mstMenu = new MenuModel()
        await mstMenu.connect()
        return await mstMenu.getMstMenu()
    }

    async main() {
        return await this.getMstMenu()
    }
}