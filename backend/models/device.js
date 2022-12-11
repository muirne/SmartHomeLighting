const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  item: { type: String, required: true },
  location: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
