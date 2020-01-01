// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { jsx, css, Global } from "@emotion/core";
import { appStyles } from "../styles/styles";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

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

        <Head>
          <title>Rosie and Company - Maid Service: Toronto's best maid service</title>
          <meta
            name="description"
            content="Top rated professional maid and house cleaning services in Toronto"
          />

          <meta
            name="keywords"
            content="maid,house keeping,cleaning service,maid service toronto,maid etobicoke,maid liberty village,maid high park,maid mimico,maid toronto,house cleaning company,maid humber bay, Bi-Weekly Cleaning Service, Bi-Weekly Maid Service, Deep Clean Service, Apartment Cleaning Service, Domestic Cleaning Service, Domestic Maid Service, Maid Service, Residential Maid Service, Monthly Cleaning Service, Condo Maid Service, Monthly Maid Service, Move in Maid Service, Residential Cleaning Service, Move in Cleaning Service, Move out Cleaning Service, Scheduled Cleaning Service, Scheduled Maid Service, House Keeping Service, Condo Cleaning Service, Weekly Cleaning Service, Weekly Maid Service, Housekeeper"
          />
        </Head>

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
