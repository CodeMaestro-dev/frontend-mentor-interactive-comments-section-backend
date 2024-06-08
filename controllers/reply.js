const mongoose = require("mongoose");
const comments = require("../models/commentModel");
const replies = require("../models/replyModel");

const createReply = async (req, res) => {
  const { content, username, replyingTo } = req.body;

  if (!content || !username || !replyingTo) {
    return res.status(400).json({ error: "Please fill out all fields" });
  }

  try {
    const REPLIYING_TO = await comments.findOne({ _id: replyingTo });

    const _id = REPLIYING_TO._id;

    const REPLY = await replies.create({
      content,
      username,
      replyingTo,
    });

    if (REPLIYING_TO) {
      await comments.updateOne({ _id }, { $addToSet: { replies: REPLY } });
      return res.status(200).json({ message: "Reply created successfully" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createReply,
};
