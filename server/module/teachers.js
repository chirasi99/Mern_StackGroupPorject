const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  Topic: {
    type: String,
    required: true,
  },
  Description:{
    type: String,
    required: true,
  },
  PostCategory: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", postSchema);
