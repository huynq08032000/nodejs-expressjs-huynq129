const express = require('express')
const app = express()
const port = 8080

const db = require('./config/db')
const route = require('./routes')

// Connect to db
db.connect()


// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

