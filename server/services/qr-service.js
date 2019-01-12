require('dotenv').load();
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const qr = require('qr-image');

const s3 = new AWS.S3();

function makeQRCode(userId) {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  })

  const picLink = 'pic.png';
  var qr_svg = qr.image(userId, { type: 'png' });
  qr_svg.pipe(require('fs').createWriteStream(picLink));

  var params = {
    Bucket: 'qrecruiter',
    Body : fs.createReadStream(picLink),
    Key : "folder/"+Date.now()+"_"+path.basename(picLink),
    region: 'us-west-2',
    ACL: 'public-read-write',
  };

  s3.upload(params, function (err, data) {
    //handle error
    if (err) {
      console.log("Error", err);
    }

    //success
    if (data) {
      return data.location;
    }
  });
}

module.exports = makeQRCode;