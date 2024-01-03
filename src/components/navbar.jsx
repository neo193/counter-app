import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        data-bs-theme="dark"
      >
        <div className="ms-5 d-flex justify-content-start">
          <div className="container d-flex justify-content-center align-items-center">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
          <div className="navbar-collapse d-flex justify-content-center align-items-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  className={`badge m-2 bg-primary ${
                    props.formatCount === 0 ? "d-none" : ""
                  }`}
                >
                  {props.formatCount}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
