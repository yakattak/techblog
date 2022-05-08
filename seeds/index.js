const seedPlayers = require('./player-seeds');
const seedBlog_Posts = require('./blog_post-seeds');
const seedAttendance = require('./attend-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedPlayers();
  console.log('Players Seeded');

  await seedBlog_Posts();
  console.log('Blog_Posts Seeded');

  await seedAttendance();
  console.log('Attendance Seeded');

  process.exit(0);
};

seedAll();