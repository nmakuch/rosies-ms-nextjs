const sgMail = require("@sendgrid/mail");

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, radioLabel } = req.body;

  const content = {
    to: "makuch.nick@gmail.com",
    from: email,
    subject: `New Message From`,
    text: message,
    html: `<h1>New booking</h1><br /><h2>Selected plan: ${radioLabel}</h2><p></p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}