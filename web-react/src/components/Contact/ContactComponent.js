import React, { useState } from "react";
import "..//Contact/ContactComponent.css";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import EmailIcon from "..//..//assets/image/icons/EmailIcon";
import MobileIcon from "..//../assets/image/icons/MobileIcon";
import LocationIcon from "..//..//assets/image/icons/LocationIcon";
import FacebookIcon from "../../assets/image/icons/FacebookIcon";
import InstagramIcon from "../../assets/image/icons/InstagramIcon";
import LinkedInIcon from "../../assets/image/icons/LinkedInIcon";
const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const slideLeftProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    config: { duration: 1000 },
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data here
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <animated.div
      ref={ref}
      style={slideLeftProps}
      className="contact-container">
      <div className="contact-left">
        <h2>Let's talk</h2>
        <p>
          We collaborate with thousands of creators,
          <br /> entrepreneurs and complete legends.
        </p>
        <div className="contact-options">
          <div className="icon-option">
            <EmailIcon />
          </div>
          <div className="contact-info">
            {" "}
            <h4>Our Email</h4>
            <span>hello@example.com</span>
          </div>
        </div>
        <div className="contact-options">
          <div className="icon-option">
            <MobileIcon />
          </div>
          <div className="contact-info">
            <h4>Call us</h4>
            <span>+123 456 7892</span>
          </div>
        </div>
        <div className="contact-options">
          <div className="icon-option">
            <LocationIcon />
          </div>
          <div className="contact-info">
            <h4>Find us</h4>
            <span>Open Google Maps</span>
          </div>
        </div>
        <div className="socialmedia-icons">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      {/* <div className="googlemap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.438907465217!2d21.440531943772367!3d42.46278356343648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13548d28fe87b91d%3A0xab45b8a9d06a705!2sGjilan!5e0!3m2!1sen!2s!4v1705680352589!5m2!1sen!2s"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Success!</h3>
            <p>Your message has been sent successfully.</p>
            <button onClick={handleCloseModal}>OK</button>
          </div>
        </div>
      )}
    </animated.div>
  );
};

export default Contact;
