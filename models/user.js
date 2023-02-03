const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email:{
        type:"String",
        required: true,
    },
    password:{
        type:"String",
        required: true,
    },
    firstName:{
        type:"String",
        required: true
    },
    lastName:{
        type:"String",
        required: true,
    },
    age:{
        type:"String",
        required: true,
    },
    gender:{
        type:"String",
        enum:["MALE","FEMALE","OTHER"],
        required: true,
    },
});
const User = mongoose.model("user",UserSchema);
module.exports = User;