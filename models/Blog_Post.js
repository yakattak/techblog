const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Blog_Post extends Model {
        static attend(body, models) {
          return models.Attend.create({
            player_id: body.player_id,
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
                
                [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE blog_post.id = attend.blog_post_id)'), 'attend_count']
              ],
              // include: [

              //   [sequelize.literal('(SELECT COUNT(*) FROM attend WHERE blog_post.id = attend.blog_post_id)'), 'attend_count']
              // //   {
              // //       model: models.Player,
              // //       attributes: ['username']
              // //   }
              // ],
              // order: [
              //   [sequelize.literal('attend_count'), 'DESC']
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
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'player',
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