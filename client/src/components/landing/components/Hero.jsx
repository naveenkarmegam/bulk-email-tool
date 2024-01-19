import React from "react";
const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
            <h1>Empower Your Business with Bulk Mailer</h1>
            <h2>
              Enhance your communication and engagement with our advanced email
              marketing solutions
            </h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started nav-link">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                className="glightbox btn-watch-video nav-link"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bulk-mailer-90741.appspot.com/o/client%2Fhero-img.png?alt=media&token=7e538fc9-0411-422c-9e77-959a4f3533b6"
              className="img-fluid animated"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
