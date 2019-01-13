const mongoose = require('mongoose');
const UserModel = require('../server/models/User');

mongoose.connect('mongodb://admin:password12345@ds123173.mlab.com:23173/qrecruiter')

for(let i=0; i<10; i++){
  UserModel.create({
    name: 'Sharon',
    password: 'dars',
    email: 'shar@on.com',
    phone: '6265555555',
    resume: 'https://writing.colostate.edu/guides/documents/resume/functionalSample.pdf',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWPkrjOlSnj6rP8LGZgQziZwT3jmAyi-g0Kj4sZWMeimDRBzj',
    skills: 'Writing code',
    availability: 'Part Time',
  }).then(data=> {
    console.log(data);
    return data;
  });
}