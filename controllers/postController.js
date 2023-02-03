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

module.exports = createPost;