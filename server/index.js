require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')


const app = express()


app.use(express.json())
app.use(cors())

sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, console.log(`Server is running on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))

