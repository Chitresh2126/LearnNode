const postSchema = require("../models/post")
const mongoose = require("mongoose");

const createPost = async (req,res) => {
    try{
        const{email,firstName,postcontent,postdetail} = req.body;
        // to save in database in mongoose
        const createPost = new postSchema({
            email,
            firstName,
            postcontent,
            postdetail
          });
          let response = await createPost.save();
          res.json({
            message:"Post is been created",
            data: response
          });
    }catch (err){
        res.json({
            message: err.message,
        });
    }
}
const updatePost = async (req,res) => {
    try{
        const{email,firstName,postcontent,postdetail} = req.body;
        let user =  await postSchema.findOne({_id: req.body.id})
        user.firstName = firstName ? firstName : user.firstName;
        user.postcontent = postcontent ? postcontent : user.postcontent;
        user.postdetail = postdetail ? postdetail : user.postdetail;
        let users=user.save()
        
       
          res.json({
            message:"Update Post",
            data: users
          });
    }catch (err){
        res.json({
            message: err.message,
        });
    }
}
const getPost = async (req,res) => {
    try{
        let user =  await postSchema.find({email: req.body.email})
          res.json({
            message:"Update Post",
            data: user
          });
    }catch (err){
        res.json({
            message: err.message,
        });
    }
}

module.exports = {createPost,updatePost,getPost};