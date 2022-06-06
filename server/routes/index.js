module.exports = (app) => {
    app.route('*').get((req, res) => {
        res.sendFile(ROOT + '/client/dist/index.html')
        return
    })
}