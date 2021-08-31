
const Salud = require("../models/salud");


exports.getAllSalud = (req, res) => {
    Salud.find().then(data => {
        if(data.length > 0){
            res.status(200).send({
                success: true,
                data: data
            });
        }else{
            res.status(404).send({
                message: 'Not found',
                success: false
            });
        }
    })
}