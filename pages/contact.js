// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import GlobalHeader from "../components/GlobalHeader";
import Router from "next/router";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        name: "",
        email: "",
        phone: "",
        message: ""
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

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
    setTimeout(function() {
      Router.push("/contact#global-header");
    }, 1000);
  };

  return (
    <Layout>
      <GlobalHeader
        globalHeaderTitle="Contact Us"
        globalHeaderImage="../img/contact-bg.jpg"
      />
      <main>
        <section
          css={css`
            padding: 100px 15px !important;
            h2 {
              font-weight: 600;
            }

            h2:first-of-type {
              margin-bottom: 25px;
            }

            h2:last-of-type {
              margin-bottom: 25px;
            }

            @media only screen and (max-width: 767px) {
              h2 {
                font-size: 28px !important;
              }
            }
          `}
          id="contact-form"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <h2>Feel free to email or call at any time between 8:00am - 8:00pm</h2>
                  <p
                    css={css`
                      font-size: 16px;
                    `}
                  >
                    If you'd rather speak to us in person or send an email at
                    your own leisure, feel free to email or call us at any time,
                    we'd be more than happy to answer your questions or give an
                    estimated price.
                  </p>
                  <p
                    css={css`
                      font-size: 16px;
                    `}
                  >
                    <strong>Email:</strong> rosieandcompany1@gmail.com
                  </p>
                  <p
                    css={css`
                      font-size: 16px;
                      margin-bottom: 75px;
                    `}
                  >
                    <strong>Phone number:</strong> (437) 777-6243
                  </p>

                  <h2>Or submit a quick message</h2>
                  <section
                    css={css`
                      padding-top: 0 !important;
                    `}
                    id="contact-form"
                  >
                    <div className="container">
                      <div className="row">
                        <div
                          css={css`
                            padding: 0 0 !important;
                          `}
                          className="col-md-12 col-sm-12"
                        >
                          <div className="block">
                            <form onSubmit={handleOnSubmit}>
                              <div className="form-group">
                                <input
                                  id="name"
                                  type="name"
                                  onChange={handleOnChange}
                                  required
                                  className="form-control"
                                  value={inputs.name}
                                  placeholder="Your name"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  id="email"
                                  type="email"
                                  onChange={handleOnChange}
                                  required
                                  className="form-control"
                                  value={inputs.email}
                                  placeholder="Your email"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  id="phone"
                                  type="phone"
                                  onChange={handleOnChange}
                                  required
                                  className="form-control"
                                  value={inputs.phone}
                                  placeholder="Your phone number"
                                />
                              </div>
                              <div className="form-group-2">
                                <textarea
                                  id="message"
                                  name="message"
                                  onChange={handleOnChange}
                                  required
                                  className="form-control"
                                  value={inputs.message}
                                  rows="3"
                                  placeholder="Your message"
                                />
                              </div>
                              {status.info.error && (
                                <div className="error">
                                  Error: {status.info.msg}
                                </div>
                              )}
                              <button
                                type="submit"
                                disabled={status.submitting}
                              >
                                {!status.submitting
                                  ? !status.submitted
                                    ? "Submit"
                                    : "Your message has been submitted"
                                  : "Submitting..."}
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction
        callTitle="You're one step away from a clean and happy home!"
        callText="If you'd like to know more about the services we offer, please view our Services page by clicking the button below."
        callLinkUrl="/services"
        callLink="View our services"
        callImage="img/contact-bg.jpg"
      />
    </Layout>
  );
};
