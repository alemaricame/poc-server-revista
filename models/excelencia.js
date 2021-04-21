const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const excelenciaSchema = new Schema(
  {
    image: { type: String},
    nombre: { type: String},
    text: { type: String},
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('excelencia', excelenciaSchema);

module.exports = model;
