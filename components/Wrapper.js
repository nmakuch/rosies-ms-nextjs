// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class Wrapper extends React.Component {
  render() {
    return (
      <section id="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="block">
                <div className="section-title">
                  <h2>{this.props.wrapperTitle}</h2>
                  <p>{this.props.wrapperSubTitle}</p>
                </div>
                <p>{this.props.wrapperPara1}</p>
                <p>{this.props.wrapperPara2}</p>
                <div
                  css={css`
                    a {
                      color: #333;
                      display: inline-block;
                      font-size: 16px;
                      letter-spacing: 1px;
                      padding: 14px 35px;
                      font-weight: 600;
                      margin-top: 25px;
                      border: 3px solid #333;
                      text-transform: uppercase;
                      border-radius: 0;
                      -webkit-transition: all 0.4s ease;
                      transition: all 0.4s ease;
                    }

                    a:hover {
                      background: #333;
                      color: #fff;
                      -webkit-transition: all 0.4s ease;
                      transition: all 0.4s ease;
                    }
                  `}
                >
                  <Link href="#">
                    <a>Book Now</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="block">
                <img
                  css={css`
                    @media only screen and (max-width: 768px) {
                      padding: 0 !important;
                    }
                  `}
                  src={this.props.wrapperImage}
                  alt="Img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Wrapper;
