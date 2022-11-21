const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    SavedPost: sequelize.define('saved_posts', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }

    })
}