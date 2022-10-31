const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8080

const db = require('./config/db')
const route = require('./routes')
app.use(bodyParser.json())
app.use(bodyParser.raw())

// Connect to db
db.connect()


// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

