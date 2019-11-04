// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";

class Feature extends React.Component {
  render() {
    return (
      <section
        id="feature"
        css={css`background-image: url('${this.props.featureImage}');`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-6">
              <h2 className="text-uppercase">{this.props.featureTitle}</h2>
              <p>{this.props.featureContent}</p>
              <a href="{{ .url }}" className="btn-solid-border btn-main">
                {this.props.featureBtnCaption}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
