const express = require("express")
const {createPost,updatePost,getPost} = require("../controllers/postController")
const authorization = require('../middleware/authoriztion')

const router = express.Router()

router.post("/post",authorization,createPost);
router.post("/updatepost",authorization,updatePost);
router.get("/getpost",authorization,getPost);

module.exports = router;