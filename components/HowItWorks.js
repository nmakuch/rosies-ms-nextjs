// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/core";

class HowItWorks extends React.Component {
  render() {
    return (
      <section id="service">
        <div className="container">
          <div className="row">
            <div
              css={css`
                width: 100%;
              `}
              className="section-title"
            >
              <h2>{this.props.howTitle}</h2>
              <p>{this.props.howSubTitle}</p>
            </div>
          </div>
          <div className="row">
            <div className="service-item col-sm-12 col-md-6 col-lg-4">
              <img src={this.props.item1img} alt="Img" />
              <h4>{this.props.item1name}</h4>
              <p>{this.props.item1text}</p>
            </div>
            <div className="service-item col-sm-12 col-md-6 col-lg-4">
              <img src={this.props.item2img} alt="Img" />
              <h4>{this.props.item2name}</h4>
              <p>{this.props.item2text}</p>
            </div>
            <div className="service-item col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-0">
              <img src={this.props.item3img} alt="Img" />
              <h4>{this.props.item3name}</h4>
              <p>{this.props.item3text}</p>
            </div>
          </div>
          <div className="row">
            <div className="service-item col-sm-12 col-md-12">
              <a href="#">View Services</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
