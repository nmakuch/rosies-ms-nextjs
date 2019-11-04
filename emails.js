// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
  to: 'makuch.nick@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);