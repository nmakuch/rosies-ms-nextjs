const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");

const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const transport = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY
  })
);

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
    transport
      .sendMail({
        from: "service@page.com",
        to: "Nick Makuch <makuch.nick@gmail.com>",
        subject: `Rosies Maid Service: New Booking`,
        html: `
        <h1>New contact form submission on Rosie's Maid Service</h1>
        <table class="tg">
        <tr>
          <th><h3>Grand Total:</h3></th>
          <th>${req.body.grandTotal}</th>
        </tr>
      </table>`
      })
      .then(([res]) => {
        console.log(
          "Message delivered with code %s %s",
          res.statusCode,
          res.statusMessage
        );
      })
      .catch(err => {
        console.log("Errors occurred, failed to deliver message");

        if (err.response && err.response.body && err.response.body.errors) {
          err.response.body.errors.forEach(error =>
            console.log("%s: %s", error.field, error.message)
          );
        } else {
          console.log(err);
        }
      });

    res.redirect("/");
  });

  server.get("/faq", (req, res) => {
    return app.render(req, res, "/faq", req.query);
  });

  server.get("/contact", (req, res) => {
    return app.render(req, res, "/contact", req.query);
  });

  server.post("/contact", (req, res) => {
    transport
      .sendMail({
        from: `${req.body.email}`,
        to: "Nick Makuch <makuch.nick@gmail.com>",
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
      })
      .then(([res]) => {
        console.log(
          "Message delivered with code %s %s",
          res.statusCode,
          res.statusMessage
        );
      })
      .catch(err => {
        console.log("Errors occurred, failed to deliver message");

        if (err.response && err.response.body && err.response.body.errors) {
          err.response.body.errors.forEach(error =>
            console.log("%s: %s", error.field, error.message)
          );
        } else {
          console.log(err);
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
