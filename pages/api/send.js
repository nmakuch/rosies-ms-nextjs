const sgMail = require("@sendgrid/mail");

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, name, subject } = req.body;

  const content = {
    to: "makuch.nick@gmail.com",
    from: email,
    subject: `New Message From ${name} - ${email}`,
    text: message,
    html: `<h1>New contact form submission</h1><br /><h2>Subject: ${subject}</h2><p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
