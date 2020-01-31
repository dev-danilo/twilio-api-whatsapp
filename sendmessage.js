// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const accountSid = 'AC31c02e8dc24f3f9bb592451f09e5c86f';
const authToken = '8efdf9b8960d21fd8d0013a3f6975865';

var twilio = require('twilio');

var client = new twilio(accountSid, authToken);

client.messages.create({
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+553491128023',
  body: 'Fala Izaias'  
})
.then((message) => console.log(message.sid +'   '+ message.body));