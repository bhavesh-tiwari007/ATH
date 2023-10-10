const {DataTypes} = require('sequelize');   
const sequelize = require('../db/index.js');


const User = sequelize.define('User', { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },

});

module.exports = User;