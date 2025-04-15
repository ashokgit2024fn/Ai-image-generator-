const Post=require('../model/Post.js')
const cloudinary=require('cloudinary').v2

cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret:'',
});

// Get all posts
 const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.log(error)
  }
};

// Create new post
 const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.secure_url,
    });

    return res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
  }
};


module.exports={createPost,getAllPosts}