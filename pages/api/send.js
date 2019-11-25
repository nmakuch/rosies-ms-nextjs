const sgMail = require("@sendgrid/mail");

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, name, phone } = req.body;

  const contentTo = {
    to: "rosieandcompany1@gmail.com",
    from: email,
    subject: `New Contact form submission from ${name} - ${email}`,
    text: message,
    html: `<h1>New contact form submission</h1><br />
    <h2>Personal details</h2>

    <table>
    <tr>
      <td><h3>Name</h3></td>
      <td><p>${name}</p></td>
    </tr>
    <tr>
    <td><h3>Email</h3></td>
    <td><p>${email}</p></td>
    </tr>
    <tr>
    <td><h3>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></td>
    <td><p>${phone}</p></td>
</tr>
  </table>
  <br />
    
    <h3>User's message</h3><p>${message}</p>`
  };

  const contentFrom = {
    to: email,
    from: "rosieandcompany1@gmail.com",
    subject: `Rosie's Maid Service - Contact Us`,
    html: `
    <h1>Hi ${name}! Thanks for taking interest in Rosie's Maid Service</h1>
    <br /><h2>We have recieved your message and will get back to you shortly :)</h2>
    <p>It usually takes us 2 hours to get back to clients (unless we are experiencing periods of high traffic).</p>

    <h2>You can view your submission below</h2>
    
    <h3>Personal details</h3>

    <table>
    <tr>
      <td><h3>Name</h3></td>
      <td><p>${name}</p></td>
    </tr>
    <tr>
    <td><h3>Email</h3></td>
    <td><p>${email}</p></td>
    </tr>
    <tr>
    <td><h3>Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></td>
    <td><p>${phone}</p></td>
  </tr>
  </table>
  <br />
  <h3>Your message</h3><p>${message}</p>`
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
