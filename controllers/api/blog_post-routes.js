const router = require('express').Router();
const { Blog_Post, Upvote, Contributor } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {

  console.log('hi')
  Blog_Post.findAll()
    .then(dbBlog_PostData => res.json(dbBlog_PostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects =>   { "blog_post_topic": "Baseball", "blog_post_date": "5/25/2022", "blog_post_time": "19:00", "blog_post_venue": "East Side Park", "contributor_id": 2 },
  console.log(req.body);
  Blog_Post.create({
    blog_post_title: req.body.title,
    blog_post_topic: req.body.type,
    blog_post_date: req.body.date,
    blog_post_time: req.body.time,
    blog_post_venue: req.body.venue,
    contributor_id: req.session.contributor_id,
  })
    .then(dbBlog_PostData => res.json(dbBlog_PostData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Blog_Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbBlog_PostData => {
      if (!dbBlog_PostData) {
        res.status(404).json({ message: 'No blog_post found with this id!' });
        return;
      }
      res.json(dbBlog_PostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.put('/upvote', withAuth, (req, res) => {

    // custom static method created in models/Blog_Post.js
    Blog_Post.upvote({...req.body, contributor_id: req.session.contributor_id}, { Blog_Post, Upvote, Contributor })

      .then(updatedUpvoteData => res.json(updatedUpvoteData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
