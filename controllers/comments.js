const mongoose = require("mongoose");
const comments = require("../models/commentModel");

const createComment = async (req, res) => {
  const { username, content } = req.body;

  if (!username || !content) {
    return res.status(400).json({ error: "please fill in all fields" });
  }

  try {
    const COMMENT = await comments.create({
      username,
      content,
    });

    if (COMMENT) {
      return res.status(200).json({ message: "Comment created successfully" });
    }
  } catch (error) {
    console.error(error);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

const getComments = async (req, res) => {
  try {
    const COMMENTS = await comments.find();

    if (!COMMENTS) {
      return res
        .status(200)
        .json({ message: "There aren't any comments here." });
    }

    return res.status(200).json({data: COMMENTS})
  } catch (error) {
    console.error(error);
    if (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

module.exports = {
  createComment,
  getComments
};
