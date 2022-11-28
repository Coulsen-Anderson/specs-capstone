require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {SERVER_PORT} = process.env
const {sequelize} = require('./util/database')

const {User} = require('./models/user')
const {Post} = require('./models/post')
const {SavedPost} = require('./models/saved_post')

const {login, register} = require('./controllers/authCtrl') 
const {addPost, editPost, getAllPosts, addToMyPosts, getMyPosts} = require('./controllers/postCtrl')



const app = express()


app.use(express.json())
app.use(cors())

User.hasMany(Post)
Post.belongsTo(User)
User.hasMany(SavedPost)
Post.hasMany(SavedPost)
SavedPost.belongsTo(User)
SavedPost.belongsTo(Post)


//user endpoints
app.post('/register', register)
app.post('/login', login)



//songPost endpoints
app.post('/post/:userId', addPost)
app.post('/post', editPost)
app.get('/post', getAllPosts)
app.post('/mypost', addToMyPosts)
app.get('/mypost/:userId', getMyPosts)




//to reseed database, use {force: true}
sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, console.log(`Server is running on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))

