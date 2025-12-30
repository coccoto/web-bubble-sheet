const Express = require('express')
const app = Express()

// Enable JSON parsing
app.use(Express.json())

// Enable URL-encoded data parsing
app.use(Express.urlencoded({ extended: true }))

// Serve static files
app.use(Express.static(ROOT + '/client/dist'))

// Set up routes
const Router = require(ROOT + '/server/src/routes')
Router(app)

module.exports = app
