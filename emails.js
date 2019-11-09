const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY
  })
);

transport
    .sendMail({
        from: 'test@kreata.ee',
        to: 'Nick Makuch <makuch.nick@gmail.com>',
        subject: 'hello world',
        html: '<h1>Hello world!</h1>'
    })
    .then(([res]) => {
        console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
    })
    .catch(err => {
        console.log('Errors occurred, failed to deliver message');

        if (err.response && err.response.body && err.response.body.errors) {
            err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
        } else {
            console.log(err);
        }
    });
