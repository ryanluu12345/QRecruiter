const RecruiterModel = require('../models/Recruiter');
const UserModel = require('../models/User');

const RecruiterController = {}

/*
RecruiterModel.create({}).then(data=>{
  return "yo";
})
*/

RecruiterController.getAllForJob = function(job, res) {
  RecruiterModel
    .find({})
    .then(data => {
      console.log(data);
      return data[0][job].applicants
    })
    .then(data => {
      return UserModel.find({ _id: {$in: data } })
    })
    .then(allUsers =>{
      res.send(allUsers);
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

RecruiterController.addUserToApplicants = function(userId, job, res) {
  const jobApplicants = job + ".applicants";
  RecruiterModel
    .findOneAndUpdate({}, {
      $push: {
        [jobApplicants]: userId,
      }
    }, {
      new: true,
    })
    .then(data => {
      res.send(data);
    })
}

module.exports = RecruiterController;

