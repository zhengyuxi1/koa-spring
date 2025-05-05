const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING,
  },

}, {
  tableName: 'user',
  underscored: true,
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

module.exports = User;