import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Icons3D from "./Icons3D";
import Spinner from "../utils/Spinner";
import ProfileImage from "./ProfileImage";

const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  hiddenImage: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.8,
      mass: 0.3,
      stiffness: 20,
    },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const IconsVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        type: "spring",
        delay: 2.5,
        mass: 0.5,
      },
    },
  },
};

const svgVariants = {
  initial: {
    rotate: -180,
  },
  animate: {
    y: 6,
    width: "17px",
    rotate: 0,
    scale: [1, 1.2, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1, 1.2, 1],
    transition: {
      delay: 1,
      duration: 2,
      ease: "easeInOut",
      scale: {
        delay: 4,
        duration: 1.7,
        ease: "easeInOut",
        yoyo: Infinity,
        repeatDelay: 2,
      },
    },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    // pathLength: 0,
  },
  animate: {
    opacity: 1,
    // pathLength: 1,
    transition: {
      delay: 1,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <motion.main variants={containerVariants}>
      <div className="showcase__content">
        <motion.div
          className="showcase__content__infos"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            variants={IconsVariants}
            initial="hidden"
            animate="visible"
          >
            <Icons3D />
          </motion.div>
          <h4 className="title"> Rafael Marques</h4>
          <h5 style={{ fontWeight: "500" }}> Software Developer</h5>
          {/* <div className="logo" style={{ top: "27px", right: "220px" }}>
            <Link to="/">
              <img src="https://i.ibb.co/tsLPThB/Logo-1-1.png" alt="" />
            </Link>
          </div> */}
          <p
            style={{
              fontFamily: "roboto,Noto Sans Myanmar UI,arial,sans-serif",
              color: "#202124",
              lineHeight: "23px",
              fontWeight: "700",
            }}
          >
            Passionate problem solver, as a former physicist, building solutions
            to real world problems is in my nature. Love learning and getting up
            to date with the latest trends in the industry, always looking
            foward to apply such technologies. Don't take my word for granted,
            for I have learned a whole new library just to make the animations
            you're seeing here possible with React.
          </p>
          <motion.div
            style={{ width: "fit-content" }}
            whileTap={{ scale: 1.1 }}
          >
            <Link to="/portfolio">
              {" "}
              <span className="showcase__portfolio">
                {" "}
                See Portfolio{" "}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  variants={svgVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l9 6-9 6z"
                    fill="#fff"
                    variants={pathVariants}
                  />
                </motion.svg>{" "}
              </span>{" "}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hiddenImage"
          animate="visible"
          exit="exit"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Home;
