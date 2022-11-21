const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    Post: sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        songId: DataTypes.STRING,
        comment: DataTypes.STRING

    })
}