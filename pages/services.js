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
      optionsAddOns1: [],
      optionsAddOns2: [],
      optionsAddOns3: [],
      labelsAddOns1: [],
      labelsAddOns2: [],
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

  changeEvent1(event) {
    let checkedArrayAddOns1 = this.state.optionsAddOns1;
    let checkedArrayIds1 = this.state.labelsAddOns1;
    let selectedId1 = event.target.id;
    let selectedValue1 = event.target.value;

    if (event.target.checked === true) {
      checkedArrayIds1.push(selectedId1);
      checkedArrayAddOns1.push(parseFloat(selectedValue1));
      this.setState({
        optionsAddOns1: checkedArrayAddOns1,
        labelsAddOns1: checkedArrayIds1
      });
    } else {
      let valueIndex1 = checkedArrayAddOns1.indexOf(selectedValue1);
      checkedArrayAddOns1.splice(valueIndex1, 1);
      checkedArrayIds1.splice(valueIndex1, 1);

      this.setState({
        optionsAddOns1: checkedArrayAddOns1,
        labelsAddOns1: checkedArrayIds1
      });
    }
  }

  changeEvent2(event) {
    let checkedArrayAddOns2 = this.state.optionsAddOns2;
    let checkedArrayIds2 = this.state.labelsAddOns2;
    let selectedId2 = event.target.id;
    let selectedValue2 = event.target.value;

    if (event.target.checked === true) {
      checkedArrayIds2.push(selectedId2);
      checkedArrayAddOns2.push(parseFloat(selectedValue2));
      this.setState({
        optionsAddOns2: checkedArrayAddOns2,
        labelsAddOns2: checkedArrayIds2
      });
    } else {
      let valueIndex2 = checkedArrayAddOns2.indexOf(selectedValue2);
      checkedArrayAddOns2.splice(valueIndex2, 1);
      checkedArrayIds2.splice(valueIndex2, 1);

      this.setState({
        optionsAddOns2: checkedArrayAddOns2,
        labelsAddOns2: checkedArrayIds2
      });
    }
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
    let addOnsLabels1 = this.state.labelsAddOns1;
    let addOnsCost1 = this.state.optionsAddOns1;

    let checkBoxArrayAddOns1 = [54.0, 90.0, 108.0];
    let checkBoxArrayLabels1 = [
      "Basic (1.5 hours): kitchen, bathroom, all floors ($54.00)",
      "Basic plus (2.5 hours): kitchen, bathroom, living areas including bedroom($90.00)",
      "Complete (3.0 hours): kitchen, bathroom, living areas, plus one big job ($108.00)"
    ];
    let checkBoxArrayIds1 = [
      "Basic (1.5 hours)",
      "Basic plus (2.5 hours)",
      "Complete (3.0 hours)"
    ];

    let addOnsLabels2 = this.state.labelsAddOns2;
    let addOnsCost2 = this.state.optionsAddOns2;

    let checkBoxArrayAddOns2 = [60.0, 100.0, 140.0];
    let checkBoxArrayLabels2 = [
      "Basic (1.5 hours): kitchen, bathroom, all floors ($60.00)",
      "Basic plus (2.5 hours): kitchen, bathroom, living areas including bedroom($100.00)",
      "Complete (3.0 hours): kitchen, bathroom, living areas, plus one big job ($140.00)"
    ];

    let checkBoxArrayIds2 = [
      "Basic (1.5 hours) x2",
      "Basic plus (2.5 hours) x2",
      "Complete (3.0 hours) x2"
    ];

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
      "Basic (1.5 hours at $35/hour): kitchen, bathroom, all floors  ($54.00)",
      "Basic Plus (2.5 hours at $35/hour): kitchen, bathroom, living areas including bedroom ($90.00)",
      "Complete (3.0 hours at $35/hour): kitchen, bathroom, living areas plus one big job ($108.00)"
    ];

    let radioArrayId2 = [
      "Basic (1.5 hours)",
      "Basic plus (2.5 hours)",
      "Complete (3.0 hours)"
    ];

    let grandTotalArr = [];

    let outputCheckboxesAddOns1 = checkBoxArrayAddOns1.map((number, i) => {
      return (
        <CheckBox
          value={number}
          id={checkBoxArrayIds1[i]}
          onChange={this.changeEvent1.bind(this)}
          label={checkBoxArrayLabels1[i]}
        />
      );
    }, this);

    let outputCheckboxesAddOns2 = checkBoxArrayAddOns2.map((number, i) => {
      return (
        <CheckBox
          value={number}
          id={checkBoxArrayIds2[i]}
          onChange={this.changeEvent2.bind(this)}
          label={checkBoxArrayLabels2[i]}
        />
      );
    }, this);

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

    let sumOptionsAddOns1 = this.state.optionsAddOns1.reduce(
      (a, b) => a + b,
      0
    );

    let sumOptionsAddOns2 = this.state.optionsAddOns2.reduce(
      (a, b) => a + b,
      0
    );

    let sumOptionsAddOns3 = this.state.optionsAddOns3.reduce(
      (a, b) => a + b,
      0
    );

    grandTotalArr.push(sumOptionsAddOns1);
    grandTotalArr.push(sumOptionsAddOns2);
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
          globalHeaderSubTitle="View a list of our services or book an appointment"
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
                    <h2>Select one of the following plans:</h2>
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
                      `}
                      className="col-md-12 col-sm-12"
                    >
                      <div className="form-group">
                        <h3>1) Cleaning by the hour (Rate: $35/hr)</h3>
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
                            <h3>
                              2) Pre-structured cleaning package (Rate:
                              $35/hour)
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
                        margin-top: 50px;
                      `}
                    >
                      These add-ons can be added to your package:
                    </h2>
                    <h3>
                      1) Bachelor or 1 Bedroom up to 600 sq/ft (1 bathroom):
                    </h3>
                    <div className="form-group">
                      <div>{outputCheckboxesAddOns1}</div>
                      <br />
                    </div>
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
                            top: 8px;
                            line-height: 1.2rem;
                          }
                        }
                      }
                    `}
                    className="row"
                  >
                    <h3>2) 2 Bedroom up to 1000 sq/ft (1 bathroom):</h3>
                    <div className="form-group">
                      <div>{outputCheckboxesAddOns2}</div>
                      <br />
                    </div>
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
                    <h3>3) Other package add ons:</h3>
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

                        {addOnsLabels1.map((addOnLabel1, i) => {
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
                              <h3>+ {addOnLabel1}</h3>
                              <span> {formatter.format(addOnsCost1[i])}</span>
                            </div>
                          );
                        })}

                        {addOnsLabels2.map((addOnLabel2, i) => {
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
                              <h3>+ {addOnLabel2}</h3>
                              <span> {formatter.format(addOnsCost2[i])}</span>
                            </div>
                          );
                        })}

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
