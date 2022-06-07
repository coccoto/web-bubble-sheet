const MenuController = require(ROOT + '/server/src/controllers/menuController')

module.exports = (app) => {
    app.route('/').get((req, res) => {
        res.sendFile(ROOT + '/client/dist/index.html')
        return
    })

    app.route('/api/getMstMenu').get(async (req, res) => {
        const menuController = new MenuController()
        const result = await menuController.main()
        res.json({result: result})
        return
    })
}