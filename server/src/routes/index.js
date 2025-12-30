const path = require('path')
const { logger } = require('../../lib/logger')
const MenuListController = require('../controllers/MenuListController')

module.exports = (app) => {

    app.route(['/']).get((_req, res) => {
        const indexPath = path.join(__dirname, '..', '..', '..', 'client', 'dist', 'index.html')
        res.sendFile(indexPath)
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
