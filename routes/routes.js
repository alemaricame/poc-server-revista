module.exports = (app) => {
    var router = require("express").Router();

    const users = require("../controllers/users.js");
    const manteles = require("../controllers/de-manteles-largos");
    const tuHistoria = require("../controllers/tu_historia");
    const salud = require("../controllers/salud");

    router.get('/example', (req, res) => {
        res.status(200).send('Enviado')
    });


    router.post('/register-users', users.register_users);
    router.post('/edit-users', users.edit_user);
    router.post('/login', users.login);

    router.get('/ingresar', users.ingresar);
    router.get('/', users.users);


    /**
     * 
     */
    router.get('/salud/informacion-que-cura', salud.getAllSalud);
    router.get('/salud/para-que-te-animes', salud.getAnimes);
    router.get('/salud/convenios', salud.getConvenios);

    /**
     * Services admin
     */

    
     router.get('/users', users.users);
     router.post('/el-mejor-equipo', manteles.el_mejor_equipo);
     router.get('/el-mejor-equipo-todos', manteles.el_mejor_equipo_todos);


     router.post('/prodeli', tuHistoria.prodeli);
     router.get('/prodeli-todos', tuHistoria.prodeli_todos);


     router.post('/excelencia', manteles.excelencia);
     router.get('/excelencia-todos', manteles.excelencia_todos);



    app.use("/api", router);
}