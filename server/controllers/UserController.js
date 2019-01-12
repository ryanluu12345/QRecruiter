var makeQR = require('../services/qr-service');
const UserModel = require('../models/User');

const UserController = {}

UserController.createUser = function(name, password, email, phoneNumber, linkedIn, availability, resume, res) {
  UserModel.create({
    name: name,
    password: password,
    email: email,
    phoneNumber: phoneNumber,
    linkedIn: linkedIn,
    availability: availability,
    resume: resume,
  }, (err, data) => {
    
    res.send(data);
  });
};

UserController.getAllUsers = function(res) {
  UserModel.find({}, (err, data) =>{
    res.send(data);
  });
};

module.exports = UserController;