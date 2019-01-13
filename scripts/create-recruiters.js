const mongoose = require('mongoose');
const RecruiterModel = require('../server/models/Recruiter');

mongoose.connect('mongodb://admin:password12345@ds123173.mlab.com:23173/qrecruiter')

RecruiterModel.create({}).then(data=>{
  return "yo";
})
