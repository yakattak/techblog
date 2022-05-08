const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Blog_Post extends Model {
        static upvote(body, models) {
          return models.Upvote.create({
            contributor_id: body.contributor_id,
            blog_post_id: body.blog_post
        })
        .then(() => {
            return Blog_Post.findOne({
                 where: {
                 id: body.blog_post
              },
              attributes: [
                'id',
                'blog_post_title',
                'blog_post_type',
                'blog_post_date',
                'blog_post_time',
                'blog_post_venue',
                
                [sequelize.literal('(SELECT COUNT(*) FROM upvote WHERE blog_post.id = upvote.blog_post_id)'), 'upvote_count']
              ],
              // include: [

              //   [sequelize.literal('(SELECT COUNT(*) FROM upvote WHERE blog_post.id = upvote.blog_post_id)'), 'upvote_count']
              // //   {
              // //       model: models.Contributor,
              // //       attributes: ['username']
              // //   }
              // ],
              // order: [
              //   [sequelize.literal('upvote_count'), 'DESC']
              // ]
            },
          )
      })
    }
  }

// create fields/columns for Post model
Blog_Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    blog_post_title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    blog_post_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_post_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_post_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_post_venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contributor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'contributor',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_post'
  }
);

module.exports = Blog_Post;