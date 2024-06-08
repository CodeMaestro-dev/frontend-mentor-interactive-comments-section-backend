const express = require("express");
const { createComment, getComments } = require("../controllers/comments");
const router = express.Router();

router.post("/create-comment", createComment)
router.get("/comments", getComments)

module.exports = router;
