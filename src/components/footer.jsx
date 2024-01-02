import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark p-3 fixed-bottom d-flex justify-content-between align-items-center text-light">
        <p className="mb-0">&copy; 2023 Your Company Name</p>
        <div className="d-flex">
          <a href="#" target="_blank" className="me-2">
            <img
              src="images/insta.png"
              alt="Instagram"
              className="img-fluid"
              style={{ maxWidth: "25px", maxHeight: "25px" }}
            />
          </a>
          <a href="#" target="_blank" className="me-2">
            <img
              src="images/Twit.png"
              alt="Twitter"
              className="img-fluid"
              style={{ maxWidth: "25px", maxHeight: "25px" }}
            />
          </a>
          <a href="#" target="_blank" className="me-2">
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
  }
}

export default Footer;
