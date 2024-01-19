import React from "react";

const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container footer-bottom clearfix">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Bulkmailer</span>
        </strong>
        . All Rights Reserved {currentYear}
      </div>
      <div className="credits">
        Designed by{" "}
        <a href="https://naveen-portfolio-responsive.netlify.app/">
          Naveen Karmegam
        </a>
      </div>
    </div>
  );
};

export default CopyRight;
