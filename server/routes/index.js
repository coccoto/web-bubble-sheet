const { logger } = require('@coccoto/node-logmanager')
const MenuListController = require(ROOT + '/server/src/controllers/MenuListController')

module.exports = (app) => {
    
    app.route(['/']).get((req, res) => {
        res.sendFile(ROOT + '/client/dist/index.html')
        return
    })

    app.route(['/api/fetch/menu-list']).post(async (req, res) => {
        const endpoint = req.url
        try {
            const menuListController = new MenuListController(req, res)
            res = await menuListController.main()
            return
        } catch (error) {
            logger.error(`Error in ${endpoint} route. Error: ${error.message}`)
            return
        } 
    })
}
