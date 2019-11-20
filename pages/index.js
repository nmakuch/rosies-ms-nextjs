// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Link from "next/link";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import ServiceHome from "../components/ServiceHome";
import Feature from "../components/Feature";
import Wrapper from "../components/Wrapper";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Slider
          sliderBgImage="../img/hero-bg.jpg"
          sliderTitle="Toronto’s #1 Rated Maid Service!"
          sliderSubTitle="Serving Humber Bay and Liberty Village."
          sliderButtonUrl="/services"
          sliderButtonTxt="Book Now"
        />

        <HowItWorks
          howTitle="How it works"
          howSubTitle="This subtitle can be changed to whatever you want it to be"
          item1img="img/booking.png"
          item1name="1) You Book"
          item1text="Schedule a condo cleaning that works best for you and a trusted cleaner will show up."
          item2img="img/cleaning.png"
          item2name="2) We Clean"
          item2text="Guaranteed quality or we will come back and clean any missed area for free."
          item3img="img/relaxing.png"
          item3name="3) You Relax"
          item3text="Enjoy your sparkling clean home, and look forward to the next cleaning."
        />

        <ServiceHome
          serviceHomeBgImage="img/hero-bg.jpg"
          serviceHomeTitle="Trusted Toronto Cleaners"
          serviceHomeText1="We know inviting someone into your home is a big deal. All of our cleaners are carefully selected and will all be:"
          item1name="Experienced and professional cleaners"
          item2name="Given a background and reference check"
          item3name="English speaking and screened by us to ensure"
          item4name="Selected through an in-person interview"
        />

        <Wrapper
          wrapperTitle="Book on the go"
          wrapperSubTitle="Our website is responsive and mobile friendly so you can book your appointment anywhere. We want to offer the same user experience to both desktop and mobile users."
          wrapperPara1="We offer a wide range of customizable cleaning services. In order to customize your own personal cleaning plan, you can view a full list our services on our Services/Booking page."
          wrapperPara2="We understand that things happen and you may need to cancel your appointment. We will cancel all charges for your scheduled appointment if you can provide us with notice of cancellation witin (1) day of the decided date and time."
          wrapperImage="img/mobile.png"
        />

        <CallToAction
          callTitle="You're one step away from a clean and happy home!"
          callText="If you'd like to know more about the services we offer, please view our Services page by clicking the button below."
          callLinkUrl="/services"
          callLink="View our services"
          callImage="img/hero-bg.jpg"
        />
      </Layout>
    );
  }
}

export default Index;
