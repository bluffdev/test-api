const express = require('express')
const app = express()
const users = require('./routes/users')
const connectDB = require('./db/connect')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const URL = process.env.MONGODB_URI

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// routes
app.use('/api/v1/users', users)

// keep an eye on how async affects this 
const start = async () => {
    try {
        await connectDB(URL)
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    } catch (error) {
        console.log("fuck")
    }
}

start()