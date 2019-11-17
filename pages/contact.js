import Link from "next/link";
import Layout from "../components/Layout";
import GlobalHeader from "../components/GlobalHeader";
import CallToAction from "../components/CallToAction";
import Form from "../components/Form";
import ContactForm from "../components/ContactForm";

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <GlobalHeader
          globalHeaderTitle="Contact Us"
          globalHeaderSubTitle="You can find our contact form and information below"
          globalHeaderImage="../img/contact-bg.jpg"
        />
        <ContactForm />
        <CallToAction
          callTitle="You're one step away from a clean and happy home!"
          callText="If you'd like to know more about the services we offer, please view our Services page by clicking the button below."
          callLinkUrl="/services"
          callLink="View our services"
          callImage="img/contact-bg.jpg"
        />
      </Layout>
    );
  }
}

export default Contact;
