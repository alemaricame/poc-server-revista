
const Salud = require("../models/salud");
const Animes = require("../models/animes");
const Convenios = require("../models/convenios");


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

exports.getAnimes = (req, res) => {
    Animes.find().then(data => {
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


exports.getConvenios= (req, res) => {
    Convenios.find().then(data => {
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