const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog_Post, Contributor, Upvote } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Blog_Post.findAll({
        where: {
            contributor_id: req.session.contributor_id
        },
        attributes: [
            'id',
            'blog_post_title',
            'blog_post_topic',
            'blog_post_date',
            'blog_post_time',
            'blog_post_blogText',
            [sequelize.literal('(SELECT COUNT(*) FROM upvote WHERE blog_post.id = upvote.blog_post_id)'), 'upvote_count']
        ],

    })
        .then(dbBlog_PostData => {
            // console.log(dbBlog_PostData, 'dbBlog_PostData logged');
            const posts = dbBlog_PostData.map(blog_post => blog_post.get({ plain: true }));
            // console.log(posts);
            res.render('profile', { posts, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;