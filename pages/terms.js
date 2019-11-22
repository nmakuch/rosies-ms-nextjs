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
        <h2>Terms</h2>
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
