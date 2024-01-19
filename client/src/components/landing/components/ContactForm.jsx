import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries related to our Bulk Mailer
            services, feel free to get in touch with us. We'd love to hear from
            you!
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Our Location:</h4>
                <p>Your Business Street, Thanjavur, India, 600 0028</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>info@bulkmailer.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Contact Number:</h4>
                <p>+1 555-1234-5678</p>
              </div>
              {/* You can replace the iframe with a static map image or another map integration */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1646.8151454839856!2d79.22427795294608!3d10.977816823628853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baad023dafc1d35%3A0x6d87a4f790397fd5!2sKuruvadi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704692416555!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: 290 }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  required
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
