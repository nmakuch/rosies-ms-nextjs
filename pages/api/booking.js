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
    startYear,
    startMonth,
    startDay,
    startTime,
    optionsAddOns3,
    labelsAddOns3,
    pets,
    attendance,
    unit,
    address,
    buzzer
  } = req.body;

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  let grandTotalArr = [];

  let sumOptionsAddOns3 = optionsAddOns3.reduce((a, b) => a + b, 0);

  grandTotalArr.push(sumOptionsAddOns3);

  let reducedArr = grandTotalArr.reduce((a, b) => a + b, 0);

  let grandTotalSumHST = formatter.format(
    reducedArr * 1.13 + radioLabel * 1.13
  );

  const contentTo = {
    to: "makuch.nick@gmail.com",
    from: email,
    subject: `New Message From ${name}`,
    text: cleanerMessage,
    html: `
    <h1>New Booking</h1>
        <h2>Date and time</h2>
        <p>${month[startMonth]} ${startDay}, ${startYear} at ${startTime}</p>
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

  const contentFrom = {
    to: email,
    from: "rosiesmaidservice@gmail.com",
    subject: `Rosie's Maid Service - Appointment Booking`,
    html: `
    <h1>Hi ${name}, thanks for booking an appointment with Rosie's Maid Service!</h1>
    <p>We will contact you in the next 2 hours to confirm your appointment (unless we are experiencing periods of high traffic</p>
    <br /><h2>You have selected the following date/time and cleaning package:</h2>

        <h3>Date and time</h3>
        <p>${month[startMonth]} ${startDay}, ${startYear}  at ${startTime}</p>

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
        <p>${grandTotalSumHST}</p>
        
        <h3>Contact us if you have any questions or concers</h3>
        <p>(437) 777-6243</p>`
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
