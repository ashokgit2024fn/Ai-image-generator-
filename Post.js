const  express = require('express')
const routes1=express.Router()
const {createPost,getAllPosts}=require('../controller/Posts.js')

routes1.post('/createPost',createPost)

routes1.get('/getAllPosts',getAllPosts)




module.exports=routes1