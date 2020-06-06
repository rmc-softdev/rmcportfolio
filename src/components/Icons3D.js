import React from "react";

import "./Icons3D.css";

const Icons3D = () => {
  return (
    <>
      <div className="icons">
        <a href="#">
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
        <a href="#">
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin-in"></span>
          </div>
          <div className="text">Linkedin</div>
        </a>
      </div>
    </>
  );
};

export default Icons3D;
