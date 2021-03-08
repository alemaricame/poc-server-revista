const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    numero_personal: { type: String, required: true },
    empleado: { type: String, required: true },
    posicion: { type: String, required: true },
    unidad: { type: String, required: true },
    fecha_alta: { type: String, required: true },
    division: { type: String, required: true },
    tel: { type: String, required: true },
    distrito: { type: String, required: true },
    asesor: { type: String, required: true },
    photo: { type: String, required: true },
    password: { type: String, required: true },
    cumple: { type: String, required: true },

});

// Model
const Users = mongoose.model('users', usersSchema);

module.exports =  Users;