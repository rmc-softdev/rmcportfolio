import React, { useState } from "react";
import { motion } from "framer-motion";

import DynamicFilter from "./DynamicFilter";
import ProjectCard from "./ProjectCard";

import "./PortfolioShowCase.css";

const PortfolioShowCase = () => {
  const [stack, setStack] = useState("");
  const currentStack = (stackname) => {
    setStack(stackname);
  };

  const showAll = () => {
    return (
      <>
        <ProjectCard
          category={"React"}
          description={
            "bla bla a bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla blabla bla bla blabla bla blabla bla blabla bla bla"
          }
          name="Kitsu Anime Clone"
        />
        <ProjectCard
          category={"Fullstack"}
          description={
            "bla bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla bla bla"
          }
          name="Real Estate"
        />

        <ProjectCard
          category={"Vanilla JS"}
          description={
            "bla bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla bla bla"
          }
          name="Real Estate"
        />
      </>
    );
  };

  return (
    <>
      <motion.div
        className="portfolio__container"
        initial={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        exit={{
          x: "100vw",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <div className="portfolio__filter">
          <DynamicFilter currentStack={currentStack} />
        </div>
        <div className="portfolio__content">
          <h3 className="portfolio__content__title">Main Projects</h3>
          <div className="portfolio__content__cards">
            {stack === "React" && (
              <ProjectCard
                category={"React"}
                description={
                  "bla bla a bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla blabla bla bla blabla bla blabla bla blabla bla bla"
                }
                name="Kitsu Anime Clone"
              />
            )}

            {stack === "Fullstack" && (
              <ProjectCard
                category={"Fullstack"}
                description={
                  "bla bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla bla bla"
                }
                name="Real Estate"
              />
            )}

            {stack === "Javascript" && (
              <ProjectCard
                category={"Vanilla JS"}
                description={
                  "bla bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla blaa bla bla bla bla blabla bla blabla bla blabla bla bla"
                }
                name="Real Estate"
              />
            )}

            {stack === "Menu" && showAll()}
          </div>
          <h3 className="portfolio__content__title">Reference Projects</h3>
          <div className="portfolio__content__cards">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioShowCase;
