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
          text-align: center;
          h2 {
            text-transform: uppercase;
            font-weight: 600;
          }

          h2:first-of-type {
            margin-bottom: 50px;
          }

          h2:last-of-type {
            margin-bottom: 50px;
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
                <h2>Send us a message</h2>
                <Formik
                  initialValues={{ email: "", name: "", subject: "", message: "" }}
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
                <h2>Our Location</h2>
                <div
                  css={css`
                    margin-bottom: 100px;
                  `}
                  className="google-map"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.472979439986!2d-73.97769068489596!3d40.7516207793276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590247c56379%3A0x15e13bea38b43e18!2sChrysler+Building!5e0!3m2!1sen!2sus!4v1477406538220"
                    width="730"
                    height="300"
                    frameBorder="0"
                    allowFullScreen
                    css={css`"border:0;`}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
