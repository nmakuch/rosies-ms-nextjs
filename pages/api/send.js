const sgMail = require("@sendgrid/mail");

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, name, subject } = req.body;

  const contentTo = {
    to: "makuch.nick@gmail.com",
    from: email,
    subject: `New Message From ${name} - ${email}`,
    text: message,
    html: `<h1>New contact form submission</h1><br /><h2>Subject: ${subject}</h2><p>${message}</p>`
  };

  const contentFrom = {
    to: email,
    from: "rosiesmaidservice@gmail.com",
    subject: `Rosie's Maid Service - Contact Us`,
    html: `
    <h1>Hi ${name}! Thanks for taking interest in Rosie's Maid Service</h1>
    <br /><h2>We have recieved your message and will get back to you shortly :)</h2>
    <p>It usually takes us 2 hours to get back to clients (unless we are experiencing periods of high traffic).</p>
    `
  };


  try {
    await sgMail.send(contentTo);
    await sgMail.send(contentFrom);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
