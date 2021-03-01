const db = require("../models");
const users = db.connect;

exports.users = (req, res) => {
    users.find().then(data => {
        if(data){
            res.status(200).send({status: true, data: data});
        }else{
            res.status(500).send({status: false, message: 'Error al cargar los datos'})
        }
    })
}