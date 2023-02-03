const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    email:{
        type:"String",
        required: true,
    },
    firstName:{
        type:"String",
        required: true
    },
    postcontent:{
        type:"String",
        required: true,
    },
    postdetail:{
        type:"String",
        required: true,
    },
});
const Post = mongoose.model("posts",PostSchema);
module.exports = Post;