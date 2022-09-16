const Comment = require("../models/Comment");

const Post = require('../models/Post')


module.exports = {
  createComment: async (req, res) => {

    console.log(req.body)
        try {
            // Upload image to cloudinary
      
            const result = await Comment.create({
              comment: req.body.comment,
              likes: 0,
              post: req.params.id,
            });

            console.log(result)
            console.log("comment has been added!");
            res.redirect("/post/" + req.params.id);
          } catch (err) {
            console.log(err);
          }
        },
}
