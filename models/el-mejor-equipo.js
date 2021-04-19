const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const equipoSchema = new Schema(
  {
    image: Buffer,
    text: { type: String},
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('equipo', equipoSchema);

module.exports = model;
