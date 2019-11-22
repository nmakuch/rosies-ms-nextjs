// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class GlobalHeader extends React.Component {
  render() {
    return (
      <section
        id="global-header"
        css={css`background-image: url('${this.props.globalHeaderImage}');
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
            <div className="col-md-12">
              <div
                css={css`
                  padding-left: 0 !important;
                `}
                className="block"
              >
                <h1>{this.props.globalHeaderTitle}</h1>
                <p>{this.props.globalHeaderSubTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GlobalHeader;
