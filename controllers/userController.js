const userSchema = require("../models/user")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose");
// const { use } = require("../routes/userRoutes")

const saltRounds = 10;


  const createUsers = async (req, res) => {
    try {
      const { email, firstName, lastName, age, gender, password } = req.body;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (!err) {
            const createUser = new userSchema({
              email,
              firstName,
              lastName,
              age,
              gender,
              password: hash
            });
            let response = await createUser.save();
            res.json({
              message: "getting all the user",
              data: response,
            });
          } else {
            res.json({
              message: err.message,
            });
          }
        });
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };
  const updateUsers = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(id);
      const { email, firstName, lastName, age, gender } = req.body;
      let user = await userSchema.findOne(id);
      user.email = email ? email : user.email;
      user.firstName = firstName ? firstName : user.firstName;
      user.lastName = lastName ? lastName : user.lastName;
      user.age = age ? age : user.age;
      user.gender = gender ? gender : user.gender;
      await user.save();
      res.json({
        message: "update User",
        user,
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };

  module.exports = {
    updateUsers,
    createUsers
  };