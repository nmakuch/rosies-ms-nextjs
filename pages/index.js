// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx } from "@emotion/core";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import ServiceHome from "../components/ServiceHome";
import Wrapper from "../components/Wrapper";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Slider
          sliderBgImage="../img/hero-bg.jpg"
          sliderTitle="Toronto’s best maid cleaning service"
          sliderSubTitle="Serving the west end: Liberty Village, High Park, Etobicoke"
          sliderButtonUrl="/services"
          sliderButtonTxt="Book Now"
        />

        <HowItWorks
          howTitle="A Clean Home In 3 Easy Steps:"
          item1img="img/booking.png"
          item1name="1) Book a visit"
          item1text="Use our online booking tool or call us at (437) 777-MAID to schedule a booking with one of our cleaning professionals."
          item2img="img/cleaning.png"
          item2name="2) We Clean"
          item2text="Our professional cleaning staff will clean your home to your exact specifications. Satisfaction is guaranteed."
          item3img="img/relaxing.png"
          item3name="3) Enjoy and save"
          item3text="Take advantage of 20% off by scheduling bi-weekly visits and relax knowing your home will always be clean."
        />

        <ServiceHome
          serviceHomeBgImage="img/hero-bg.jpg"
          serviceHomeTitle="Why Rosie's Maid Service?"
          serviceHomeText1="At Rosie’s Maid Service, not only do we have the lowest rates in the area, we also pay our maids the highest wages. That means that while you are getting the best price, you will also enjoy the peace of mind from knowing that your home is being taken care of by a well compensated professional. All of our cleaners have years of professional experience, clean background check (no criminal record), speak english, and have passed our training program."
          serviceHomeTitle2="Service area"
          serviceHomeText2="The area below is a rough representation of the area that we provide service to. If you are unsure, call ahead to make sure we can accomodate you."
          serviceMap="img/maid-service-map.jpg"
        />

        <Wrapper
          wrapperTitle="Book on the go"
          wrapperSubTitle="Our website is responsive and mobile friendly so you can book your appointment anywhere. We want to offer the same user experience to both desktop and mobile users."
          wrapperPara1="We offer a wide range of customizable cleaning services. In order to customize your own personal cleaning plan, you can view a full list our services on our Services/Booking page."
          wrapperPara2="Cancel with 24 hours notice free of charge. We will cancel all charges for your scheduled appointment if you can provide us with notice of cancellation witin (1) day of the decided date and time."
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
