const { Upvote } = require('../models');

const upvotedata = [
  {
    contributor_id: 1,
    blog_post_id: 1
  },
  {
    contributor_id: 1,
    blog_post_id: 3
  },
  {
    contributor_id: 1,
    blog_post_id: 5
  },
  {
    contributor_id: 1,
    blog_post_id: 6
  },
  {
    contributor_id: 2,
    blog_post_id: 1
  },
  {
    contributor_id: 2,
    blog_post_id: 2
  },
  {
    contributor_id: 2,
    blog_post_id: 4
  },
  {
    contributor_id: 2,
    blog_post_id: 6
  },
  {
    contributor_id: 3,
    blog_post_id: 1
  },
  {
    contributor_id: 3,
    blog_post_id: 5
  },
  {
    contributor_id: 3,
    blog_post_id: 6
  },
  {
    contributor_id: 4,
    blog_post_id: 1
  },
  {
    contributor_id: 4,
    blog_post_id: 3
  },
  {
    contributor_id: 5,
    blog_post_id: 2
  },
  {
    contributor_id: 5,
    blog_post_id: 4
  },
  {
    contributor_id: 5,
    blog_post_id: 6
  },
];

const seedUpvoteance = () => Upvote.bulkCreate(upvotedata);

module.exports = seedUpvoteance;