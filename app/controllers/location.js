module.exports = (express) => {

    const Location = [];

    Location.getList = (req, res) => {
        
        let constant = require('../../lib/constant');

        res.send(constant.LOCALE_LIST);

    };

    return Location;

}