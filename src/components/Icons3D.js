import React from "react";

import "./Icons3D.css";

const Icons3D = () => {
  return (
    <>
      <div className="icons">
        <a href="https://github.com/rmc-softdev/" target="_blank">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-github"></span>
          </div>
          <div className="text">Github</div>
        </a>
        <a href="#">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-wpforms"></span>
          </div>
          <div className="text">Resume</div>
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-marques-b273461ab/"
          target="_blank"
        >
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin-in"></span>
          </div>
          <div className="text">Linkedin</div>
        </a>
        <a style={{ cursor: "pointer" }}>
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="far fa-envelope"></span>
          </div>
          <div className="text">rmcsoftdev@gmail.com</div>
        </a>
      </div>
    </>
  );
};

export default Icons3D;
