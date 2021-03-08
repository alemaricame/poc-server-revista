module.exports = (app) => {
    var router = require("express").Router();
    const users = require("../models/users");

    router.get('/example', (req, res) => {
        users.find().then(data => {
            if (data) {
                res.status(200).send({ status: true, data: data });
            } else {
                res.status(500).send({ status: false, message: 'Error al cargar los datos' })
            }
        })
    });

    // router.get('/users', users.users);

    // router.post('/register-users', users.register_users);
    // router.post('/login', users.login);

    // router.get('/ingresar', users.ingresar);


    // router.get('/', users.users);

    app.use("/api", router);
}