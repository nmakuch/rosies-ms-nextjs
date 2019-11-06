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
      <input
        type="checkbox"
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { optionsChecked: [ 0 ] };
  }

  changeEvent(event) {
    let checkedArray = this.state.optionsChecked;
    let selectedValue = event.target.value;

    if (event.target.checked === true) {
      checkedArray.push(parseInt(selectedValue));
      this.setState({
        optionsChecked: checkedArray
      });
    } else {
      let valueIndex = checkedArray.indexOf(selectedValue);
      checkedArray.splice(valueIndex, 1);

      this.setState({
        optionsChecked: checkedArray,
      });
    }
  }
  render() {
    let checkBoxArray = [1,2,3];
       
    let outputCheckboxes = checkBoxArray.map(function(number, i){
      return (<div><CheckBox value={1} id={'string_' + i} onChange={this.changeEvent.bind(this)} /><label htmlFor={'string_' + i}>{number}</label></div>)
    }, this);

    let sum = this.state.optionsChecked.reduce((a, b) => a + b, 0)
    
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
                <div>{outputCheckboxes}</div>
                <div>{JSON.stringify(this.state.optionsChecked)}</div>
                <div>{sum}</div>
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
