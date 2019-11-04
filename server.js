const next = require("next");
const sgMail = require('@sendgrid/mail');

const express = require("express");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  sgMail.setApiKey("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");

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/services", (req, res) => {
    return app.render(req, res, "/services", req.query);
  });

  server.get("/faq", (req, res) => {
    return app.render(req, res, "/faq", req.query);
  });

  server.get("/contact", (req, res) => {
    return app.render(req, res, "/contact", req.query);
  });

  server.post('/contact', (req, res) => {
    const msg = {
      to: 'makuch.nick@gmail.com',
      from: 'test@example.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
  })

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
