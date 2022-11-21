require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')

const {User} = require('./models/user')
const {Post} = require('./models/post')
const {SavedPost} = require('./models/saved_post')


const app = express()


app.use(express.json())
app.use(cors())

User.hasMany(Post)
Post.belongsTo(User)
User.hasMany(SavedPost)
Post.hasMany(SavedPost)
SavedPost.belongsTo(User)
SavedPost.belongsTo(Post)

sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, console.log(`Server is running on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))

