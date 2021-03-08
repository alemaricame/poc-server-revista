module.exports = (app) => {
    var router = require("express").Router();
    const users = require("../models/users");
    const usersController = require("../controllers/users");

    router.get('/example', usersController.users);

    router.post('/register-users', usersController.register_users);
    router.post('/login', usersController.login);

    router.get('/ingresar', usersController.ingresar);


    app.use("/api", router);
}