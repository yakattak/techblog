const { Attend } = require('../models');

const attenddata = [
  {
    player_id: 1,
    blog_post_id: 1
  },
  {
    player_id: 1,
    blog_post_id: 3
  },
  {
    player_id: 1,
    blog_post_id: 5
  },
  {
    player_id: 1,
    blog_post_id: 6
  },
  {
    player_id: 2,
    blog_post_id: 1
  },
  {
    player_id: 2,
    blog_post_id: 2
  },
  {
    player_id: 2,
    blog_post_id: 4
  },
  {
    player_id: 2,
    blog_post_id: 6
  },
  {
    player_id: 3,
    blog_post_id: 1
  },
  {
    player_id: 3,
    blog_post_id: 5
  },
  {
    player_id: 3,
    blog_post_id: 6
  },
  {
    player_id: 4,
    blog_post_id: 1
  },
  {
    player_id: 4,
    blog_post_id: 3
  },
  {
    player_id: 5,
    blog_post_id: 2
  },
  {
    player_id: 5,
    blog_post_id: 4
  },
  {
    player_id: 5,
    blog_post_id: 6
  },
];

const seedAttendance = () => Attend.bulkCreate(attenddata);

module.exports = seedAttendance;