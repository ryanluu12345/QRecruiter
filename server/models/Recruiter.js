const mongoose = require('mongoose');

const RecruiterSchema = mongoose.Schema({
  backendEngineering: {
    name: {
      type: String,
      default: "Backend Software Engineering"
    },
    applicants: {
      type: Array,
      default: ["5c3ab99cc09cd51a041ec464", "5c3ab99cc09cd51a041ec465", "5c3aba1d5a603020682aaa2c", "5c3aba1d5a603020682aaa2d"],
    },
  },
  frontendEngineering: {
    name: {
      type: String,
      default: "Front End Design and Development"
    },
    applicants: {
      type: Array,
      default: ["5c3aba1d5a603020682aaa30"],
    },
  }
});

module.exports = mongoose.model('Recruiter', RecruiterSchema);

