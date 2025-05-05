const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const Book = sequelize.define('book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
  },

}, {
  tableName: 'book',
  underscored: true,
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

module.exports = Book;