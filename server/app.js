require('module-alias/register')

const Express = require('express')
const app = Express()

// Enable JSON parsing
app.use(Express.json())

// Enable URL-encoded data parsing
app.use(Express.urlencoded({ extended: true }))

// Database middleware
const { databaseMiddleware } = require('@/src/middlewares/databaseMiddleware')
app.use('/api', databaseMiddleware)

// Set up routes
const Router = require('@/src/routes')
Router(app)

module.exports = app
