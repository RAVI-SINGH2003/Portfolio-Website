import "./Contact.css";
import React from "react";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { contactFormActionLink } from "../../assets/data";
import contactImage from "../../images/contact.png";

const Contact = () => {
  return (
    <>
      <h1 className="contact-main-heading">CONTACT ME</h1>
      <div className="contact">
        <div className="contact-details-box">
          <ul className="contact-links-container">
            <li className="contact-link">
              <AiFillLinkedin />
              <div className="contact-link-detail">
                <h2>Linked In</h2>
                <a
                  href="https://www.linkedin.com/in/ravi-singh-b849bb205/"
                  target="blank"
                >
                  Message Me
                </a>
              </div>
            </li>
            <li className="contact-link ">
              <AiFillTwitterCircle />
              <div className="contact-link-detail">
                <h2>Twitter</h2>
                <a href="https://twitter.com/tweet_RaviSingh" target="blank">
                  Message Me
                </a>
              </div>
            </li>
            <li className="contact-link">
              <AiOutlineMail />
              <div className="contact-link-detail">
                <h2>Email</h2>
                <p>ravirainbow2003@gmail.com</p>
                <a  href="mailto:ravirainbow2003@gmail.com">
                  Mail me
                </a>
              </div>
            </li>
            <li className="contact-link">
              <BsFillTelephoneFill />
              <div className="contact-link-detail">
                <h2>Phone</h2>
                <p>+91-9818284142</p>
              </div>
            </li>
          </ul>
          <div className="contact-image-container">
            <img src={contactImage} alt="contact" />
          </div>
        </div>
        {/* <------------Contact Form---------------> */}
        <form
          action={contactFormActionLink}
          className="contact-form"
          method="post"
        >
          <div className="contact-field">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="message">Message : </label>
            <textarea
              name="message"
              id="message"
              cols="10"
              rows="4"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
