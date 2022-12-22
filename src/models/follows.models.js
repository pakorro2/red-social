const { DataTypes } = require('sequelize')

const Users = require('./users.models')

const db = require('../utils/database')

const Follows = db.define('follows', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNullValues: false,
    field: 'follower',
    comment: 'Follower',
    references: {
      key: 'id',
      model: Users
    },
  },
  userId2: {
    type: DataTypes.UUID,
    allowNullValues: false,
    field: 'followed',
    comment: 'Followed',
    references: {
      key: 'id',
      model: Users
    }
  }
})

//? Validar que no se repitan los follows
// {
//   uniqueKeys:{
//     follows_unique:{
//       fields:['userId', 'userId2']
//     }
//   }
// }

module.exports = Follows
