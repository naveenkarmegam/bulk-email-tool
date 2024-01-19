import React from "react";

const Subscription = () => {
  return (
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Subscribe to Our Newsletter</h4>
            <p>
              Stay updated with the latest news, features, and tips from Bulk
              Mailer. Join our newsletter for regular updates.
            </p>

            <form>
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
