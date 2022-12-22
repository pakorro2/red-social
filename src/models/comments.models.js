const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Posts = require('./posts.models')
const Users = require('./users.models')

const Comments = db.define('comments', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: 'id',
      model: Users
    }
  },
  postId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      key: 'id',
      model: Posts
    }
  }
})


module.exports = Comments