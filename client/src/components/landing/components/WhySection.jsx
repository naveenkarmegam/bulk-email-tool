import React from "react";

const WhySection = () => {
  return (
    <section id="mailer" className="why-us section-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>
                Enhance your Email Marketing with <strong>Bulk Mailer</strong>
              </h3>
              <p>
                Elevate your email marketing campaigns with Bulk Mailer.
                Experience the benefits of our advanced features and
                user-friendly interface to achieve greater success in reaching
                your audience.
              </p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Why choose Bulk Mailer for your email
                    campaigns? <i className="bi bi-chevron-down fs-5 icon-show" />
                    <i className="bi bi-chevron-up fs-5 icon-close" />
                  </a>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Bulk Mailer provides a comprehensive solution for your
                      email marketing needs. From easy campaign setup to
                      detailed analytics, we empower you to create effective and
                      engaging email campaigns.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    className="collapsed"
                  >
                    <span>02</span> How can Bulk Mailer improve my campaign
                    performance? <i className="bi bi-chevron-down fs-5 icon-show" />
                    <i className="bi bi-chevron-up fs-5 icon-close" />
                  </a>
                  <div
                    id="accordion-list-2"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Bulk Mailer offers advanced features such as personalized
                      templates, segmentation, and A/B testing. These features
                      help you tailor your campaigns, analyze user behavior, and
                      optimize for better results.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    className="collapsed"
                  >
                    <span>03</span> How does Bulk Mailer ensure the success of
                    my email marketing strategy?{" "}
                    <i className="bi bi-chevron-down fs-5 icon-show" />
                    <i className="bi bi-chevron-up fs-5 icon-close" />
                  </a>
                  <div
                    id="accordion-list-3"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Our platform is designed to be user-friendly, allowing you
                      to create, manage, and analyze campaigns effortlessly.
                      Real-time analytics and reports help you understand
                      campaign performance and make data-driven decisions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img my-section">
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
