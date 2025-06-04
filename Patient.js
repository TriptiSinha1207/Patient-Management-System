// backend/models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  condition: String,
});

module.exports = mongoose.model('Patient', patientSchema);
