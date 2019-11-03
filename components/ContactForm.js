// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Formik } from "formik";
import Link from "next/link";

class ContactForm extends React.Component {
  render() {
    return (
      <section
        css={css`
          h2 {
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 25px;
          }

          form {
            margin-bottom: 100px;
          }
        `}
        id="contact-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12">
              <div className="block">
                <h2>FEEL FREE TO EMAIL OR CALL AT ANY TIME</h2>
                <p
                  css={css`
                    font-size: 16px;
                  `}
                >
                  If you'd like to speak to us in person or send an email at your
                  own leisure, feel free to email or call us at any time, we'd
                  be more than happy to answer your questions or give an
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

                <h2>OR SUMBIT A QUICK MESSAGE</h2>
                <Formik
                  initialValues={{
                    email: "",
                    name: "",
                    subject: "",
                    message: ""
                  }}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="name"
                          name="name"
                          className="form-control"
                          placeholder="Your name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </div>
                      {errors.name && touched.name && errors.name}
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email && touched.email && errors.email}
                      <div className="form-group">
                        <input
                          type="subject"
                          name="subject"
                          placeholder="Your subject"
                          className="form-control"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.subject}
                        />
                      </div>
                      {errors.name && touched.name && errors.name}
                      <div className="form-group-2">
                        <textarea
                          type="text"
                          name="message"
                          rows="3"
                          className="form-control"
                          placeholder="Your message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                        />
                      </div>
                      {errors.message && touched.message && errors.message}
                      <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
