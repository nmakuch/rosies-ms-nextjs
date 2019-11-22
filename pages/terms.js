// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Layout from "../components/Layout";
import CallToAction from "../components/CallToAction";
import GlobalHeader from "../components/GlobalHeader";

export default () => {
  return (
    <Layout>
      <GlobalHeader
        globalHeaderTitle="TERMS AND CONDITIONS"
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
          `}
          id="contact-form"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <h2>Feel free to e-mail or call at any time</h2>
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
                    <strong>Email:</strong> information@rosiesmaidservice.ca
                  </p>
                  <p
                    css={css`
                      font-size: 16px;
                      margin-bottom: 75px;
                    `}
                  >
                    <strong>Phone number:</strong> 1 (234) 567-8910
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
                                  id="subject"
                                  type="subject"
                                  onChange={handleOnChange}
                                  required
                                  className="form-control"
                                  value={inputs.subject}
                                  placeholder="The subject of your message"
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
                              <button
                                type="submit"
                                disabled={status.submitting}
                              >
                                {!status.submitting
                                  ? !status.submitted
                                    ? "Submit"
                                    : "Submitted"
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
        callImage="img/contact-bg.jpg"
      />
    </Layout>
  );
};
