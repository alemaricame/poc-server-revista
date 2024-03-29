const db = require("../models");
const users = db.connect;

exports.users = (req, res) => {
    console.log('users all')
    users.find().then(data => {
        if (data.length > 0) {
            res.status(200).send({ status: true, data: data });
        } else {
            res.status(500).send({ status: false, message: 'Error al cargar los datos' })
        }
    })
}

exports.edit_user = (req, res) => {
    console.log('req edit', req.body)
    users.updateOne({no_personal: req.body.no_personal}, {phone: req.body.phone, date: req.body.date}).then(response => {
        console.log(response)
        if(response.n === 1){
            users.findOne({no_personal: req.body.no_personal}).then(response => {
                res.status(200).send({
                    success: true,
                    data: response
                });
            })
        }else{
            res.status(400).send({
                success: false,
                message: 'Error al editar los datos'
            });
        }
    })
}

exports.register_users = (req, res) => {
    //console.log('register user', req.body.photo.changingThisBreaksApplicationSecurity)
    const num_empleado = req.body.num_empleado;
    const data_user = req.body;

    users.findOne({ numero_personal: num_empleado }).then((data) => {
        if (data) {
            console.log('data', data['_id'])

            //res.status(200).send({status: true, data: data});   
            users.updateOne(
                { _id: data['_id'] },
                { photo: data_user.photo.changingThisBreaksApplicationSecurity, password: data_user.password, cumple: data_user.date_empleado },
                function (err, result) {
                    console.log('result', result)

                    if (err) {
                        console.log("error al editar");
                        res.status(404).send({
                            message: 'Error al editar este usuario',
                        });
                    } else {
                        users.findOne({ numero_personal: num_empleado }).then((resp) => {

                            console.log('resp', resp)
                            res.status(200).send({ status: true, data: resp });
                        })
                    }
                }
            );
        } else {
            res.status(500).send({ status: false, message: 'Este número de empelado no existe pide que sea agregado para entrar a la aplicación' })
        }
    })
}


exports.login = (req, res) => {
    const data_user = req.body;
    console.log('data user', data_user.num_empleado)
    users.findOne({ no_personal: data_user.num_empleado }).then(data => {
        console.log('data', data)
        if (data) {
            if(data.password === parseInt(data_user.password)){
                res.status(200).send({ status: true, data: data });
            }else{
                res.status(500).send({ status: false, message: 'La contraseña es incorrecta' })
            }
        } else {
            res.status(500).send({ status: false, message: 'El número de personal es incorrecto' })
        }
    })
}

exports.ingresar = (req, res) => {
    const data_user = req.body;
    users.find({ numero_personal: data_user['num_empleado']}).then(data => {
        if (data) {
            if(data['password'] === data_user['password']){
                res.status(200).send({ status: true, data: data });
            }else{
                res.status(500).send({ status: false, message: 'La contraseña es incorrecta' })
            }
        } else {
            res.status(500).send({ status: false, message: 'El número de personal es incorrecto' })
        }
    })
}