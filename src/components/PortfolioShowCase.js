import React, { useState } from "react";

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
      <div className="portfolio__container">
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
      </div>
    </>
  );
};

export default PortfolioShowCase;
