const seedContributors = require('./contributor-seeds');
const seedBlog_Posts = require('./blog_post-seeds');
const seedUpvoteance = require('./upvote-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedContributors();
  console.log('Contributors Seeded');

  await seedBlog_Posts();
  console.log('Blog_Posts Seeded');

  await seedUpvoteance();
  console.log('Upvoteance Seeded');

  process.exit(0);
};

seedAll();