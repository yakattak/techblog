// import all models
const Blog_Post = require('./Blog_Post');
const Contributor = require('./Contributor');
const Upvote = require('./Upvote');
const Comment = require('./Comment');
// const Comment = require('./Comment');

// create associations
Contributor.hasMany(Blog_Post, {
        foreignKey: 'contributor_id'
 });

 Contributor.hasMany(Blog_Post, {
    foreignKey: 'contributor_id'
  });
  
  Blog_Post.belongsTo(Contributor, {
    foreignKey: 'contributor_id',
    onDelete: 'SET NULL'
  });
  
  Contributor.belongsToMany(Blog_Post, {
    through: Upvote,
    as: 'upvote_blog_posts',
  
    foreignKey: 'contributor_id',
    onDelete: 'SET NULL'
  });
  
  Blog_Post.belongsToMany(Contributor, {
    through: Upvote,
    as: 'upvote_blog_posts',
    foreignKey: 'blog_post_id',
    onDelete: 'SET NULL'
  });
  
  Upvote.belongsTo(Contributor, {
    foreignKey: 'contributor_id',
    onDelete: 'SET NULL'
  });
  
  Upvote.belongsTo(Blog_Post, {
    foreignKey: 'blog_post_id',
    onDelete: 'SET NULL'
  });
  
  Contributor.hasMany(Upvote, {
    foreignKey: 'contributor_id'
  });
  
  Blog_Post.hasMany(Upvote, {
    foreignKey: 'blog_post_id'
  });
  
  Comment.belongsTo(Contributor, {
    foreignKey: 'contributor_id',
    onDelete: 'SET NULL'
  });
  
  Comment.belongsTo(Blog_Post, {
    foreignKey: 'blog_post_id',
    onDelete: 'SET NULL'
  });
  
  Contributor.hasMany(Comment, {
    foreignKey: 'contributor_id',
    onDelete: 'SET NULL'
  });
  
  Blog_Post.hasMany(Comment, {
    foreignKey: 'blog_post_id'
  });

module.exports = { Contributor, Blog_Post, Upvote };
