module.exports = (app) => {
    var router = require("express").Router();

    const users = require("../controllers/users.js");
    const manteles = require("../controllers/de-manteles-largos");

    router.get('/example', (req, res) => {
        res.status(200).send('Enviado')
    });


    router.post('/register-users', users.register_users);
    router.post('/login', users.login);

    router.get('/ingresar', users.ingresar);
    router.get('/', users.users);



    /**
     * Services admin
     */

    
     router.get('/users', users.users);
     router.post('/el-mejor-equipo', manteles.el_mejor_equipo);
     router.get('/el-mejor-equipo-todos', manteles.el_mejor_equipo_todos);




    app.use("/api", router);
}