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
              alt="Rosie's Maid Service logo"
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
