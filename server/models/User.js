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
  phone: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    default: '',
  },
  picture: {
    type: String,
    default: '',
  },
  skills: {
    type: String,
    default: '',
  },
  availability: {
    type: String,
    default: '',
  },
  qrLink: {
    type: String,
    default: '',
  }
});

module.exports = mongoose.model('User', UserSchema);

