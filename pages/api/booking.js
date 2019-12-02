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
    to: "rosieandcompany1@gmail.com",
    from: email,
    subject: `New Message From ${name}`,
    text: cleanerMessage,
    html: `
    <h2>New Booking</h2>
    <h2>Date and time</h2>
    <p>${month[startMonth]} ${startDay}, ${startYear} at ${startTime}</p><br />

    <h2>Personal Details</h2>
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
    
    <h2>Appointment details</h2>
    <table>
      <tr>
        <td><h3>Are there pets?</h3></td>
        <td><p>${pets}</p></td>
      </tr>
      <tr>
        <td><h3>Will the client be home?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></td>
        <td><p>${attendance}</p></td>
      </tr>
      <tr>
        <td><h3>Address</h3></td>
        <td><p>${address}</p></td>
      </tr>
      <tr>
        <td><h3>Unit #</h3></td>
        <td><p>${unit}</p></td>
      </tr>
      <tr>
        <td><h3>Buzzer #</h3></td>
        <td><p>${buzzer}</p></td>
      </tr>
      <tr>
        <td><h3>Additional Notes</h3></td>
        <td><p>${cleanerMessage}</p></td>
      </tr>
      <tr>
        <td><h3>Selected Plan</h3></td>
        <td><p>${radioValue}</p></td>
      </tr>
      <tr>
        <td><h3>Extras</h3></td>
        <td>
          ${labelsAddOns3[0] ? `<p>${labelsAddOns3[0]}</p>` : ""}
          ${labelsAddOns3[1] ? `<p>${labelsAddOns3[1]}</p>` : ""}
          ${labelsAddOns3[2] ? `<p>${labelsAddOns3[2]}</p>` : ""}
          ${labelsAddOns3[3] ? `<p>${labelsAddOns3[3]}</p>` : ""}
          ${labelsAddOns3[4] ? `<p>${labelsAddOns3[4]}</p>` : ""}
          ${labelsAddOns3[5] ? `<p>${labelsAddOns3[5]}</p>` : ""}
        </td>
      </tr>
      <tr>
        <td><h3>Grand Total</h3></td>
        <td><p>${grandTotalSumHST}</p></td>
      </tr>
    </table>
  `
  };

  const contentFrom = {
    to: email,
    from: "rosieandcompany1@gmail.com",
    subject: `Rosie's Maid Service - Appointment Booking`,
    html: `
    <h1>Hi ${name}, thanks for requesting an appointment with Rosie's Maid Service!</h1>
    <p>Your booking is not yet confirmed. We have received your request and will send you an email confirmation once the appointment has been assigned to one of our staff. This process usually takes about 2 hours if the request was made before 6 pm. Otherwise it will be processed the following day.</p>

        <h2>Appointment requested for</h2>
        <p>${
          month[startMonth]
        } ${startDay}, ${startYear}  at ${startTime}</p><br />

        <h2>Appointment details</h2>
        <table>
          <tr>
            <td><h3>Are there pets?</h3></td>
            <td><p>${pets}</p></td>
          </tr>
          <tr>
            <td><h3>Will the client be home?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></td>
            <td><p>${attendance}</p></td>
          </tr>
          <tr>
            <td><h3>Address</h3></td>
            <td><p>${address}</p></td>
          </tr>
          <tr>
            <td><h3>Unit #</h3></td>
            <td><p>${unit}</p></td>
          </tr>
          <tr>
            <td><h3>Buzzer #</h3></td>
            <td><p>${buzzer}</p></td>
          </tr>
          <tr>
            <td><h3>Additional Notes</h3></td>
            <td><p>${cleanerMessage}</p></td>
          </tr>
          <tr>
            <td><h3>Selected Plan</h3></td>
            <td><p>${radioValue}</p></td>
          </tr>
          <tr>
            <td><h3>Extras</h3></td>
            <td>
              ${labelsAddOns3[0] ? `<p>${labelsAddOns3[0]}</p>` : ""}
              ${labelsAddOns3[1] ? `<p>${labelsAddOns3[1]}</p>` : ""}
              ${labelsAddOns3[2] ? `<p>${labelsAddOns3[2]}</p>` : ""}
              ${labelsAddOns3[3] ? `<p>${labelsAddOns3[3]}</p>` : ""}
              ${labelsAddOns3[4] ? `<p>${labelsAddOns3[4]}</p>` : ""}
              ${labelsAddOns3[5] ? `<p>${labelsAddOns3[5]}</p>` : ""}
            </td>
          </tr>
          <tr>
            <td><h3>Grand Total</h3></td>
            <td><p>${grandTotalSumHST}</p></td>
          </tr>
        </table>
        
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
