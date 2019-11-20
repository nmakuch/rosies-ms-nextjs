// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import GlobalHeader from "../components/GlobalHeader";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    radioValue: "",
    radioLabel: "",
    cleanerMessage: "",
  });

  let radioValues1 = [52.5, 70.0, 87.5, 105.0, 122.5, 140.0];
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

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        email: "",
        message: "",
        radioValue: "",
        radioLabel: "",
        cleanerMessage: "",
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
    console.log(inputs);
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

  return (
    <Layout>
      <GlobalHeader
        globalHeaderTitle="SERVICES / BOOKING"
        globalHeaderImage="../img/services-bg.jpg"
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
                  padding: 0 15px;
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
              font-size: 18px;
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
              margin-bottom: 50px;
            }

            .form-group {
              padding: 0px !important;
            }
          `}
          id="service-form"
        >
          <div className="block">
            <form method="post">
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
                      `}
                      className="col-md-12 col-sm-12"
                    >
                      <div className="form-group">
                        <h2>1) Hourly cleaning packages</h2>
                        <h3>Our regular cleaning rate is $35/hour</h3>
                        <ul>
                          {radioValues1.map((radioValue, i) => {
                            return (
                              <li>
                                <label className="checkbox-label">
                                  <input
                                    type="radio"
                                    value={radioValue}
                                    id={radioArrayId1[i]}
                                    checked={
                                      inputs.radioValue === `${radioValue}`
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
                          <li>
                            <div
                              css={css`
                                textarea {
                                  height: 135px !important;
                                }
                              `}
                              className="form-group-2"
                            >
                              <h4>
                                Please leave instructions for your cleaner
                              </h4>
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
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <h2>{inputs.radioValue}</h2>
          <h2>{inputs.radioLabel}</h2>
          <h2>{inputs.cleanerMessage}</h2>
        </section>
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
          <button type="submit" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? "Submit"
                : "Submitted"
              : "Submitting..."}
          </button>
        </form>
        {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && (
          <div className="success">{status.info.msg}</div>
        )}
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
