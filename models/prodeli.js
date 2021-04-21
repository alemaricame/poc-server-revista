const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const prodeliSchema = new Schema(
  {
    image: Buffer,
    title: { type: String},
    text: { type: String},
  },
  {
    timestamps: true
  }
);

const model = mongoose.model('prodeli', prodeliSchema);

module.exports = model;
