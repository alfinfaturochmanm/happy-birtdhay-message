let Sequelize = require("sequelize");


module.exports = (express) => {

    return db = new Sequelize('greeting-cards', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });

}