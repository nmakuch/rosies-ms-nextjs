// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class Wrapper extends React.Component {
  render() {
    return (
      <section
        css={css`
          padding: 100px 25px !important;
        `}
        id="intro"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12">
              <div className="block">
                <div
                  css={css`
                    padding: 0 15px !important;
                    h2 {
                      margin-bottom: 25px !important;
                    }
                  `}
                  className="section-title"
                >
                  <h2>{this.props.wrapperTitle}</h2>
                  <p>{this.props.wrapperSubTitle}</p>
                </div>
                <p
                  css={css`
                    padding: 0 15px !important;
                  `}
                >
                  {this.props.wrapperPara1}
                </p>
                <p
                  css={css`
                    margin-bottom: 75px !important;
                    padding: 0 15px !important;
                  `}
                >
                  {this.props.wrapperPara2}
                </p>
                <div
                  css={css`
                    text-align: center !important;
                    a {
                      color: #fff;
                      display: inline-block;
                      font-size: 16px;
                      letter-spacing: 1px;
                      padding: 14px 35px;
                      font-weight: 600;
                      margin-top: 75px;
                      border: 3px solid black;
                      background-color: black;
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
                  <div className="block">
                    <img
                      css={css`
                        padding: 0 !important;
                      `}
                      src={this.props.wrapperImage}
                      alt="Img"
                    />
                  </div>
                  <div className="col-md-8 offset-md-2 col-sm-12">
                  <a href="/services">Book an appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Wrapper;
