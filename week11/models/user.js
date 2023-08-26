const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  likes: Number
});

const Post = mongoose.model('Post', postSchema);
