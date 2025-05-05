const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('koa-server', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql', // use mysql
  port: 3306,
  dialectOptions: {
    charset: 'utf8mb4',
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
  logging:false
});

module.exports = sequelize;