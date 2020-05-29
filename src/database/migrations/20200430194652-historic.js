'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('historic', {
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
            id_user_mechanical: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'user'
                }
            },
            service_type: {
                allowNull: false,
                type: Sequelize.STRING
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
                type: Sequelize.STRING
            },
            year: {
                allowNull: false,
                type: Sequelize.STRING
            },
            value: {
                allowNull: false,
                type: Sequelize.DECIMAL(6,2)
            },
            destination: {
                allowNull: false,
                type: Sequelize.JSON
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
        return queryInterface.dropTable('historic');
    }
};
