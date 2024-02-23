const { DataTypes } = require('sequelize')
const database = require('../database')

const User = database.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'normal'
    }
})

module.exports = User