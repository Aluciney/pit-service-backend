'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        avatar_url: DataTypes.STRING
    }, {});
    user.associate = function (models) {
        // associations can be defined here
    };
    
    return user;
};