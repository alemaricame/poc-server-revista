const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const saludSchema = new Schema(
  {
    title: { type: String},
    data: { type: String},
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('salud', saludSchema);

module.exports = model;
