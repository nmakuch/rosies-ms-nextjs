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
    this.state = { optionsAddOns1: [0] };
  }

  changeEvent(event) {
    let checkedArrayAddOns1 = this.state.optionsAddOns1;
    let selectedValue = event.target.value;

    if (event.target.checked === true) {
      checkedArrayAddOns1.push(parseInt(selectedValue));
      this.setState({
        optionsAddOns1: checkedArrayAddOns1
      });
    } else {
      let valueIndex = checkedArrayAddOns1.indexOf(selectedValue);
      checkedArrayAddOns1.splice(valueIndex, 1);

      this.setState({
        optionsAddOns1: checkedArrayAddOns1
      });
    }
  }
  render() {
    let checkBoxArrayAddOns1 = [54.00, 23, 108];
    let checkBoxArrayLabels = [
      "Basic: kitchen, bathroom, all floors  - 54$ (1.5 hourse)",
      "Basic Plus: kitchen, bathroom, living areas (including bedroom) - 90$ (2.5 hours)",
      "Complete: kitchen, bathroom, living areas, plus one big job (oven, fridge, windows*) - 108$ ( 3 hrs)"
    ];

    let outputCheckboxesAddOns1 = checkBoxArrayAddOns1.map((number, i) => {
      return (
        <div>
          <label htmlFor={"string_" + i}>
            {checkBoxArrayLabels[i]}
            {number}
          </label>
          <CheckBox
            value={number}
            id={"string_" + i}
            onChange={this.changeEvent.bind(this)}
          />
        </div>
      );
    }, this);

    let sum = this.state.optionsAddOns1.reduce((a, b) => a + b, 0);

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
          `}
          id="contact-form"
        >
          <div className="container">
            <div className="row">
              <div>
                <div>{outputCheckboxesAddOns1}</div>
                <div>{JSON.stringify(this.state.optionsAddOns1)}</div>
                <div>${sum}.00</div>
              </div>
            </div>
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
