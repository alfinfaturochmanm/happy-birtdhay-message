module.exports = (app) => {

    const bodyParser = require('body-parser')
    const expressValidator = require('express-validator')

    var UsersControllers = require('../controllers/User')(app);
    var LocationControllers = require('../controllers/location')(app);
    // var UserMiddlewares = require('../middlewares/user')(app);
    // var Auth = require('../middleware/Auth')
    // Auth = Auth();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(expressValidator())
    
    app.get("/location", LocationControllers.getList);
    app.post("/users", UsersControllers.addUser);
    app.delete("/users", UsersControllers.deleteUser);
}