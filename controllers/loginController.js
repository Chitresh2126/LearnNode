const userSchema = require("../models/user")
const bcrypt = require("bcrypt")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await userSchema.findOne({ email: email });
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          var token = jwt.sign(
            { email: user.email, id: user._id, firstName: user.firstName },
            process.env.SECRETKEY
          );
          res.json({
            message: "login in",
            token,
          });
        } else {
          res.json({
            message: "login in Error",
            error: err.message,
          });
        }
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  };
  module.exports = login;