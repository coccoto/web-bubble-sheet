require('module-alias/register')

const Express = require('express')
const path = require('path')
const app = Express()

// Serve static files from client/dist
const distPath = path.resolve(__dirname, '..', 'client', 'dist')
app.use(Express.static(distPath))

// Enable JSON parsing
app.use(Express.json())

// Enable URL-encoded data parsing
app.use(Express.urlencoded({ extended: true }))

// Database middleware
const { databaseMiddleware, databaseCleanupMiddleware } = require('@/src/middlewares/databaseMiddleware')
app.use('/api', databaseMiddleware)
app.use('/api', databaseCleanupMiddleware)

// Set up routes
const Router = require('@/src/routes')
Router(app)

module.exports = app
