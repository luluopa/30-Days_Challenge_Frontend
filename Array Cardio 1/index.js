const express = require('express')
const router = require('./src/routers')
const port = 3000

const app = express()

//setting up the router
app.use(router.router)

app.listen(port, () => {
    console.log("App is running on port: " + port)
})

module.exports = {
    app
}