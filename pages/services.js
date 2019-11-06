// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Link from "next/link";
import Layout from "../components/Layout";
import GlobalHeader from "../components/GlobalHeader";
import CallToAction from "../components/CallToAction";
import Checkbox from "../components/CheckBox";

class CheckBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label>{this.props.label}</label>
        <input
          type="checkbox"
          id={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </React.Fragment>
    );
  }
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionsAddOns1: [], optionsAddOns2: [] };
  }

  changeEvent1(event) {
    let checkedArrayAddOns1 = this.state.optionsAddOns1;
    let selectedValue1 = event.target.value;

    if (event.target.checked === true) {
      checkedArrayAddOns1.push(parseInt(selectedValue1));
      this.setState({
        optionsAddOns1: checkedArrayAddOns1
      });
    } else {
      let valueIndex1 = checkedArrayAddOns1.indexOf(selectedValue1);
      checkedArrayAddOns1.splice(valueIndex1, 1);

      this.setState({
        optionsAddOns1: checkedArrayAddOns1
      });
    }
  }

  changeEvent2(event) {
    let checkedArrayAddOns2 = this.state.optionsAddOns2;
    let selectedValue2 = event.target.value;

    if (event.target.checked === true) {
      checkedArrayAddOns2.push(parseInt(selectedValue2));
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

  render() {
    let checkBoxArrayAddOns1 = [54, 23, 108];
    let checkBoxArrayLabels1 = [
      "Basic: kitchen, bathroom, all floors  - 54$ (1.5 hourse)",
      "Basic Plus: kitchen, bathroom, living areas (including bedroom) - 90$ (2.5 hours)",
      "Complete: kitchen, bathroom, living areas, plus one big job (oven, fridge, windows*) - 108$ ( 3 hrs)"
    ];

    let checkBoxArrayAddOns2 = [54, 23, 108];
    let checkBoxArrayLabels2 = [
      "Basic: kitchen, bathroom, all floors  - 54$ (1.5 hourse)",
      "Basic Plus: kitchen, bathroom, living areas (including bedroom) - 90$ (2.5 hours)",
      "Complete: kitchen, bathroom, living areas, plus one big job (oven, fridge, windows*) - 108$ ( 3 hrs)"
    ];

    let grandTotalArr = [];

    let outputCheckboxesAddOns1 = checkBoxArrayAddOns1.map((number, i) => {
      return (
        <div>
          <label htmlFor={"string_" + i}>{checkBoxArrayLabels1[i]}</label>
          <CheckBox
            value={number}
            id={"string_" + i}
            onChange={this.changeEvent1.bind(this)}
          />
        </div>
      );
    }, this);

    let outputCheckboxesAddOns2 = checkBoxArrayAddOns2.map((number, i) => {
      return (
        <div>
          <label htmlFor={"string_" + i}>{checkBoxArrayLabels2[i]}</label>
          <CheckBox
            value={number}
            id={"string_" + i}
            onChange={this.changeEvent2.bind(this)}
          />
        </div>
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

    grandTotalArr.push(sumOptionsAddOns1);
    grandTotalArr.push(sumOptionsAddOns2);

    let grandTotalSum = grandTotalArr.reduce((a, b) => a + b, 0);

    return (
      <Layout>
        <GlobalHeader
          globalHeaderTitle="Services / Booking"
          globalHeaderSubTitle="View a list of our services or book an appointment"
          globalHeaderImage="../img/services-bg.jpg"
        />
        <section
          css={css`
            padding-top: 100px !important;
            padding-bottom: 100px !important;
            h2 {
              text-transform: uppercase;
              font-weight: 600;
            }

            h2:first-of-type {
              margin-bottom: 25px;
            }

            h2:last-of-type {
              margin-bottom: 25px;
            }

            .form-group {
              padding: 15px !important;
            }
          `}
          id="service-form"
        >
          <div className="block">
            <form method="post">
              <div className="container">
                <div className="col-md-8 offset-md-2 col-sm-12">
                  <div className="row">
                    <div className="form-group">
                      <div>{outputCheckboxesAddOns1}</div>
                      <div>sum of this section: ${sumOptionsAddOns1}.00</div>
                      <br />
                      <div>
                        optionsAddOns1 Array:{" "}
                        {JSON.stringify(this.state.optionsAddOns1)}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group">
                      <div>{outputCheckboxesAddOns2}</div>
                      <div>sum of this section: ${sumOptionsAddOns2}.00</div>
                      <br />
                      <div>
                        optionsAddOns1 Array:{" "}
                        {JSON.stringify(this.state.optionsAddOns2)}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group">
                      <input
                        name="grandTotal"
                        id="grandTotal"
                        type="text"
                        className="form-control"
                        value={`Grand Total: $${grandTotalSum}.00`}
                      />
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
