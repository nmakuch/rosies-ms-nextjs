// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-manu">
                <ul>
                  <li>
                    <Link href="/" as="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" as="/services">
                      <a>Services/Booking</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" as="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" as="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <p>Copyright &copy; Rosie and Company -  Maid Service 2019. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
