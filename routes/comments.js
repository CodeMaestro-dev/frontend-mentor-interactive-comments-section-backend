const express = require("express");
const { createComment, getComments } = require("../controllers/comments");
const { createReply } = require("../controllers/reply");
const router = express.Router();

router.post("/create-comment", createComment)
router.get("/comments", getComments)
router.post("/create-reply", createReply)

module.exports = router;
