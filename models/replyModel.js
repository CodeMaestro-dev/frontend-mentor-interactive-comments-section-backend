const mongoose = require("mongoose");

const replySchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    score: { type: Number },
    username: { type: String, required: true },
    replyingTo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const replies = mongoose.model("reply", replySchema);

module.exports = replies;