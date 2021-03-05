import React from "react";
import { motion } from "framer-motion";

const SkillsCard = () => {
  const listVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 8px rgba(255,255,255)",
      textShadow: "0 0 10px #FFFFFF",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const cardsVariants = {
    hidden: {
      x: "-2000px",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: {
          type: "spring",
          delay: 3.3,
          mass: 0.9,
          ease: "easeInOut",
        },
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        variants={cardsVariants}
        initial="hidden"
        animate="visible"
        className="skills__slogan"
        style={{ textAlign: "center" }}
        exit="exit"
      >
        <h1> What I have been doing lately </h1>
        <div className="separator"></div>
      </motion.div>
      <motion.div
        variants={cardsVariants}
        initial="hidden"
        animate="visible"
        className="showcase__cards"
        style={{ position: "relative" }}
        exit="exit"
      >
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
              <div className="card__tags__content">
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  React{" "}
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  Typescript
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  Testing
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  Redux
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  HTML/CSS/JS
                </motion.p>
              </div>
            </div>
          </div>
          <div className="showcase__cards__card">
            <h1 style={{ marginTop: "15px" }}> Backend</h1>
            <div className="bracket">
              <span> {`{`} </span>
            </div>
            <div className="showcase__cards__card__tags">
              <div className="card__tags__content">
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  Node.js
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  MongoDB/PostgreSQL
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  Express
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  Rest/GraphQL API
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  Docker
                </motion.p>
              </div>
            </div>
          </div>

          <div className="showcase__cards__card">
            <h1 style={{ marginTop: "15px" }}> More Skills</h1>
            <div className="bracket">
              <span> {`{`} </span>
            </div>
            <div className="showcase__cards__card__tags">
              <div className="card__tags__content">
               
              <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span> Pixel Perfect CSS</span>
                </motion.p>
                
               
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  NextJS
                </motion.p>

                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  CI/CD
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  Hooks
                </motion.p>
                <motion.p
                  variants={listVariants}
                  whileHover="hover"
                  style={{ cursor: "pointer" }}
                >
                  SEO & perfomance
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SkillsCard;
