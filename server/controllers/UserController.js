var makeQR = require('../services/qr-service');
const UserModel = require('../models/User');

const UserController = {}

UserController.createUser = function(name, password, email, phone, res) {
  UserModel.create({
    name: name,
    password: password,
    email: email,
    phone: phone,
  }).then((data) => {
    return makeQR(data.id).then((response => {
      return { qrLink: response.Location, userId: data.id};
    }))
  }).then((data) => {
    const { qrLink, userId } = data;
    UserModel.findOneAndUpdate({
      _id: userId,
    }, {
      $set: {
        qrLink: qrLink,
      }
    }, {
      new: true,
    })
    .then(newUser => {
      res.send(newUser);
    })
  })
};

UserController.updateProfile = function(userId, resume, picture, skills, availability, res){
  UserModel.findOneAndUpdate({
    _id: userId
  }, {
    $set: {
      resume: resume,
      picture: picture,
      skills: skills,
      availability: availability,
    }
  }, {
    new: true,
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

UserController.getAllUsers = function(res) {
  UserModel.find({}).then(data => {
    res.send(data);
  });
};

module.exports = UserController;