// import all models
const Blog_Post = require('./Blog_Post');
const Player = require('./Player');
const Attend = require('./Attend');
const Comment = require('./Comment');
// const Comment = require('./Comment');

// create associations
Player.hasMany(Blog_Post, {
        foreignKey: 'player_id'
 });

 Player.hasMany(Blog_Post, {
    foreignKey: 'player_id'
  });
  
  Blog_Post.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Player.belongsToMany(Blog_Post, {
    through: Attend,
    as: 'attend_blog_posts',
  
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Blog_Post.belongsToMany(Player, {
    through: Attend,
    as: 'attend_blog_posts',
    foreignKey: 'blog_post_id',
    onDelete: 'SET NULL'
  });
  
  Attend.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Attend.belongsTo(Blog_Post, {
    foreignKey: 'blog_post_id',
    onDelete: 'SET NULL'
  });
  
  Player.hasMany(Attend, {
    foreignKey: 'player_id'
  });
  
  Blog_Post.hasMany(Attend, {
    foreignKey: 'blog_post_id'
  });
  
  Comment.belongsTo(Player, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(Blog_Post, {
    foreignKey: 'blog_post_id',
    onDelete: 'SET NULL'
  });
  
  Player.hasMany(Comment, {
    foreignKey: 'player_id',
    onDelete: 'SET NULL'
  });
  
  Blog_Post.hasMany(Comment, {
    foreignKey: 'blog_post_id'
  });

module.exports = { Player, Blog_Post, Attend };
