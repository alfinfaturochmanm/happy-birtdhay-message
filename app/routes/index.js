module.exports = (app) => {

    const bodyParser = require('body-parser')

    var UsersControllers = require('../controllers/User')(app);
    // var Auth = require('../middleware/Auth')
    // Auth = Auth();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    
    app.get("/", UsersControllers.addUser);
    app.post("/users", UsersControllers.addUser);
    app.delete("/users", UsersControllers.deleteUser);
}