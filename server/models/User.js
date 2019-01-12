const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: '',
  },
  skills: {
    type: Array,
    default: [],
  },
  qrLink: {
    type: String,
    default: '',
  }
});

module.exports = mongoose.model('User', UserSchema);

