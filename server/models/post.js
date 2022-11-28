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
        songTitle: DataTypes.STRING,
        album: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        comment: DataTypes.STRING

    })
}