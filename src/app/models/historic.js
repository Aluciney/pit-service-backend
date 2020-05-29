'use strict';
module.exports = (sequelize, DataTypes) => {
    const historic = sequelize.define('historic', {
        id_user: DataTypes.INTEGER,
        id_user_mechanical: DataTypes.INTEGER,
        service_type: DataTypes.STRING,
        type: DataTypes.STRING,
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        board: DataTypes.STRING,
        year: DataTypes.STRING,
        value: DataTypes.DECIMAL,
        destination: DataTypes.JSON,
    }, {});
    historic.associate = function (models) {
        // associations can be defined here
    };
    
    return historic;
};