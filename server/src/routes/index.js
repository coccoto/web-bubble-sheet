const { logger } = require('@coccoto/node-logmanager')
const MenuListController = require('../controllers/MenuListController')

module.exports = (app) => {

    app.route(['/']).get((req, res) => {
        res.sendFile(ROOT + '/client/dist/index.html')
    })

    app.route(['/api/menu-list']).post(async (req, res) => {
        try {
            const menuListController = new MenuListController(req, res)
            await menuListController.main()
        } catch (error) {
            logger.error(`Error in ${req.url}: ${error.message}`)
            if (!res.headersSent) {
                res.status(500).json({ error: 'Internal Server Error' })
            }
        }
    })
}
