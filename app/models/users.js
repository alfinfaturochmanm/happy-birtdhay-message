let Sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {

    return sequelize.define('users', {
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        birthday: {
            type: Sequelize.DATE
        },
        location: {
            type: Sequelize.STRING
        },
        send_datetime: {
            type: Sequelize.DATE
        },
        created_datetime: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.NUMBER
        },
    }, {
        freezeTableName: true,
        timestamps: false
    });

}