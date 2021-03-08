module.exports = (app) => {
    var router = require("express").Router();

    const users = require("../controllers/users.js");

    router.get('/example', (req, res) => {
        res.status(200).send('Enviado')
    });

    router.get('/users', users.users);

    router.post('/register-users', users.register_users);
    router.post('/login', users.login);

    router.get('/ingresar', users.ingresar);


    router.get('/', users.users);

    app.use("/api", router);
}