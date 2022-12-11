//express router 
const express = require("express");
const checkAuth = require("../middleware/check-auth");
const Post = require("../models/device");

const router = express.Router();

router.post("", checkAuth, (req, res, next) => {
  const post = new Post({
   item : req.body.item,
    location: req.body.location
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Item added successfully",
      postId: createdPost._id
    });
  });
});

router.put("/:id",checkAuth, (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    item: req.body.item,
    location: req.body.location
  });
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});

router.get("", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Items fetched successfully!",
      posts: documents
    });
  });
});

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Item not found!" });
    }
  });
});

router.delete("/:id", checkAuth, (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Item deleted!" });
  });
});

module.exports = router;
