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
        css={css`background-image: url('${this.props.serviceHomeBgImage}');`}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>{this.props.serviceHomeTitle}</h2>
                <p>{this.props.serviceHomeText1}</p>
              </div>
            </div>
          </div>

          <div
            className="row"
            css={css`
              svg {
                margin: 25px 0 25px 0;
              }
            `}
          >
            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <IosSchool fontSize="80px" color="#fff" />
                <p>
                  <strong>{this.props.item1name}</strong>
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <IosFingerPrint fontSize="80px" color="#fff" />
                <p>
                  <strong>{this.props.item2name}</strong>
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <IosChatBubbles fontSize="80px" color="#fff" />
                <p>
                  <strong>{this.props.item3name}</strong>
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <IosContacts fontSize="80px" color="#fff" />
                <p>
                  <strong>{this.props.item4name}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceHome;
