const router = require('express').Router();
const userRoutes = require('./user-routes');
const blog_postRoutes = require('./blog_post-routes');
const attendRoutes = require('./attend-routes')

router.use('/users', userRoutes);
router.use('/blog_posts', blog_postRoutes);
router.use('/attend', attendRoutes);

module.exports = router;
