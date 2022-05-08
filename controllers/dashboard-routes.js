const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog_Post, Player, Attend } = require('../models');
const withAuth = require('../utils/auth');

// get all blog_posts for dashboard
router.get('/', withAuth, (req, res) => {
    Blog_Post.findAll({
        attributes: [
          'id',
          'blog_post_title',
          'blog_post_type',
          'blog_post_date',
          'blog_post_time',
          'blog_post_venue',
          [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE blog_post.id = attend.blog_post_id)'), 'attend_count']
        ]
      })
        .then(dbBlog_PostData => {

          const blog_post = dbBlog_PostData.map(blog_post => blog_post.get({ plain: true }));

          const sortedBlog_Posts = blog_post.sort(function(a, b) {
            const nameA = a.blog_post_date;
            const nameB = b.blog_post_date;
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
          res.render('dashboard', { blog_post, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;

