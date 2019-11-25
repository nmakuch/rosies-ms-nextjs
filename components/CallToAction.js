// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class CallToAction extends React.Component {
  render() {
    return (
      <section
        id="call-to-action"
        css={css`background-image: url('${this.props.callImage}');`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>{this.props.callTitle}</h2>
                <p>{this.props.callText}</p>

                <a
                  href={this.props.callLinkUrl}
                  className="btn-main btn-solid-border"
                >
                  {this.props.callLink}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToAction;
