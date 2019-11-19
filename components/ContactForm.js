// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class ContactForm extends React.Component {
  render() {
    return (
      <React.Fragment>
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
                  <h2>Feel free to email or call at any time</h2>
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
                            <form method="post">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="form-control"
                                  placeholder="Your name"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  id="email"
                                  type="text"
                                  name="email"
                                  className="form-control"
                                  placeholder="Your email"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  name="subject"
                                  id="subject"
                                  type="text"
                                  className="form-control"
                                  placeholder="Message subject"
                                />
                              </div>
                              <div className="form-group-2">
                                <textarea
                                  name="message"
                                  id="message"
                                  className="form-control"
                                  rows="3"
                                  placeholder="Your message"
                                ></textarea>
                              </div>
                              <button className="btn btn-default" type="submit">
                                submit
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
      </React.Fragment>
    );
  }
}

export default ContactForm;
