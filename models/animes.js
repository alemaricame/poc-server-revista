const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const animesSchema = new Schema(
  {
    title: { type: String},
    data: { type: String},
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('animes', animesSchema);

module.exports = model;
