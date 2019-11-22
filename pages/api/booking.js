const sgMail = require("@sendgrid/mail");

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const {
    email,
    name,
    phone,
    radioValue,
    radioLabel,
    cleanerMessage,
    startDate,
    startTime,
    optionsAddOns3,
    labelsAddOns3,
    pets,
    attendance,
    unit,
    address,
    buzzer,
    materials,
  } = req.body;

  let grandTotalArr = [];

  let sumOptionsAddOns3 = optionsAddOns3.reduce((a, b) => a + b, 0);

  grandTotalArr.push(sumOptionsAddOns3);

  let reducedArr = grandTotalArr.reduce((a, b) => a + b, 0);

  let grandTotalSumHST = formatter.format(
    reducedArr * 1.13 + radioLabel * 1.13
  );

  const content = {
    to: "makuch.nick@gmail.com",
    from: email,
    subject: `New Message From ${name}`,
    text: cleanerMessage,
    html: `
    <h1>New Booking</h1>
        <h2>Date and time</h2>
        <p>${startDate} at ${startTime}</p>
        <h3>Name</h3>
        <p>${name}</p>
        <h3>Email</h3>
        <p>${email}</p>
        <h3>Phone</h3>
        <p>${phone}</p>
        <h3>Are there pets in the house?</h3>
        <p>${pets}</p>
        <h3>Will the client be home?</h3>
        <p>${attendance}</p>
        <h3>Address</h3>
        <p>${address}</p>
        <h3>Unit Number</h3>
        <p>${unit}</p>
        <h3>Buzzer</h3>
        <p>${buzzer}</p>
        <h3>Cleaner message</h3>
        <p>${cleanerMessage}</p>
        <h3>Do they have all the necessary tools and items?</h3>
        <p>${materials}</p>

        <h3>Selected plan:</h3>
        <p>${radioValue}</p>

        <h3>Add Ons:</h3>
        ${labelsAddOns3[0] ? `<p>${labelsAddOns3[0]}</p>` : ""}
        ${labelsAddOns3[1] ? `<p>${labelsAddOns3[1]}</p>` : ""}
        ${labelsAddOns3[2] ? `<p>${labelsAddOns3[2]}</p>` : ""}
        ${labelsAddOns3[3] ? `<p>${labelsAddOns3[3]}</p>` : ""}
        ${labelsAddOns3[4] ? `<p>${labelsAddOns3[4]}</p>` : ""}
        ${labelsAddOns3[5] ? `<p>${labelsAddOns3[5]}</p>` : ""}


        <h3>Grand Total</h3>
        <p>${grandTotalSumHST}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
