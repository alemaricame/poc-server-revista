const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const conveniosSchema = new Schema(
  {
    title: { type: String},
    data: { type: String},
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('convenios', conveniosSchema);

module.exports = model;
