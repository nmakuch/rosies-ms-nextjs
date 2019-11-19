// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { jsx, css, Global } from "@emotion/core";
import { appStyles } from "../styles/styles";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global
          styles={css`
            ${appStyles}
          `}
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <NavBar />

        <div>
          <div css={this.props.contentClass}>{this.props.children}</div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
