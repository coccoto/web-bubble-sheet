const Express = require('express')

/**
 * routes setup
 */
const Router = require(ROOT + '/server/routes/index')

const app = Express()

/**
 * static setup
 */
app.use(Express.static(ROOT + '/client/dist'))

/**
 * request option
 */
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

Router(app)
module.exports = app