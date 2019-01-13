const mongoose = require('mongoose');

const RecruiterSchema = mongoose.Schema({
  backendEngineering: {
    name: {
      type: String,
      default: "Backend Software Engineering"
    },
    applicants: {
      type: Array,
      default: ["5c39bac0720c503a1cc95acb", "5c39baef7d5cae050c7d6700", "5c3a22f70f08ab0cc4674ebd"],
    },
  },
  frontendEngineering: {
    name: {
      type: String,
      default: "Front End Design and Development"
    },
    applicants: {
      type: Array,
      default: [],
    },
  }
});

module.exports = mongoose.model('Recruiter', RecruiterSchema);

