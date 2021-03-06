const Sequelize = require('sequelize');
const db = require('../db');

const UserTopic = db.define('userTopic', {
  proficiency: {
    type: Sequelize.ENUM,
    values: ['Beginner', 'Novice', 'Intermediate', 'Advanced'],
    defaultValue: 'Beginner',
    allowNull: false
  }
});

module.exports = UserTopic;
