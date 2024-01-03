import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark p-3 fixed-bottom d-flex justify-content-between align-items-center text-light">
      <p className="mb-0">&copy; 2023 neeyoo11.org</p>
      <div className="d-flex">
        <a
          href="https://www.instagram.com/neey00_11/"
          target="_self"
          className="me-2"
        >
          <img
            src="images/insta.png"
            alt="Instagram"
            className="img-fluid"
            style={{ maxWidth: "25px", maxHeight: "25px" }}
          />
        </a>
        <a href="https://twitter.com/nee_yooo" target="_self" className="me-2">
          <img
            src="images/Twit.png"
            alt="Twitter"
            className="img-fluid"
            style={{ maxWidth: "25px", maxHeight: "25px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sriharsha-kr-4a397118b/"
          target="_self"
          className="me-2"
        >
          <img
            src="images/Linkd.png"
            alt="LinkedIn"
            className="img-fluid"
            style={{ maxWidth: "25px", maxHeight: "25px" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
