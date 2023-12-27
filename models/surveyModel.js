const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: String,
  gender: String,
  nationality: String,
  email: String,
  phone: String,
  address: String,
  message: String,
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
