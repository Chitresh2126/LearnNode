const express = require("express");
const {
    createUsers,
    updateUsers
} = require("../controllers/userController");
const authorization = require("../middleware/authoriztion");

const router = express.Router();
router.post("/create", createUsers);
router.put("/update/:id", updateUsers);
module.exports = router;