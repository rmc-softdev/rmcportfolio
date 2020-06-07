import React from "react";

const SkillsCard = () => {
  return (
    <div className="showcase__cards" style={{ position: "relative" }}>
      <img
        // src="https://i.ibb.co/j3bkqVf/curvas-1.png"
        style={{ position: "absolute", right: "400px", top: "-150px" }}
        alt=""
      />
      <div className="showcase__cards__container">
        <div className="showcase__cards__card">
          <h1 style={{ marginTop: "15px" }}> Frontend</h1>
          <div className="bracket">
            <span> {`{`} </span>
          </div>
          <div className="showcase__cards__card__tags">
            {/* <div className="icons">
              <i class="fas fa-share"></i>
              <i class="fas fa-thumbtack"></i>
              <i class="far fa-check-circle"></i>
            </div> */}
            <div className="card__tags__content">
              <p>React </p>
              <p> Javascript </p>
              <p> SASS</p>
            </div>
          </div>
        </div>

        <div className="showcase__cards__card">Backend</div>
        <div className="showcase__cards__card">Skills</div>
      </div>
    </div>
  );
};

export default SkillsCard;
