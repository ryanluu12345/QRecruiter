const accountSid = 'AC7af9b1a6b83c353bed3e1fd20bd77879';
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

/*User just shared resume with recruiter*/
$scope.sharedConfirmation = function(phone){
client.messages
  .create({
     body: 'Congratulations! You have just shared your resume.',
     from: '(412) 467-0847 ',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}

/*Recruiter got a confirmation*/
$scope.receievedConfirmation = function(phone, user){
client.messages
  .create({
     body: 'You have just received a resume',
     from: '(412) 467-0847 ',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}

/*User just uploaded resume with service*/
$scope.sendConfirmation = function(phone){
client.messages
  .create({
     body: 'Congratulations! You have just uploaded your resume.',
     from: '(412) 467-0847 ',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}

/*User received QR code link*/
$scope.getQR = function(phone, QR_link){
client.messages
  .create({
     body: 'Here is your resume: '+ QR_link,
     from: '(412) 467-0847 ',
     to: phone
   })
  .then(message => console.log(message.sid))
  .done();
}
