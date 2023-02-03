const express = require("express");
const {
    getUsers,
    createUsers,
    updateUsers,
    getUser,
} = require("../controllers/userController");
const authorization = require("../middleware/authoriztion");

const router = express.Router();
router.post("/create", createUsers);
router.get("/get",authorization, getUser);
router.put("/update/:id", updateUsers);
router.get("/all",authorization, getUsers);
module.exports = router;