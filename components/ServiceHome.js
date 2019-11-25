// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import IosContacts from "react-ionicons/lib/IosContacts";
import IosChatBubbles from "react-ionicons/lib/IosChatbubbles";
import IosFingerPrint from "react-ionicons/lib/IosFingerPrint";
import IosSchool from "react-ionicons/lib/IosSchool";

class ServiceHome extends React.Component {
  render() {
    return (
      <section
        id="call-to-action"
        className="service-home"
        css={css`background-image: url('${this.props.serviceHomeBgImage}'); 
        text-align: left !important; 
        padding-bottom: 100px 25px !important;
        h2 {
          font-size: 36px !important;
        }

        p { padding: 0 !important; 
        }

        @media only screen and (max-width: 510px) {
          h2 {
            font-size: 28px !important;
          }

          padding-bottom: 75px 25px !important;
        }
      `}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="block">
                <h2>{this.props.serviceHomeTitle}</h2>
                <p>{this.props.serviceHomeText1}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="block">
                <h2 id="service-area">{this.props.serviceHomeTitle2}</h2>
                <p
                  css={css`
                    margin-bottom: 50px !important;
                  `}
                >
                  {this.props.serviceHomeText2}
                </p>
                <img
                  css={css`
                    width: 100%;
                    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
                  `}
                  src={this.props.serviceMap}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceHome;
