const { Blog_Post } = require('../models');

const blog_postdata = [
  {
    blog_post_title: "Basketball Blog_Post",
    blog_post_topic: "Basketball",
    blog_post_date: "2022-09-05",
    blog_post_time: "12:00",
    blog_post_venue: "Thompkins Square Park",
    contributor_id: 1
  },
  {
    blog_post_title: "Basketball blog_post in Central Park",
    blog_post_topic: "Basketball",
    blog_post_date: "2022-04-08",
    blog_post_time: "16:00",
    blog_post_venue: "Central Park",
    contributor_id: 4
  },
  {
    blog_post_title: "Softball blog_post",
    blog_post_topic: "Softball",
    blog_post_date: "2022-07-12",
    blog_post_time: "19:00",
    blog_post_venue: "Buddy Keaton Field",
    contributor_id: 3
  },
  {
    blog_post_title: "Flag Football blog_post late night",
    blog_post_topic: "Flag Football",
    blog_post_date: "2022-04-15",
    blog_post_time: "20:30",
    blog_post_venue: "Randalls Island",
    contributor_id: 2
  },
  {
    blog_post_title: "Basketball blog_post",
    blog_post_topic: "Basketball",
    blog_post_date: "2022-02-18",
    blog_post_time: "18:00",
    blog_post_venue: "W 4th Street",
    contributor_id: 5
  },
  {
    blog_post_title: "Softball blog_post in Central Park",
    blog_post_topic: "Softball",
    blog_post_date: "2022-04-20",
    blog_post_time: "11:00",
    blog_post_venue: "Central Park",
    contributor_id: 6
  },
];

const seedBlog_Posts = () => Blog_Post.bulkCreate(blog_postdata);

module.exports = seedBlog_Posts;