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

            p:last-of-type {
              margin-bottom: 75px;
            }
          `}
          id="contact-form"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <h2>Introduction</h2>
                  <p>
                    In consideration of the covenants, agreements and conditions
                    contained herein the parties agree as follows: Rosie's Maid
                    Service agrees, during the Term of this Agreement,
                    commencing on the Commencement Date indicated above, to
                    provide and carry out those household cleaning and other
                    services (the “Services”), at those times and at the Service
                    Location all as indicated on the previous page.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <h2>Term and Termination</h2>
                  <p>
                    The Term of this Agreement shall be a fixed term of 12
                    consecutive months, starting on the CommencementDate. It can
                    be terminated without liability or penalty by either party
                    after it has been initially signed by giving one business
                    day notice of termination. Acceptance of such termination
                    will be signified through a confirmation number, duly
                    assigned by Rosie's Maid Service. Rosie's Maid Service is
                    obligated to supply such a number after proper notice has
                    been given.
                  </p>
                  <p>
                    Client may cancel or re-schedule a Services visit without
                    charge by giving Rosie's Maid Service at least one (1)
                    business day’s telephone notice prior to the time of the
                    scheduled visit. At the time of Client’s call, Rosie's Maid
                    Service shall provide Client with a number to confirm such
                    cancellation or rescheduling. If Client does not give
                    Rosie's Maid Service at least one (1) business day’s notice
                    of cancellation or rescheduling and obtain such number,
                    Rosie's Maid Service may charge Client a cancellation fee,
                    which shall be 50.00$.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <h2>General Conditions</h2>
                  <p>
                    Client agrees to furnish all equipment necessary for the
                    provision of the Services. This equipment will remain the
                    property of the Client.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <h2>Service Agreement</h2>
                  <p>
                    Rosie's Maid Service agrees to provide the Services in a
                    professional manner using every care to accomplish a
                    satisfactory service.
                  </p>

                  <p>
                    If Client is dissatisfied with the Services provided on any
                    visit, Client shall notify Rosie's Maid Service thereof by
                    telephone within one (1) business day of the Rosie's Maid
                    Service visit in question. Rosie's Maid Service shall make a
                    reasonable opportunity to rectify Client’s dissatisfaction
                    with its Services. Due to the subjective nature of cleaning,
                    however, refunds cannot be given.
                  </p>

                  <p>
                    The services offered are calculated based on an hourly rate,
                    and therefore Rosie’s Maid Service cannot guarantee that all
                    the items included under your selected service plan will be
                    completed. The items included in the plans are based on an
                    expectation that the property being serviced receives
                    regular cleaning. Rosie’s Maid Service staff will advise the
                    Client as soon as possible where a determination has been
                    made that it is unlikely that they will be able to complete
                    all the services.{" "}
                  </p>

                  <p>
                    Client agrees that any changes to the physical space of the
                    Service Location in which the Services are to be provided
                    may result in additional charges, to be assessed in
                    accordance with Rosie's Maid Service’ normal fee structure.
                  </p>

                  <p>
                    In consideration of the performance of the Services by
                    Rosie's Maid Service, the Client agrees to pay the fee set
                    out on the face page of this Agreement, together with any
                    applicable taxes thereon, when the Services have been
                    rendered, by credit card payment charged to the credit card
                    indicated on the face page of this Agreement, charged on the
                    day that the Services are rendered.
                  </p>

                  <p>
                    Subject to the foregoing, the liability of Rosie's Maid
                    Service to Client under this Agreement shall be limited to
                    performance or reperformance of the Services. In no event
                    shall Rosie's Maid Service be liable for direct, indirect or
                    consequential damages.
                  </p>

                  <p>
                    In the event Rosie's Maid Service management agrees to
                    repair or replace any item damaged in a client’s home while
                    services are being performed as a goodwill gesture, the
                    company reserves the right to choose a contractor or
                    similarly designated individual and will pay them directly
                    for their services. If a replacement item is being
                    purchased. Rosie's Maid Service will purchase the item
                    directly.
                  </p>

                  <p>
                    As Independent Contractors, the cleaning staff members are
                    individually responsible for their own Workplace Safety
                    Insurance Board coverage as it pertains to their work for
                    Rosie’s Maid Service.
                  </p>

                  <p>
                    Client agrees not to approach any current employee or
                    subcontractor of Rosie's Maid Service for the purpose of
                    offering further engagement or employment, during the Term
                    of this Agreement and for a period of six (6) months
                    thereafter. In consideration of the training and
                    professionalism involved with Rosie's Maid Service employees
                    or subcontractors the Client agrees to pay a placement fee,
                    as liquidated damages and not as penalty, of two thousand
                    and five hundred ($2,500) dollars to Quality if it, he or
                    she breaches this provision.
                  </p>

                  <p>
                    Client understands and agrees that Rosie's Maid Service’
                    employees and subcontractors are not required to do anything
                    that could cause them harm or injury, including lifting,
                    moving or otherwise putting into motion any object weighing
                    more than 20 lbs.
                  </p>

                  <p>
                    For the sake of employee safety, pets must be kept securely
                    away from staff while they are at the Service location.
                    Staff may refuse to work at a particular location if they
                    feel they are in danger from dogs or other animals.
                  </p>

                  <p>
                    Failure by Client to pay Rosie's Maid Service’ charges for
                    Services performed by Rosie's Maid Service under this
                    Agreement shall excuse Rosie's Maid Service from its
                    obligations to provide such Services so long as such failure
                    continues.
                  </p>

                  <p>
                    Upon termination of this Agreement, the rights and
                    obligations of both parties under this Agreement shall be at
                    an end, but Client shall continue to be liable for payment
                    to Rosie's Maid Service of fees charged to Client in respect
                    of Services performed prior to termination.
                  </p>

                  <p>
                    The Client recognizes that Rosie's Maid Service may use any
                    methods to lawfully collect any monies owed under this
                    agreement and disclose such indiscretions to credit
                    reporting agencies after a reasonable period of time.
                  </p>

                  <p>
                    For the purposes of this Agreement, a “business day” shall
                    mean Monday to Friday, inclusive, except when a statutory
                    holiday falls on any such day, within the hours of 8:00 a.m.
                    and 5:00 p.m. on any such day.
                  </p>

                  <p>
                    This Agreement forms the entire understanding between the
                    parties. No modifications or amendments to this Agreement
                    shall be made except by mutual consent in writing and signed
                    by both parties.
                  </p>

                  <p>
                    This Agreement shall enure to the benefit of and be binding
                    upon the parties hereto and their respective executors,
                    administrators, successors and assigns.
                  </p>

                  <p>
                    In WITNESS WHEREOF the parties hereto have executed this
                    agreement as of the day and date written on the opposite
                    page.
                  </p>
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
