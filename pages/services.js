// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import GlobalHeader from "../components/GlobalHeader";
import DatePicker from "react-datepicker";
import ScrollableAnchor from "react-scrollable-anchor";
import Link from "next/link";

import "react-datepicker/dist/react-datepicker.css";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    phone: "",
    radioValue: "",
    radioLabel: "",
    cleanerMessage: "",
    optionsAddOns3: [],
    consentBox: [],
    labelsAddOns3: [],
    startDate: "",
    startTime: "",
    pets: "",
    attendance: "",
    buzzer: "",
    address: "",
    unit: "",
    materials: "",
    grandTotal: ""
  });

  let addOnsLabels3 = inputs.labelsAddOns3;
  let addOnsCost3 = inputs.optionsAddOns3;

  let checkBoxArrayAddOns3 = [35.0, 20.0, 20.0, 20.0, 15.0, 20.0];
  let checkBoxArrayLabels3 = [
    "Deep clean - wall spot cleaning, baseboards, inside of kitchen & bathroom cabinets ($35.00)",
    "Big task - oven ($20.00)",
    "Big task - inside fridge ($20.00)",
    "Big task - windows ($20.00)",
    "Additional powder room ($15.00)",
    "Additional bathroom ($20.00)"
  ];

  let checkBoxArrayIds3 = [
    "Deep Clean - Wall, baseboards, kitchen...",
    "Big task - Oven",
    "Big task - Inside fridge",
    "Big task - Windows",
    "Additional powder room",
    "Additional bathroom"
  ];

  let radioValues1 = [52.5, 70.0, 87.5, 105.0, 122.0, 140.0];
  let radioLabels1 = [
    "1.5 hour session at $35/hour ($52.50)",
    "2.0 hour session at $35/hour ($70.00)",
    "2.5 hour session at $35/hour ($87.50)",
    "3.0 hour session at $35/hour ($105.00)",
    "3.5 hour session at $35/hour ($122.50)",
    "4.0 hour session at $35/hour ($140.00)"
  ];

  let radioArrayId1 = [
    "1.5 hour session at $35/hour",
    "2.0 hour session at $35/hour",
    "2.5 hour session at $35/hour",
    "3.0 hour session at $35/hour",
    "3.5 hour session at $35/hour",
    "4.0 hour session at $35/hour"
  ];

  let radioValues2 = [52.5, 87.5, 105.0];
  let radioLabels2 = [
    "Basic (1.5 hours): kitchen, bathroom, all floors  ($52.50)",
    "Basic Plus (2.5 hours): kitchen, bathroom, living areas including bedroom ($87.50)",
    "Complete (3.0 hours): kitchen, bathroom, living areas plus one big job ($105.00)"
  ];

  let radioArrayId2 = [
    "Basic (1.5 hours)",
    "Basic plus (2.5 hours)",
    "Complete (3.0 hours)"
  ];

  let radioValues3 = [60.0, 100.0, 140.0];
  let radioLabels3 = [
    "Basic (1.5 hours): kitchen, bathroom, all floors  ($60.00)",
    "Basic Plus (2.5 hours): kitchen, bathroom, living areas including bedroom ($100.00)",
    "Complete (3.0 hours): kitchen, bathroom, living areas plus one big job ($140.00)"
  ];

  let radioArrayId3 = [
    "x2 Basic (1.5 hours)",
    "x2 Basic plus (2.5 hours)",
    "x2 Complete (3.0 hours)"
  ];

  let radioValues4 = [
    "8:00am - 10:00am",
    "10:00am - 12:00pm",
    "12:00pm - 2:00pm",
    "2:00pm - 4:00pm"
  ];

  let grandTotalArr = [];

  let sumOptionsAddOns3 = inputs.optionsAddOns3.reduce((a, b) => a + b, 0);

  grandTotalArr.push(sumOptionsAddOns3);

  let reducedArr = grandTotalArr.reduce((a, b) => a + b, 0);

  let grandTotalHST = formatter.format(
    reducedArr * 0.13 + inputs.radioLabel * 0.13
  );

  let grandTotalSumHST = formatter.format(
    reducedArr * 1.13 + inputs.radioLabel * 1.13
  );

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        email: "",
        name: "",
        phone: "",
        radioValue: "",
        radioLabel: "",
        cleanerMessage: "",
        optionsAddOns3: [],
        labelsAddOns3: [],
        consentBox: "",
        startDate: "",
        startTime: "",
        pets: "",
        attendance: "",
        buzzer: "",
        address: "",
        unit: "",
        materials: "",
        grandTotal: ""
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleRadio = e => {
    e.persist();
    if (e.target.value)
      setInputs(prev => ({
        ...prev,
        radioValue: e.target.value,
        radioLabel: e.target.id
      }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleYesNo1 = e => {
    e.persist();
    if (e.target.value)
      setInputs(prev => ({
        ...prev,
        pets: e.target.value
      }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleYesNo2 = e => {
    e.persist();
    if (e.target.value)
      setInputs(prev => ({
        ...prev,
        attendance: e.target.value
      }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleYesNo3 = e => {
    e.persist();
    if (e.target.value)
      setInputs(prev => ({
        ...prev,
        materials: e.target.value
      }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleCheckBox = e => {
    let checkedArrayAddOns3 = inputs.optionsAddOns3;
    let checkedArrayIds3 = inputs.labelsAddOns3;
    let radioLabel = inputs.radioLabel;
    let radioValue = inputs.radioValue;
    let selectedId3 = e.target.id;
    let selectedValue3 = e.target.value;
    e.persist();

    if (e.target.checked === true) {
      checkedArrayIds3.push(selectedId3);
      checkedArrayAddOns3.push(parseFloat(selectedValue3));

      setInputs(prev => ({
        ...prev,
        optionsAddOns3: checkedArrayAddOns3,
        labelsAddOns3: checkedArrayIds3,
        radioLabel: radioLabel,
        radioValue: radioValue
      }));
    } else {
      let valueIndex3 = checkedArrayAddOns3.indexOf(selectedValue3);
      checkedArrayAddOns3.splice(valueIndex3, 1);
      checkedArrayIds3.splice(valueIndex3, 1);

      setInputs({
        optionsAddOns3: checkedArrayAddOns3,
        labelsAddOns3: checkedArrayIds3,
        radioLabel: radioLabel,
        radioValue: radioValue
      });
    }
  };

  const handleChecked = e => {
    let selectedValue = e.target.value;
    let checkedArrayAddOns3 = inputs.optionsAddOns3;
    let checkedArrayIds3 = inputs.labelsAddOns3;
    let radioLabel = inputs.radioLabel;
    let radioValue = inputs.radioValue;
    e.persist();

    if (e.target.checked === true) {

      setInputs(prev => ({
        ...prev,
        consentBox: "consent",
        optionsAddOns3: checkedArrayAddOns3,
        labelsAddOns3: checkedArrayIds3,
        radioLabel: radioLabel,
        radioValue: radioValue
      }));
    } else {
      setInputs({
        consentBox: "no consent",
        optionsAddOns3: checkedArrayAddOns3,
        labelsAddOns3: checkedArrayIds3,
        radioLabel: radioLabel,
        radioValue: radioValue
      });
    }
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  const handleDate = date => {
    setInputs(prev => ({
      ...prev,
      startDate: date
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleTime = e => {
    e.persist();
    if (e.target.value)
      setInputs(prev => ({
        ...prev,
        startTime: e.target.value
      }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  return (
    <Layout>
      <GlobalHeader
        globalHeaderTitle="SERVICES AND BOOKING"
        globalHeaderImage="../img/services-bg.jpg"
        globalHeaderSubTitle="Use our online booking tool or call 437-777-MAID."
      />
      <main>
        <section
          css={css`
            margin-top: 75px;

            p {
              margin-bottom: 0;
            }

            h2 {
              font-weight: 600;
              margin-bottom: 25px;
            }
          `}
        >
          <div className="container">
            <div className="col-md-8 offset-md-2 col-sm-12">
              <div
                css={css`
                  padding: 0 25px;
                `}
                className="row"
              >
                <h2>We offer a variety of cleaning options</h2>
                <p>
                  We offer the most customizable plans that let you choose
                  exactly what you want. Whether you want your entire home deep
                  cleaned by one of our professional staff, or simply want some
                  help with the dreaded kitchen & bathroom, we have you covered.
                  Choose from our pre-structured plans that cover all the
                  standard items, or select our hourly plan to have complete
                  control of how the time is spent.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          css={css`
            padding-top: 75px !important;
            padding-bottom: 100px !important;
            h2 {
              font-weight: 600;
              margin-bottom: 50px;
            }

            h3 {
              font-size: 20px;
              font-weight: 600;
              margin-bottom: 35px;
            }

            h4 {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 25px;
            }

            li {
              label {
                margin-bottom: 45px;

                p {
                  position: relative;
                  top: 5px;
                  left: 50px;
                }

                @media only screen and (max-width: 767px) {
                  p {
                    line-height: 1.2rem;
                  }
                }
              }
            }

            li:first-of-type {
              margin-top: 25px;
            }

            li:nth-of-type(6) {
              margin-bottom: 50px;
            }

            textarea {
              margin-bottom: 50px;
            }

            li:last-of-type {
              margin-bottom: 75px;
            }

            .form-group {
              padding: 0px !important;
            }
          `}
          id="service-form"
        >
          <div className="block">
            <form onSubmit={handleOnSubmit}>
              <div className="container">
                <div className="col-md-8 offset-md-2 col-sm-12">
                  <div
                    css={css`
                      padding: 0 15px;
                    `}
                    className="row"
                  >
                    <div
                      css={css`
                        padding: 0 5px !important;

                        h3 {
                          margin-bottom: 25px;
                        }

                        .note {
                          margin-bottom: 50px;
                        }
                      `}
                      className="col-md-12 col-sm-12"
                    >
                      <div className="form-group">
                        <h2>Select your cleaning package</h2>
                        <h3>1) Hourly cleaning packages</h3>
                        <p className="note">
                          <strong>Note:</strong> Just leave us detailed
                          instructions in the comments box at the bottom of this
                          page and our professional maid will focus exactly on
                          the items on your list. The list should be structured
                          as a priority list in case there isn’t enough time to
                          complete all the items.
                        </p>
                        <ul>
                          {radioValues1.map((radioValue, i) => {
                            return (
                              <li>
                                <label className="checkbox-label">
                                  <input
                                    type="radio"
                                    value={radioArrayId1[i]}
                                    id={radioValue}
                                    checked={
                                      inputs.radioValue ===
                                      `${radioArrayId1[i]}`
                                    }
                                    onChange={handleRadio}
                                  />
                                  <p className="radio-label">
                                    {radioLabels1[i]}
                                  </p>
                                  <span className="checkbox-custom circular"></span>
                                </label>
                              </li>
                            );
                          })}
                          <li
                            css={css`
                              h3 {
                                margin: 75px 0;
                              }
                            `}
                          >
                            <h3>OR</h3>
                          </li>
                          <li>
                            <h3>2) Cleaning plans</h3>
                          </li>
                          <li>
                            <h4>
                              1 Bedroom or Bachelor up to 600 sq/ft (1 bathroom)
                            </h4>
                          </li>
                          {radioValues2.map((radioValue, i) => {
                            return (
                              <li>
                                <label className="checkbox-label">
                                  <input
                                    type="radio"
                                    value={radioArrayId2[i]}
                                    id={radioValue}
                                    checked={
                                      inputs.radioValue ===
                                      `${radioArrayId2[i]}`
                                    }
                                    onChange={handleRadio}
                                  />
                                  <p className="radio-label">
                                    {radioLabels2[i]}
                                  </p>
                                  <span className="checkbox-custom circular"></span>
                                </label>
                              </li>
                            );
                          })}
                          <li>
                            <h4>2 Bedroom up to 1000 sq/ft (1 bathroom)</h4>
                          </li>
                          {radioValues3.map((radioValue, i) => {
                            return (
                              <li>
                                <label className="checkbox-label">
                                  <input
                                    type="radio"
                                    value={radioArrayId3[i]}
                                    id={radioValue}
                                    checked={
                                      inputs.radioValue ===
                                      `${radioArrayId3[i]}`
                                    }
                                    onChange={handleRadio}
                                  />
                                  <p className="radio-label">
                                    {radioLabels3[i]}
                                  </p>
                                  <span className="checkbox-custom circular"></span>
                                </label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    css={css`
                      padding: 0 5px !important;
                      margin-bottom: 50px;
                    `}
                    className="col-md-12 col-sm-12"
                  >
                    <div
                      css={css`
                        padding: 0 15px;
                        label {
                          margin-bottom: 50px;
                          p {
                            position: relative;
                            top: 4px;
                            left: 50px;
                          }

                          @media only screen and (max-width: 767px) {
                            p {
                              line-height: 1.2rem;
                              top: 8px;
                            }
                          }
                        }
                      `}
                      className="row"
                    >
                      {" "}
                      <h2
                        css={css`
                          margin-bottom: 0 !important;
                        `}
                      >
                        Add ons:
                      </h2>
                    </div>
                    <div
                      css={css`
                        padding: 0 15px;
                        label {
                          margin-bottom: 40px;
                          p {
                            position: relative;
                            top: 4px;
                            left: 50px;
                          }

                          @media only screen and (max-width: 767px) {
                            p {
                              line-height: 1.2rem;
                              top: 8px;
                            }
                          }
                        }
                      `}
                      className="row"
                    >
                      <h3
                        css={css`
                          margin-top: 50px;
                        `}
                      >
                        The following can be added to your package:
                      </h3>
                      <div className="form-group">
                        <div>
                          {checkBoxArrayAddOns3.map((checkBox, i) => {
                            return (
                              <label className="checkbox-label">
                                <input
                                  type="checkbox"
                                  id={checkBoxArrayIds3[i]}
                                  value={checkBox}
                                  onChange={handleCheckBox}
                                />
                                <p className="radio-label">
                                  {checkBoxArrayLabels3[i]}
                                </p>
                                <span className="checkbox-custom rectangular"></span>
                              </label>
                            );
                          })}
                        </div>
                        <br />
                      </div>
                    </div>
                    <p>
                      <strong>Note:</strong> Please refer to our{" "}
                      <a href="#required-items">list of required items</a> to
                      ensure we have the tools to complete these jobs.{" "}
                    </p>

                    <p
                      css={css`
                        margin-bottom: 75px;
                      `}
                    >
                      <strong>Note:</strong> If this is your first time booking
                      with us, or your home hasn’t been thoroughly cleaned in
                      the past 30 days, we strongly recommend the “Deep clean”
                      add on, as this will prepare your home for future regular
                      cleaning visits.
                    </p>
                    <h2>When is this appointment for?</h2>
                    <h3
                      css={css`
                        margin-bottom: 15px !important;
                      `}
                    >
                      Select a date
                    </h3>
                    <div className="form-group">
                      <DatePicker
                        selected={inputs.startDate}
                        onChange={handleDate}
                        className="form-control"
                        placeholderText="Click for calendar"
                        css={css`
                          margin-bottom: 50px;
                        `}
                      />
                      <h3
                        css={css`
                          margin-bottom: 15px !important;
                        `}
                      >
                        Select a time
                      </h3>
                      <p
                        css={css`
                          margin-bottom: 25px !important;
                        `}
                      >
                        <strong>Note:</strong> Our cleaning professional will
                        arrive for your appointment inside of your selected 2
                        hour window. Please feel free to include your preferred
                        arrival time in the additional information box at the
                        bottom of the page and we will do our best.
                      </p>
                      <ul
                        css={css`
                          li:last-of-type {
                          }
                        `}
                      >
                        {radioValues4.map((radioValue, i) => {
                          return (
                            <li>
                              <label className="checkbox-label">
                                <input
                                  type="radio"
                                  value={radioValue}
                                  id={radioValue}
                                  checked={inputs.startTime === `${radioValue}`}
                                  onChange={handleTime}
                                />
                                <p className="radio-label">{radioValue}</p>
                                <span className="checkbox-custom circular"></span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>

                      <h3
                        css={css`
                          margin-bottom: 15px !important;
                        `}
                      >
                        Will there be pets?
                      </h3>
                      <p>
                        <strong>Note:</strong> If yes, please ensure your pets
                        will be secured throughout the duration of our visit.
                      </p>
                      <ul>
                        <li>
                          <label
                            css={css`
                              margin-bottom: 25px !important;
                            `}
                            className="checkbox-label"
                          >
                            <input
                              type="radio"
                              value="Yes"
                              id="yes"
                              checked={inputs.pets === `Yes`}
                              onChange={handleYesNo1}
                            />
                            <p className="radio-label">Yes</p>
                            <span className="checkbox-custom circular"></span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-label">
                            <input
                              type="radio"
                              value="No"
                              id="no"
                              checked={inputs.pets === `No`}
                              onChange={handleYesNo1}
                            />
                            <p className="radio-label">No</p>
                            <span className="checkbox-custom circular"></span>
                          </label>
                        </li>
                      </ul>

                      <h3
                        css={css`
                          margin-bottom: 10px !important;
                        `}
                      >
                        Will you be home during the visit?
                      </h3>
                      <ul>
                        <li>
                          <label
                            css={css`
                              margin-bottom: 25px !important;
                            `}
                            className="checkbox-label"
                          >
                            <input
                              type="radio"
                              value="Yes"
                              id="yes"
                              checked={inputs.attendance === `Yes`}
                              onChange={handleYesNo2}
                            />
                            <p className="radio-label">Yes</p>
                            <span className="checkbox-custom circular"></span>
                          </label>
                        </li>
                        <li>
                          <label
                            css={css`
                              margin-bottom: 100px !important;
                            `}
                            className="checkbox-label"
                          >
                            <input
                              type="radio"
                              value="No"
                              id="no"
                              checked={inputs.attendance === `No`}
                              onChange={handleYesNo2}
                            />
                            <p className="radio-label">No</p>
                            <span className="checkbox-custom circular"></span>
                          </label>
                        </li>
                      </ul>
                    </div>

                    <h2
                      css={css`
                        margin-bottom: 15px !important;
                      `}
                    >
                      Enter your location
                    </h2>

                    <p
                      css={css`
                        margin-bottom: 50px !important;
                      `}
                    >
                      <strong>Note:</strong>{" "}
                      <Link href="/terms" as="/terms">
                        <a target="_blank">
                          Please make sure you are inside our service area.
                        </a>
                      </Link>
                      <br />
                      If you are outside, please give us a call at 437-777-MAID.
                    </p>

                    <div
                      css={css`
                        input {
                          margin-bottom: 15px;
                        }
                      `}
                      className="form-group"
                    >
                      <input
                        id="address"
                        type="text"
                        onChange={handleOnChange}
                        required
                        placeholder="Enter your address"
                        className="form-control"
                        value={inputs.address}
                      />
                    </div>
                    <div
                      css={css`
                        input {
                          margin-bottom: 15px;
                        }
                      `}
                      className="form-group"
                    >
                      <input
                        id="unit"
                        type="text"
                        className="form-control"
                        onChange={handleOnChange}
                        placeholder="Enter your unit # (if applicable)"
                        value={inputs.unit}
                      />
                    </div>
                    <div
                      css={css`
                        input {
                          margin-bottom: 75px;
                        }
                      `}
                      className="form-group"
                    >
                      <input
                        id="buzzer"
                        type="text"
                        className="form-control"
                        onChange={handleOnChange}
                        placeholder="Enter your buzzer # (if applicable)"
                        value={inputs.buzzer}
                      />
                    </div>

                    <h2>Enter your personal information</h2>

                    <div
                      css={css`
                        input {
                          margin-bottom: 15px;
                        }
                      `}
                      className="form-group"
                    >
                      <input
                        id="name"
                        type="text"
                        onChange={handleOnChange}
                        required
                        placeholder="Enter your name"
                        className="form-control"
                        value={inputs.name}
                      />
                    </div>
                    <div
                      css={css`
                        input {
                          margin-bottom: 15px;
                        }
                      `}
                      className="form-group"
                    >
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        onChange={handleOnChange}
                        required
                        placeholder="Enter your email address"
                        value={inputs.email}
                      />
                    </div>
                    <div
                      css={css`
                        input {
                          margin-bottom: 75px;
                        }
                      `}
                      className="form-group"
                    >
                      <input
                        id="phone"
                        type="phone"
                        className="form-control"
                        onChange={handleOnChange}
                        required
                        placeholder="Enter your phone number"
                        value={inputs.phone}
                      />
                    </div>
                  </div>

                  <div
                    css={css`
                      textarea {
                        height: 135px !important;
                        margin-bottom: 75px !important;
                      }
                    `}
                    className="form-group-2"
                  >
                    <h2>Additional notes</h2>
                    <p>
                      Additional information, instructions, or requests for our
                      visit? Parking information is greaty appreciated.
                    </p>
                    <textarea
                      id="cleanerMessage"
                      name="cleanerMessage"
                      onChange={handleOnChange}
                      required
                      className="form-control"
                      value={inputs.cleanerMessage}
                      rows="3"
                      placeholder="Your message"
                    />
                  </div>

                  <div
                    css={css`
                      padding: 0 15px;
                    `}
                    className="row"
                  >
                    <div
                      css={css`
                        padding: 0 5px !important;

                        h2 {
                          margin-bottom: 50px;
                        }
                      `}
                      className="col-md-12 col-sm-12"
                    >
                      <ScrollableAnchor id={"required-items"}>
                        <h2>Confirm you have the proper cleaning items</h2>
                      </ScrollableAnchor>

                      <details
                        css={css`
                          summary span {
                            font-size: 20px;
                            font-weight: 700;
                            font-family: "Roboto", sans-serif;
                          }

                          summary {
                            margin-bottom: 25px;
                          }

                          ul li {
                            margin-bottom: 25px;
                          }
                        `}
                      >
                        <summary>
                          <span>
                            Review our list of required cleaning items
                          </span>
                        </summary>
                        <ul
                          css={css`
                            h4 {
                              margin-bottom: 10px;
                            }
                          `}
                        >
                          <li>
                            <div className="key">
                              <h4>Glass cleaner</h4>
                            </div>
                            <div className="value">
                              <p>
                                For windows and mirrors. Such as Windex or plain
                                white vinegar and water, mixed in a spray
                                bottle.
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>All-Purpose Cleaner</h4>
                            </div>
                            <div className="value">
                              <p>
                                For most hard surfaces in the home. Such as Mr.
                                Clean or Clorox.
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Bathroom Cleaner</h4>
                            </div>
                            <div className="value">
                              <p>
                                For sinks, toilets, and bathtubs. Please ensure
                                product is suitable for your type of bathtub.
                                Such as Vim or Greenworks.
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Dish Soap</h4>
                            </div>
                            <div className="value">
                              <p>
                                A safe, PH cleaner than can be used on dishes as
                                well as on surfaces requiring a milder product.{" "}
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Vinegar</h4>
                            </div>
                            <div className="value">
                              <p>
                                One of the most efficient and safe cleaning
                                products than can be used on almost any surface.{" "}
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Stove Top Cleaner</h4>
                            </div>
                            <div className="value">
                              <p>
                                Depending on your type of stove, we may require
                                a special product to properly clean the
                                stove-top. For glass stove tops, we recommend
                                Weiman Glass Cook Top cleaner.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </details>

                      <details
                        css={css`
                          summary span {
                            font-size: 20px;
                            font-weight: 700;
                            font-family: "Roboto", sans-serif;
                          }

                          summary {
                            margin-bottom: 50px;
                          }

                          ul li {
                            margin-bottom: 25px;
                          }
                        `}
                      >
                        <summary>
                          <span>
                            Review our list of required cleaning tools
                          </span>
                        </summary>
                        <ul
                          css={css`
                            h4 {
                              margin-bottom: 5px;
                            }
                          `}
                        >
                          <li>
                            <div className="key">
                              <h4>Mop</h4>
                            </div>
                            <div className="value">
                              <p>
                                A twist mop with a bucket is our preferred
                                choice.
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Vaccuum Cleaner / Broom and dustpan</h4>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Microfiber cloths</h4>
                            </div>
                            <div className="value">
                              <p>
                                J cloths, old towels may also be used,but we
                                strongly recommend Microfiber.
                              </p>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Toilet bowl brush</h4>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Paper Towel</h4>
                            </div>
                          </li>

                          <li>
                            <div className="key">
                              <h4>Three Step Ladder</h4>
                            </div>
                            <div className="value">
                              <p>
                                For higher areas, such as when cleaning windows
                                and the inside of high cabinets, we will not use
                                anything but a Three-Step ladder for the safety
                                of our staff.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </details>

                      <h4
                        css={css`
                          margin-top: 25px;
                          margin-bottom: 15px !important;
                        `}
                      >
                        All the items listed above will be available during our
                        cleaner's visit
                      </h4>
                      <ul>
                        <li>
                          <label
                            css={css`
                              margin-bottom: 25px !important;
                            `}
                            className="checkbox-label"
                          >
                            <input
                              type="radio"
                              value="Yes"
                              id="yes"
                              checked={inputs.materials === `Yes`}
                              onChange={handleYesNo3}
                            />
                            <p className="radio-label">Yes</p>
                            <span className="checkbox-custom circular"></span>
                          </label>
                        </li>
                        <li>
                          <label className="checkbox-label">
                            <input
                              type="radio"
                              value="No"
                              id="no"
                              checked={inputs.materials === `No`}
                              onChange={handleYesNo3}
                            />
                            <p className="radio-label">No</p>
                            <span className="checkbox-custom circular"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {grandTotalHST !== "$0.00" ? (
                    <div>
                      <h2
                        css={css`
                          margin-bottom: 30px !important;
                        `}
                      >
                        Total:
                      </h2>

                      {inputs.radioLabel > 0 ? (
                        <div
                          css={css`
                            display: flex;
                            justify-content: space-between;

                            h3 {
                              font-size: 16px;
                              margin-bottom: 15px;
                            }

                            span {
                              font-size: 16px;
                            }
                          `}
                        >
                          <h3>{`+ ${inputs.radioValue}`}</h3>
                          <span>{formatter.format(inputs.radioLabel)}</span>
                        </div>
                      ) : null}

                      {addOnsLabels3.map((addOnLabel3, i) => {
                        return (
                          <div
                            css={css`
                              display: flex;
                              justify-content: space-between;

                              h3 {
                                font-size: 16px;
                                margin-bottom: 15px;
                              }

                              span {
                                font-size: 16px;
                              }
                            `}
                          >
                            <h3>+ {addOnLabel3}</h3>
                            <span> {formatter.format(addOnsCost3[i])}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                  {grandTotalHST !== "$0.00" ? (
                    <React.Fragment>
                      <div
                        css={css`
                          display: flex;
                          justify-content: space-between;
                          margin-top: 25px;
                          padding-top: 25px;
                          border-top: 1px solid black;

                          h3 {
                            font-size: 16px;
                            margin-bottom: 15px;
                          }

                          span {
                            font-size: 16px;
                          }
                        `}
                      >
                        <h3>+ HST (x0.13)</h3>
                        <span>{grandTotalHST}</span>
                      </div>
                      <div
                        css={css`
                          display: flex;
                          justify-content: space-between;

                          h3 {
                            font-size: 16px;
                            margin-top: 7px;
                            margin-bottom: 50px;
                          }

                          input {
                            font-size: 16px;
                            width: auto;
                            overflow: visible;
                            height: 35px;
                            text-align: right;
                            border: none;
                            margin-bottom: 50px;
                          }
                        `}
                      >
                        <h3>Grand total:</h3>
                        <p>{grandTotalSumHST}</p>
                      </div>
                      <p
                        css={css`
                          margin-bottom: 75px;
                        `}
                      >
                        On future bookings, save 25% by having a scheduled
                        appointment within 2 weeks of your last service, or 10%
                        within 30 days.
                      </p>
                    </React.Fragment>
                  ) : null}

                  <ul>
                    <li>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          id="consent"
                          value="consent"
                          onChange={handleChecked}
                        />
                        <p className="radio-label">
                          I have read and agree to{" "}
                          <Link href="/terms" as="/terms">
                            <a target="_blank">the terms of service.</a>
                          </Link>
                        </p>
                        <span className="checkbox-custom rectangular"></span>
                      </label>
                    </li>
                  </ul>
                  <div
                    css={css`
                      button:disabled {
                        opacity: 0.5;
                      }
                    `}
                  >
                    <button
                      css={css`
                        width: 100%;
                        height: 60px;
                        background: #47424c;
                        border: none;
                        color: #fff;
                        font-family: "Open Sans", sans-serif;
                        font-size: 18px;
                        margin-bottom: 75px;
                      `}
                      type="submit"
                      disabled={inputs.consentBox === "consent" ? status.submitting : true}
                    >
                      {!status.submitting
                        ? !status.submitted
                          ? "Book now"
                          : "Your appointment has been booked!"
                        : "Booking..."}
                    </button>

                    <p>
                      <strong>Payment:</strong> You never pay in advance. After
                      the cleaning, we will send you an electronic invoice that
                      can be paid via credit card or interac e-transfer.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <CallToAction
        callTitle="You're one step away from a clean and happy home!"
        callText="If you'd like to know more about the services we offer, please view our Services page by clicking the button below."
        callLinkUrl="/services"
        callLink="View our services"
        callImage="img/services-bg.jpg"
      />
    </Layout>
  );
};
