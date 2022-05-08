const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attend extends Model {}

Attend.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    player_id: {
      type: DataTypes.INTEGER,
        references: {
        model: 'player',
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
    modelName: 'attend'
  }
);

module.exports = Attend;
