const { Post } = require("../models/post");
const { User } = require("../models/user");
const { SavedPost } = require("../models/saved_post");

module.exports = {
  addPost: async (req, res) => {
    try {
      const { songTitle, album, artist, genre, albumCover, comment } = req.body;
      const { userId } = req.params;

      await Post.create({ songTitle, album, artist, genre, albumCover, comment, userId });

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },

  editPost: async (req, res) => {
    try {
      const { Postid, songTitle, album, artist, genre, albumCover, comment } = req.body;
      await Post.update(
        { songTitle, album, artist, genre, albumCover, comment },
        { where: { id: +Postid } }
      );

      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const post = await Post.findAll({
        include: [
          {
            model: User,
            required: true,
            attributes: ["username"],
          },
        ],
      });
      res.status(200).send(post);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },

  addToMyPosts: async (req, res) => {
    try {
      const { userId, postId } = req.body;

      await SavedPost.create({ userId, postId });
        res.sendStatus(200)

    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },

  getMyPosts: async (req, res) => {
    try {
        const {userId} = req.params
        const posts = await SavedPost.findAll({
            where: {userId},
            include: [{
                model: Post,
                require: true,
                include: {
                    model: User,
                    required: true,
                    attributes: ["username"],
                  }
            }]
        })
        res.status(200).send(posts)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
  }
},

deleteSavedPost: async (req, res) => {

}
}
