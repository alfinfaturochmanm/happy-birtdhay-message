// const { default: Users } = require('../models/users');

module.exports = (express) => {

    const User = [];

    let sequelize = require("sequelize");
    let moment = require('moment-timezone');

    User.addUser = async (req, res) => {

        let Sequelize = require("sequelize");

        let sequelize = new Sequelize('greeting-cards', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let UsersModels = require("../models/users")(sequelize, Sequelize);

        process.env.TZ = 'Asia/Jakarta'; // Depends on server time

        let rbody = req.body;

        let send_date = new Date(rbody.birthday);
        send_date.setFullYear(new Date().getFullYear())
        send_date.setHours(09);
        console.log('will send date on : ' + new Date(send_date).toLocaleDateString() + ' ' + new Date(send_date).toLocaleTimeString());

        send_date = formatDate(send_date);

        var fmt = "MM/DD/YYYY h:mm:ss A";
        var m = moment.tz(send_date, fmt, rbody.location);
        m.utc();
        var s = m.format(fmt);

        console.log('will send on server time : ' + new Date(s).toLocaleDateString() + ' ' + new Date(s).toLocaleTimeString());
        console.log('current server time : ' + new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString());

        let data = {
            'first_name': rbody.first_name,
            'last_name': rbody.last_name,
            'birthday': rbody.birthday,
            'location': rbody.location,
            'send_datetime': new Date(s).toLocaleDateString() + ' ' + new Date(s).toLocaleTimeString(),
            'created_datetime': new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
            'status': 0,
            'letter': 'Hey, ' + rbody.first_name + rbody.last_name + ' it s your birthday'
        }

        const UsersResult = await UsersModels.findAll({
            where: {
                first_name: rbody.first_name,
                last_name: rbody.last_name,
            }
        });

        if (UsersResult.length == 0) {

            UsersModels.create(data).then(function (users) {
                if (users) {
                    res.send(users);
                } else {
                    res.status(400).send('Error in insert new record');
                }
            });

        } else {

            res.status(400).send('User exists');

        }
        // res.send(UsersResult);
        // console.log(UsersResult);


        // let data_return = [];
        // res.send(data);

    };

    User.deleteUser = (req, res) => {

        let data_return = [];
        res.send(data_return);

    };

    function formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? '0' + hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
    }

    return User;

}