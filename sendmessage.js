// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

const accountSid = 'Your Account Sid from twilio.com/console';
const authToken = 'Auth Token from twilio.com/console';

var twilio = require('twilio');

var client = new twilio(accountSid, authToken);

client.messages.create({
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+553491128023',
  body: 'Fala Izaias'  
})
.then((message) => console.log(message.sid +'   '+ message.body));
