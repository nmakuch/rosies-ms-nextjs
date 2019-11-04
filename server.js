const next = require("next");
const nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

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

  server.post("/contact", (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'makuch.nick@gmail.com',
        pass: process.env.GMAIL_USER_PASSWORD
      }
    })

    const mailOptions = {
      from: `${req.body.email}`,
      to: 'makuch.nick@gmail.com',
      subject: `Rosies Maid Service: new contact form submission`,
      text: `${req.body.message}`,
      replyTo: `${req.body.email}`,
      html: `<a href="#">${req.body.subject}</a>`,
    }

    console.log(req.body.email)
    console.log(req.body.name)
    console.log(req.body.message)
    console.log(req.body.subject)

    console.log(mailOptions)


    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res)
      }
    })
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
