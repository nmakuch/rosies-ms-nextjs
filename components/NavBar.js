// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Component } from "react";
import Link from "next/link";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              css={css`
                margin-top: 5px;
                padding: 20px 0;
                width: 300px;

                @media only screen and (max-width: 450px) {
                  width: 200px;
                }
              `}
              src="data:image/png;base64,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"
              alt="Rosie and Company - Maid Service logo"
            />
          </a>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <div
              css={css`
                a {
                  margin-left: 50px;
                  color: #333;
                  font-size: 16px;
                  font-weight: 500;
                }

                @media only screen and (max-width: 992px) {
                  a {
                    margin-left: 0;
                    margin-bottom: 20px;
                  }
                }
              `}
              className="navbar-nav ml-auto"
            >
              <Link href="/" as="/">
                <a>Home</a>
              </Link>

              <a href="/services">Services/Booking</a>

              <Link href="/terms" as="/terms">
                <a>Terms</a>
              </Link>

              <Link href="/faq" as="/faq">
                <a>FAQ</a>
              </Link>

              <Link href="/contact" as="/contact">
                <a>Contact Us</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
