// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import Layout from "../components/Layout";
import GlobalHeader from "../components/GlobalHeader";
import CallToAction from "../components/CallToAction";

class FAQ extends React.Component {
  render() {
    return (
      <Layout>
        <GlobalHeader
          globalHeaderTitle="Frequently Asked Questions"
          globalHeaderImage="../img/faq-bg.jpg"
        />
        <section id="service">
          <div className="container">
            <div className="row">
              <div
                css={css`
                  width: 100%;
                  text-align: left;
                  margin-bottom: 50px;
                `}
                className="section-title col-lg-8 offset-lg-2"
              >
                <h2>Rosie's Maid Service's FAQs</h2>
              </div>
            </div>
            <div
              className="row"
              css={css`
                text-align: left;
                font-size: 16px;
                details {
                  margin-bottom: 25px;
                  summary {
                    margin-bottom: 10px;
                    font-size: 20px;
                    font-weight: 600;
                  }

                  summary:focus {
                    outline: none;
                  }

                  summary:hover {
                    color: 	#666;
                  }

                  summary::-webkit-details-marker {
                      font-size: 20px;
                      padding-right: 20px;
                  }
                }

                p {
                  margin-bottom: 50px;
                  padding-left: 45px;
                }
              `}
            >
              <div className="col-lg-8 offset-lg-2">
                <details open>
                  <summary>
                    <span>1) Who will clean my home?</span>
                  </summary>
                  <p>
                    For your first visit, we will send one of our professional
                    maids to your home. We strongly recommend that you are
                    present during this visit, as it will give you the
                    opportunity to provide your own detailed instructions and
                    expectations. If you are satisfied with the service, we will
                    assign this maid to your home for all future visits.
                  </p>
                </details>
                <details open>
                  <summary>
                    <span>
                      2) What are the qualifications of the cleaning staff?
                    </span>
                  </summary>
                  <p>
                    We only hire experienced personnel who have years of
                    experience in the industry. In addition to their experience
                    level, they must all pass a criminal record check, a
                    rigorous interview process, and a training program that
                    involves passing a final examination.
                  </p>
                </details>
                <details open>
                  <summary>
                    <span>
                      3) What will Rosie’s Maid Service clean within my home?
                    </span>
                  </summary>
                  <p>
                    While we do offer pre-structured plans that cover the usual
                    items, our prices are on an hourly rate basis. This means
                    that you can ask our staff to spend the time exactly how you
                    want, on anything you want, within reason. Our staff retains
                    the right to refuse work they deem unsafe. You must also
                    provide all the necessary tools and equipment required to
                    perform these tasks.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>4) Do I need to provide the cleaning supplies?</span>
                  </summary>
                  <p>
                    Yes. There are a couple of major reasons for this. Firstly,
                    this allows your home to be cleaned with the products of
                    your choice that are best suited for your home. Secondly,
                    part of what allows us to offer the best rates in the area
                    is the fact that our staff operates independently and does
                    not always have access to crew vehicles where supplies and
                    equipment can be carried. Many of them use public transit to
                    get around. Some of our staff may bring their own products,
                    but they will only use them with your authorization. For a
                    list of the required items to have on hand, click here.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>
                      5) When will I be charged for a service and how can I make
                      payments?
                    </span>
                  </summary>
                  <p>
                    You will be sent an invoice via e-mail following the
                    service. You never pay in advance. Payment options are via
                    credit card or interac e-transfer.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>6) What if I need to cancel an appointment?</span>
                  </summary>
                  <p>
                    No problem. As long as you give us a minimum of 24 hours
                    notice, you will be able to cancel the visit free of charge.
                  </p>
                </details>
                <details>
                  <summary>
                    <span>7) How will my maid access my home?</span>
                  </summary>
                  <p
                    css={css`
                      margin-bottom: 0 !important;
                    `}
                  >
                    If you will not be home during our visit, you must contact
                    us ahead of time in order to make arrangements.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
        <CallToAction
          callTitle="You're one step away from a clean and happy home!"
          callText="If you'd like to know more about the services we offer, please view our Services page by clicking the button below."
          callLinkUrl="/services"
          callLink="View our services"
          callImage="img/faq-bg.jpg"
        />
      </Layout>
    );
  }
}

export default FAQ;
