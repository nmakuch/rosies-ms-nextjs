const next = require("next");
const nodemailer = require("nodemailer");
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

  server.post("/services", (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'makuch.nick@gmail.com',
        pass: process.env.GMAIL_USER_PASSWORD
      }
    })

    const mailOptions = {
      from: 'service@page.com',
      to: 'makuch.nick@gmail.com',
      subject: `Rosies Maid Service: New Booking`,
      replyTo: `no one`,
      html: `
      <h1>New contact form submission on Rosie's Maid Service</h1>
      <table class="tg">
      <tr>
        <th><h3>Grand Total:</h3></th>
        <th>${req.body.grandTotal}</th>
      </tr>
    </table>`,
    }

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error('there was an error: ', err);
      } else {
        console.log('here is the res: ', res)
      }
    })

    console.log(req.body.grandTotal);

    res.redirect("/");
  });

  server.get("/faq", (req, res) => {
    return app.render(req, res, "/faq", req.query);
  });

  server.get("/contact", (req, res) => {
    return app.render(req, res, "/contact", req.query);
  });

  server.post("/contact", (req, res) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "makuch.nick@gmail.com",
        pass: process.env.GMAIL_USER_PASSWORD
      }
    });

    const mailOptions = {
      from: `${req.body.email}`,
      to: "makuch.nick@gmail.com",
      subject: `Rosies Maid Service: new contact form submission`,
      replyTo: `${req.body.email}`,
      html: `
      <h1>New contact form submission on Rosie's Maid Service</h1>
      <table class="tg">
      <tr>
        <th><h3>Name</h3></th>
        <th>${req.body.name}</th>
      </tr>
      <tr>
        <td> <h3>Email</h3></td>
        <td>${req.body.email}</td>
      </tr>
      <tr>
        <td> <h3>Subject</h3></td>
        <td>${req.body.subject}</td>
      </tr>
      <tr>
        <td> <h3>Message</h3></td>
        <td>${req.body.message}</td>
      </tr>
    </table>`
    };

    transporter.sendMail(mailOptions, function(err, res) {
      if (err) {
        console.error("there was an error: ", err);
      } else {
        console.log("here is the res: ", res);
      }
    });

    res.redirect("/");
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
