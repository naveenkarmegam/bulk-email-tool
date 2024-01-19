import React from "react";

const Frequently = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Explore common questions about our Bulk Mailer services.</p>
        </div>
        <div className="faq-list">
          <ul>
            <li>
              <i className="bi bi-question-circle fs-6 icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                className="collapse"
                data-bs-target="#faq-list-1"
              >
                What is Bulk Mailer, and how does it work?{" "}
                <i className="bi bi-chevron-double-down fs-5 icon-show" />
                <i className="bi bi-chevron-double-up fs-5 icon-close" />
              </a>
              <div
                id="faq-list-1"
                className="collapse show"
                data-bs-parent=".faq-list"
              >
                <p>
                  Bulk Mailer is a powerful email marketing tool that allows you
                  to send large volumes of emails efficiently. It helps you
                  manage and optimize your email campaigns, ensuring your
                  messages reach the right audience.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle fs-6 icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-2"
                className="collapsed"
              >
                How can Bulk Mailer benefit my business or organization?{" "}
                <i className="bi bi-chevron-double-down fs-5 icon-show" />
                <i className="bi bi-chevron-double-up fs-5 icon-close" />
              </a>
              <div
                id="faq-list-2"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Bulk Mailer streamlines your email communication, allowing you
                  to reach a large audience with ease. It provides features for
                  campaign optimization, audience targeting, and integration
                  with your existing workflows.
                </p>
              </div>
            </li>
            <li>
              <i className="bi bi-question-circle fs-6 icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed"
              >
                Is my data secure when using Bulk Mailer for email campaigns?{" "}
                <i className="bi bi-chevron-double-down fs-5 icon-show" />
                <i className="bi bi-chevron-double-up fs-5 icon-close" />
              </a>
              <div
                id="faq-list-3"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Yes, your data is highly secure with Bulk Mailer. We implement
                  industry-standard security measures to protect your
                  information. Our platform follows best practices for data
                  encryption and ensures the confidentiality and integrity of
                  your data.
                </p>
              </div>
            </li>

            <li>
              <i className="bi bi-question-circle fs-6 icon-help" />{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
              >
                Can I customize the email templates in Bulk Mailer for branding
                purposes? <i className="bi bi-chevron-double-down fs-5 icon-show" />
                <i className="bi bi-chevron-double-up fs-5 icon-close" />
              </a>
              <div
                id="faq-list-4"
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>
                  Absolutely! Bulk Mailer provides customizable email templates
                  to align with your brand identity. You can personalize the
                  templates, add your logo, and tailor the content to match your
                  brand's style and messaging.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
