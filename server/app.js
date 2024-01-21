const Express = require('express')
const app = Express()

// Set up routes
const Router = require(ROOT + '/server/routes/index')
Router(app)

// Serve static files
app.use(Express.static(ROOT + '/client/dist'))

// Enable JSON parsing
app.use(Express.json())

// Enable URL-encoded data parsing
app.use(Express.urlencoded({ extended: true }))

module.exports = app
