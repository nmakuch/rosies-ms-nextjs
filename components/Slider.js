// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <section
        id="slider"
        css={css`background-image: url('${this.props.sliderBgImage}');`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-1">
              <div className="block text-center">
                <h1 className="animated fadeInUp text-uppercase hero-h1">
                  {this.props.sliderTitle}
                </h1>
                <p className="animated fadeInUp hero-p">
                  {this.props.sliderSubTitle}
                </p>
                <Link
                  href={this.props.sliderButtonUrl}
                  as={this.props.sliderButtonUrl}
                >
                  <a className="btn-main btn-solid-border">
                    {this.props.sliderButtonTxt}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
