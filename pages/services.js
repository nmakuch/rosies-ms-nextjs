import Link from "next/link";
import Layout from "../components/Layout";
import GlobalHeader from "../components/GlobalHeader";
import CallToAction from "../components/CallToAction";

class Services extends React.Component {
  render() {
    return (
      <Layout>
        <GlobalHeader
          globalHeaderTitle="Services / Booking"
          globalHeaderSubTitle="View a list of our services or book an appointment"
          globalHeaderImage="../img/services-bg.jpg"
        />
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
