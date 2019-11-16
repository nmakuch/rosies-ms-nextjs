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
      selectBoxValue1: [],
      radio1: "0"
    };
  }

  radioChange(event) {
    this.setState({
      radio1: event.target.value
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
    let selectedValue2 = event.target.value;

    if (event.target.checked === true) {
      checkedArrayAddOns2.push(parseFloat(selectedValue2));
      this.setState({
        optionsAddOns2: checkedArrayAddOns2
      });
    } else {
      let valueIndex2 = checkedArrayAddOns2.indexOf(selectedValue2);
      checkedArrayAddOns2.splice(valueIndex2, 1);

      this.setState({
        optionsAddOns2: checkedArrayAddOns2
      });
    }
  }

  changeEvent3(event) {
    let checkedArrayAddOns3 = this.state.optionsAddOns3;
    let selectedValue3 = event.target.value;

    if (event.target.checked === true) {
      checkedArrayAddOns3.push(parseFloat(selectedValue3));
      this.setState({
        optionsAddOns3: checkedArrayAddOns3
      });
    } else {
      let valueIndex3 = checkedArrayAddOns3.indexOf(selectedValue3);
      checkedArrayAddOns3.splice(valueIndex3, 1);

      this.setState({
        optionsAddOns3: checkedArrayAddOns3
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

    let checkBoxArrayAddOns2 = [60.0, 100.0, 140.0];
    let checkBoxArrayLabels2 = [
      "Basic (1.5 hours): kitchen, bathroom, all floors ($60.00)",
      "Basic plus (2.5 hours): kitchen, bathroom, living areas including bedroom($100.00)",
      "Complete (3.0 hours): kitchen, bathroom, living areas, plus one big job ($140.00)"
    ];

    let checkBoxArrayAddOns3 = [35.0, 20.0, 20.0, 20.0, 15.0, 20.0];
    let checkBoxArrayLabels3 = [
      "Deep clean - wall spot cleaning, baseboards, inside of kitchen & bathroom cabinets ($35.00)",
      "Big task - oven ($20.00)",
      "Big task - inside fridge ($20.00)",
      "Big task - windows ($20.00)",
      "Additional powder room ($15.00)",
      "Additional bathroom ($20.00)"
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

    let radioValues2 = [54, 90, 108];
    let radioLabels2 = [
      "Basic (1.5 hours at $35/hour): kitchen, bathroom, all floors  ($54.00)",
      "Basic Plus (2.5 hours at $35/hour): kitchen, bathroom, living areas including bedroom ($90.00)",
      "Complete (3.0 hours at $35/hour): kitchen, bathroom, living areas plus one big job ($108.00)"
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
          id={"string_" + i}
          onChange={this.changeEvent2.bind(this)}
          label={checkBoxArrayLabels2[i]}
        />
      );
    }, this);

    let outputCheckboxesAddOns3 = checkBoxArrayAddOns3.map((number, i) => {
      return (
        <CheckBox
          value={number}
          id={"string_" + i}
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

    let grandTotalSum = formatter.format(
      grandTotalArr.reduce((a, b) => a + b, 0) + parseFloat(this.state.radio1)
    );

    let grandTotalHST = formatter.format(
      grandTotalArr.reduce((a, b) => a + b * 0.13, 0) +
        parseFloat(this.state.radio1)
    );

    let grandTotalSumHST = formatter.format(
      grandTotalArr.reduce((a, b) => a + b * 1.13, 0) +
        parseFloat(this.state.radio1)
    );

    return (
      <Layout>
        <GlobalHeader
          globalHeaderTitle="Services / Booking"
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
            <div className="col-md-10 offset-md-1 col-sm-12">
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
                <div className="col-md-10 offset-md-1 col-sm-12">
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
                      }
                    `}
                    className="row"
                  >
                    <h3>2) Bedroom up to 1000 sq/ft (1 bathroom):</h3>
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
                    <div>
                      <h2
                        css={css`
                          margin-bottom: 30px !important;
                        `}
                      >
                        Your plan:
                      </h2>
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
                            `}
                          >
                            <h3>+ {addOnLabel1}</h3>
                            <span> {formatter.format(addOnsCost1[i])}</span>
                          </div>
                        );
                      })
                      }
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
                        }

                        span {
                          font-size: 16px;
                        }
                      `}
                    >
                      <h3>Grand total:</h3>
                      <span>{grandTotalSumHST}</span>
                    </div>
                  </div>
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
