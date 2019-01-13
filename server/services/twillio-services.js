const accountSid ='AC5259d1c9f88aa9923dbefe95041c28ed';
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

const twilioService = {}

/*User just shared resume with recruiter*/
twilioService.sharedConfirmation = function(phone){
client.messages
  .create({
     body: 'Congratulations! You have just shared your resume.',
     from: '(626) 658-3288',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}

/*Recruiter got a confirmation*/
twilioService.receievedConfirmation = function(phone, user){
client.messages
  .create({
     body: 'You have just received a resume',
     from: '(626) 658-3288',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}

/*User just uploaded resume with service*/
twilioService.sendConfirmation = function(phone){
client.messages
  .create({
     body: 'Congratulations! You have just uploaded your resume and personal information.',
     from: '(626) 658-3288',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}

/*User received QR code link*/
twilioService.getQR = function(phone, QR_link){
client.messages
  .create({
     body: 'Here is your QR_link: '+ QR_link,
     from: '(626) 658-3288',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}

module.exports = twilioService;