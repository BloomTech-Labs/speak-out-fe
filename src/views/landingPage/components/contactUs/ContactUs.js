import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./contactUs.scss";
import WhatsApp from "../../../../assets/whatsapp.png";
import ContactEmail from "../../../../assets/ContactEmail.png";
import PinLarge from "../../../../assets/PinLarge.png";
import Instagram from "../../../../assets/Instagram.png";
import Facebook from "../../../../assets/Facebook.png";
import Twitter from "../../../../assets/Twitter.png";
import Map from "../../../../assets/SchoolMap.png";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";
import { connect } from 'react-redux';

function ContactUs(props) {

  useEffect(() => {
    props.toggle();

  }, [])
  return (
    <div className="contact-us">
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="body">
        <div className="body-left">
          <div className="contact-container">
            <img src={WhatsApp} />
            <p>+973 35617635</p>
          </div>
          <div className="contact-container">
            <img src={ContactEmail} />
            <p>speakout.info.bh@gmail.com</p>
          </div>
          <div className="contact-container">
            <img src={PinLarge} />
            <p>
              Rd No 3949 <br />
              Bani Jamra, Bahrain
            </p>
          </div>
        </div>
        <div className="body-right">
          <h2>Social Media</h2>
          <div className="contact-container">
            <img src={Instagram} />
            <p>speak_out_program</p>
          </div>
          <div className="contact-container">
            <img src={Facebook} />
            <p>speakoutinfobh</p>
          </div>
          <div className="contact-container">
            <img src={Twitter} />
            <p>speakoutbh</p>
          </div>
        </div>
        
      </div>
      <div className="img-container">
            <img src={Map} />
          </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(ContactUs)
)