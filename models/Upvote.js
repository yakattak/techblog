const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Upvote extends Model {}

Upvote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    contributor_id: {
      type: DataTypes.INTEGER,
        references: {
        model: 'contributor',
        key: 'id'
      }
    },
    blog_post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'upvote'
  }
);

module.exports = Upvote;
