// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { theme } from "../styles/styles";
import Link from "next/link";
import Layout from "../components/Layout";
import GlobalHeader from "../components/GlobalHeader";
import CallToAction from "../components/CallToAction";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

class CheckBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label className="checkbox-label">
          <input
            type="checkbox"
            id={this.props.id}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <p className="radio-label">{this.props.label}</p>
          <span className="checkbox-custom rectangular"></span>
        </label>
      </React.Fragment>
    );
  }
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsAddOns3: [],
      labelsAddOns3: [],
      selectBoxValue1: [],
      radio1: "",
      radioLabel: 0.0
    };
  }

  radioChange(event) {
    this.setState({
      radio1: event.target.value,
      radioLabel: event.target.id
    });
  }

  changeEvent3(event) {
    let checkedArrayAddOns3 = this.state.optionsAddOns3;
    let checkedArrayIds3 = this.state.labelsAddOns3;
    let selectedId3 = event.target.id;
    let selectedValue3 = event.target.value;

    if (event.target.checked === true) {
      checkedArrayIds3.push(selectedId3);
      checkedArrayAddOns3.push(parseFloat(selectedValue3));
      this.setState({
        optionsAddOns3: checkedArrayAddOns3,
        labelsAddOns3: checkedArrayIds3
      });
    } else {
      let valueIndex3 = checkedArrayAddOns3.indexOf(selectedValue3);
      checkedArrayAddOns3.splice(valueIndex3, 1);
      checkedArrayIds3.splice(valueIndex3, 1);

      this.setState({
        optionsAddOns3: checkedArrayAddOns3,
        labelsAddOns3: checkedArrayIds3
      });
    }
  }

  render() {
    let addOnsLabels3 = this.state.labelsAddOns3;
    let addOnsCost3 = this.state.optionsAddOns3;

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

    let radioValues2 = [54.0, 90.0, 108.0];
    let radioLabels2 = [
      "Basic (1.5 hours): kitchen, bathroom, all floors  ($54.00)",
      "Basic Plus (2.5 hours): kitchen, bathroom, living areas including bedroom ($90.00)",
      "Complete (3.0 hours): kitchen, bathroom, living areas plus one big job ($108.00)"
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

    let grandTotalArr = [];

    let outputCheckboxesAddOns3 = checkBoxArrayAddOns3.map((number, i) => {
      return (
        <CheckBox
          value={number}
          id={checkBoxArrayIds3[i]}
          onChange={this.changeEvent3.bind(this)}
          label={checkBoxArrayLabels3[i]}
        />
      );
    }, this);

    let sumOptionsAddOns3 = this.state.optionsAddOns3.reduce(
      (a, b) => a + b,
      0
    );

    grandTotalArr.push(sumOptionsAddOns3);

    let reducedArr = grandTotalArr.reduce((a, b) => a + b, 0);

    let grandTotalHST = formatter.format(
      reducedArr * 0.13 + this.state.radio1 * 0.13
    );

    let grandTotalSumHST = formatter.format(
      reducedArr * 1.13 + this.state.radio1 * 1.13
    );

    return (
      <Layout>
        <GlobalHeader
          globalHeaderTitle="Services and Booking"
          globalHeaderImage="../img/services-bg.jpg"
        />
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
                                      this.state.radio1 === `${radioValue}`
                                    }
                                    onChange={this.radioChange.bind(this)}
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
                            <div className="form-group-2">
                              <h4>
                                Please leave instructions for your cleaner:
                              </h4>
                              <textarea
                                name="hourlyMessage"
                                id="hourlyMessage"
                                className="form-control"
                                rows="3"
                                css={css`
                                  height: 135px !important;
                                `}
                                placeholder="Your message"
                              ></textarea>
                            </div>
                          </li>
                          <li>
                            <h2>2) Pre-structured cleaning package</h2>
                          </li>
                          <li>
                            <h3>
                              1 Bedroom or Bachelor up to 600 sq/ft (1 bathroom)
                            </h3>
                          </li>
                          {radioValues2.map((radioValue, i) => {
                            return (
                              <li>
                                <label className="checkbox-label">
                                  <input
                                    type="radio"
                                    value={radioValue}
                                    id={radioArrayId2[i]}
                                    checked={
                                      this.state.radio1 === `${radioValue}`
                                    }
                                    onChange={this.radioChange.bind(this)}
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
                            <h3>2 Bedroom up to 1000 sq/ft (1 bathroom)</h3>
                          </li>
                          {radioValues3.map((radioValue, i) => {
                            return (
                              <li>
                                <label className="checkbox-label">
                                  <input
                                    type="radio"
                                    value={radioValue}
                                    id={radioArrayId3[i]}
                                    checked={
                                      this.state.radio1 === `${radioValue}`
                                    }
                                    onChange={this.radioChange.bind(this)}
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
                    <h2
                      css={css`
                        margin-bottom: 0 !important;
                        margin-top: 50px;
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
                      <div>{outputCheckboxesAddOns3}</div>
                      <br />
                    </div>
                  </div>
                  <div
                    css={css`
                      padding: 0 15px;
                    `}
                    className="row"
                  >
                    {grandTotalHST !== "$0.00" ? (
                      <div>
                        <h2
                          css={css`
                            margin-bottom: 30px !important;
                          `}
                        >
                          Your plan:
                        </h2>

                        {this.state.radio1 > 0 ? (
                          <div
                            css={css`
                              display: flex;
                              justify-content: space-between;
                              width: 400px;
                              padding: 0 5px 0 0;

                              input {
                                font-family: "Roboto", sans-serif;
                                font-size: 16px;
                                font-weight: 600;
                                margin-bottom: 15px;
                                border: none;
                                overflow: visible;
                                width: auto;
                              }

                              @media only screen and (max-width: 500px) {
                                width: 330px;

                                input {
                                  width: auto;
                                }
                              }

                              @media only screen and (max-width: 390px) {
                                width: 275px;
                              }
                            `}
                          >
                            <input
                              type="text"
                              name="planType"
                              id="planType"
                              value={`+ ${this.state.radioLabel}`}
                            />
                            <span>{formatter.format(this.state.radio1)}</span>
                          </div>
                        ) : null}

                        {addOnsLabels3.map((addOnLabel3, i) => {
                          return (
                            <div
                              css={css`
                                display: flex;
                                justify-content: space-between;
                                width: 400px;

                                h3 {
                                  font-size: 16px;
                                  margin-bottom: 15px;
                                }

                                span {
                                  font-size: 16px;
                                }

                                @media only screen and (max-width: 500px) {
                                  width: 325px;
                                }

                                @media only screen and (max-width: 390px) {
                                  width: 270px;
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
                  </div>

                  {grandTotalHST !== "$0.00" ? (
                    <React.Fragment>
                      <div
                        css={css`
                          padding: 0 15px;
                        `}
                        className="row"
                      >
                        <div
                          css={css`
                            display: flex;
                            justify-content: space-between;
                            width: 400px;
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

                            @media only screen and (max-width: 500px) {
                              width: 325px;
                            }

                            @media only screen and (max-width: 390px) {
                              width: 270px;
                            }
                          `}
                        >
                          <h3>+ HST (x0.13)</h3>
                          <span>{grandTotalHST}</span>
                        </div>
                      </div>

                      <div
                        css={css`
                          padding: 0 15px;
                        `}
                        className="row"
                      >
                        <div
                          css={css`
                            display: flex;
                            justify-content: space-between;
                            width: 400px;

                            h3 {
                              font-size: 16px;
                              margin-top: 7px;
                              margin-bottom: 75px;
                            }

                            input {
                              font-size: 16px;
                              width: auto;
                              overflow: visible;
                              height: 35px;
                              text-align: right;
                              border: none;
                              margin-bottom: 75px;
                            }

                            @media only screen and (max-width: 500px) {
                              width: 330px;
                            }

                            @media only screen and (max-width: 390px) {
                              width: 270px;
                            }
                          `}
                        >
                          <h3>Grand total:</h3>
                          <input
                            type="text"
                            name="grandTotal"
                            id="grandTotal"
                            value={grandTotalSumHST}
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  ) : null}
                  <button className="btn btn-default" type="submit">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
        <CallToAction
          callTitle="You're one step away from a clean and happy home!"
          callText="If you'd like to know more about the services we offer, please view our Services page by clicking the button below."
          callLinkUrl="/services"
          callLink="View our services"
          callImage="img/services-bg.jpg"
        />
      </Layout>
    );
  }
}

export default Services;
