import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Bulk Mailer</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
              Welcome to Bulk Mailer, your go-to solution for efficient and
              effective email communication. We specialize in providing tools
              and services that streamline your email campaigns and enhance your
              communication strategy.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-all" /> Easily manage and send
                bulk emails
              </li>
              <li>
                <i className="bi bi-check2-all" /> Optimize your campaigns
                for maximum impact
              </li>
              <li>
                <i className="bi bi-check2-all" /> Seamless integration with
                your workflow
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Our platform is designed to make email marketing a breeze. Whether
              you are a small business, a marketer, or an enterprise, Bulk
              Mailer provides the tools you need to reach your audience
              effectively. Let us help you simplify your email communication.
            </p>
            <a href="#" className="btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
