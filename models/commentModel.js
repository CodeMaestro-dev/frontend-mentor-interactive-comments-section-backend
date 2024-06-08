const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    score: { type: Number },
    username: { type: String, required: true },
    replies: { type: Array },
  },
  {
    timestamps: true,
  }
);

const comments = mongoose.model("comments", commentSchema);

module.exports = comments;
