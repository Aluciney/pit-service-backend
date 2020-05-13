'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('vehicle', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_user: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'user'
                }
            },
            type: {
                allowNull: false,
                type: Sequelize.STRING
            },
            brand: {
                allowNull: false,
                type: Sequelize.STRING
            },
            model: {
                allowNull: false,
                type: Sequelize.STRING
            },
            board: {
                allowNull: false,
                unique : true,
                type: Sequelize.STRING
            },
            year: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('vehicle');
    }
};