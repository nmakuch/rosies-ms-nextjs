// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <section
        id="slider"
        css={css`
        background-image: url('${this.props.sliderBgImage}'); 
        h1 {
          font-size: 45px !important;
          font-weight: 600 !important;
          text-transform: uppercase;
        }
        
        @media only screen and (max-width: 767px) {
          p {
            font-size: 18px !important;
          }

          h1 {
            font-size: 40px !important;
          }
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="block text-center">
                <h1 className="animated fadeInUp hero-h1">
                  {this.props.sliderTitle}
                </h1>
                <p className="animated fadeInUp hero-p">
                  {this.props.sliderSubTitle}
                </p>

                <a
                  href={this.props.sliderButtonUrl}
                  className="btn-main btn-solid-border"
                >
                  {this.props.sliderButtonTxt}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
