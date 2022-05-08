const router = require('express').Router();
const userRoutes = require('./user-routes');
const blog_postRoutes = require('./blog_post-routes');
const upvoteRoutes = require('./upvote-routes')

router.use('/users', userRoutes);
router.use('/blog_posts', blog_postRoutes);
router.use('/upvote', upvoteRoutes);

module.exports = router;
