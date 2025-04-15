const  express = require('express')
const routes2=express.Router()
const generateImage=require('../controller/Generateimage.js')

routes2.post("/", generateImage);


module.exports=routes2