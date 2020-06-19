import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import DynamicFilter from "./DynamicFilter";
import ProjectCard from "./ProjectCard";

import "./PortfolioShowCase.css";

const PortfolioShowCase = () => {
  const [stack, setStack] = useState("");
  const currentStack = (stackname) => {
    setStack(stackname);
  };

  const tags = {
    react: "React",
    js: "Javascript",
    hooks: "Hooks",
    redux: "Redux",
    css: "Modern UI/UIX",
    api: "Rest API (3rd party)",
    node: "Node JS",
    mongo: "MongoDB",
    express: "Express",
    fullapi: "Rest API (original)",
    auth: "JWT authentication",
    animations: "Animations",
    framer: "Framer-Motion",
    landingpage: "Landing Page",
    html: "HTML",
    context: "Context API",
    googlemaps: "Google Maps API",
    mvc: "MVC",
    localstorage: "Local Storage",
  };

  const showAllMain = () => {
    return (
      <>
        <ProjectCard
          tags={[
            tags.react,
            tags.redux,
            tags.hooks,
            tags.css,
            tags.api,
            tags.js,
            tags.framer,
          ]}
          links={{
            github: "https://github.com/rmc-softdev/aniworld",
            demo: "https://aniworld.netlify.app",
          }}
          image="https://i.ibb.co/GswL4gn/index.png"
          category={"React"}
          description={` This project features the most modern React techniques, such as code splitting (just recently introduced to React), Optional Chaining (ES2020!) and many more. It also It has a clean UI, which I took as inspiration from a very dear anime community app of mine, it was created to have a modern feel to it as well as to showcase some core Skills. As such, it displays intricate usage of third party API calls and quite non trivial techniques such as Higher Order Components, async Redux calls and many more.
                `}
          name="AniWorld"
        />

        <ProjectCard
          tags={[
            tags.react,
            tags.mongo,
            tags.express,
            tags.node,
            tags.mvc,
            tags.context,
            tags.hooks,
            tags.css,
            tags.api,
            tags.fullapi,
            tags.googlemaps,
            tags.localstorage,
            tags.js,
            tags.auth,
            tags.framer,
          ]}
          links={{
            githubf: "https://github.com/rmc-softdev/RealEstateFrontend",
            githubb: "https://github.com/rmc-softdev/RealEstateBackend",
            demo: "https://mern-in-a-nutshell.web.app/",
          }}
          image="https://i.ibb.co/yhhpZFP/download-2.png"
          category={"Fullstack"}
          description={` This is honestly my master project. The only reason why I didn't showcased it first is because you actually need to look at the code in order to appreciate it. This project is a true mountain in that regard, with tons and tons of reusable components, a clean and modern design pattern, it really took me quite some time and effort to build it. It has so many "hidden" features, such as error handling, both on the front end and the back end, as well as some nice security counter measures on the server side, that you actually need to sit and look carefuly at it to understand. ${
            /*It has customizable validation, customizable error handling, customizable hooks both on the front and the back end and so so much more that it's even hard to describe it here without being too prolix. The last thing I want to add is that from this app to a real world fully fledged Real Estate app there's only time left in the way. */ ""
          } 
                `}
          name="Snug Homes"
        />

        <ProjectCard
          tags={[tags.js, tags.api, tags.css, tags.html]}
          links={{
            github: "https://github.com/rmc-softdev/pokedex",
            demo: "http://vanillajs-pokedex.surge.sh/",
          }}
          image="https://i.ibb.co/fps7TB3/download-2.png"
          category={"Javascript"}
          description={`This project could easily be labeled as a true "Higher Order Functions Extravaganza", with almost three hundred lines of vanilla JS, it was such a nice ride. I still remember how troublesome it was at the time to do this project, which is why it became quite dear to me, for it has taught me quite a lot. The design pattern is quite poor, simply because I was a junior at the time, but I still think the solutions I came about were quite ingenous honestly, specially because the API was pretty troublesome, I actually had to use two different APIs concurrently to make it work nicely and done.
                `}
          name="Dexmon"
        />
      </>
    );
  };

  const showAllReference = () => {
    return (
      <>
        <ProjectCard
          tags={[
            tags.react,
            tags.redux,
            tags.mongo,
            tags.express,
            tags.node,
            tags.fullapi,
            tags.auth,
          ]}
          links={{
            github: "https://github.com/rmc-softdev/contactmanager",
            demo: "https://calm-hamlet-08878.herokuapp.com/ ",
          }}
          image="https://i.ibb.co/Rp3DrKs/download.png"
          category={"Full Stack"}
          description={`This is reference project, showcasing all core full stack skills, such as private authentication, route protection and much more. I am very fond of its design pattern.Redux is also used to manage user data and login funcionality, also local storage keeps the user logged in for a while. `}
          name="Contact Keeper"
        />

        <ProjectCard
          tags={[
            tags.react,
            tags.hooks,
            tags.animations,
            tags.css,
            tags.js,
            tags.framer,
          ]}
          links={{
            github:
              "https://github.com/rmc-softdev/Pizza-Joint-animation-showcase-",
          }}
          image="https://i.ibb.co/mcxBSJX/download-1.png"
          category={"React"}
          description={`This is a bit sized project designed to showcase some intriguing animations done with React. It also uses modern features, such as the hook system. This project was made with the framer-motion library.`}
          name="Ordering Menu"
        />
        <ProjectCard
          tags={[tags.js, tags.html, tags.css, tags.landingpage]}
          links={{
            github: "https://github.com/rmc-softdev/netflixclone",
            demo: "https://netflix-landingclone.surge.sh",
          }}
          image="https://i.ibb.co/kgWb8Nr/download-1.png"
          category={"Javascript"}
          description={`This is a very simple clone, I thought it would be a nice addition to leave a trivial HTML/CSS/JS project here as well. Being a Netflix Clone, I quite liked the design, so I chose it to be displayed here, as I already have many technical projects exposed here.`}
          name="Netflix Clone"
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
        style={{ position: "relative" }}
      >
        {/* <div className="logo" style={{ top: "-20px", left: "300px" }}>
          <Link to="/">
            <img src="https://i.ibb.co/tsLPThB/Logo-1-1.png" alt="" />
          </Link>
        </div> */}
        <div className="portfolio__filter">
          <DynamicFilter currentStack={currentStack} />
        </div>
        <div className="portfolio__content">
          <h3 className="portfolio__content__title">Main Projects</h3>
          <div className="portfolio__content__cards">
            {stack === "React" && (
              <ProjectCard
                tags={[
                  tags.react,
                  tags.redux,
                  tags.hooks,
                  tags.css,
                  tags.api,
                  tags.js,
                ]}
                links={{
                  github: "https://github.com/rmc-softdev/aniworld",
                  demo: "https://aniworld.netlify.app",
                }}
                category={"React"}
                description={` This project features the most modern React techniques, such as code splitting (just recently introduced to React), Optional Chaining (ES2020!) and many more. It also It has a clean UI, which I took as inspiration from a very dear anime community app I subscribe, it was created to have a modern feel to it as well as to showcase some core React skills. As such, it displays intricate usage of third party API calls and quite non trivial techniques such as Higher Order Components, async Redux calls and many more.
                `}
                name="AniWorld"
              />
            )}

            {stack === "Fullstack" && (
              <ProjectCard
                tags={[
                  tags.react,
                  tags.mongo,
                  tags.express,
                  tags.node,
                  tags.context,
                  tags.hooks,
                  tags.css,
                  tags.api,
                  tags.fullapi,
                  tags.googlemaps,
                  tags.js,
                  tags.auth,
                  tags.framer,
                ]}
                links={{
                  githubf: "https://github.com/rmc-softdev/RealEstateFrontend",
                  githubb: "https://github.com/rmc-softdev/RealEstateBackend",
                  demo: "https://snug-homes.web.app/",
                }}
                image="https://i.ibb.co/yhhpZFP/download-2.png"
                category={"Fullstack"}
                description={` This is honestly my master project. The only reason why I didn't showcased it first is because you actually need to look at the code in order to appreciate it. This project is a true mountain in that regard, with tons and tons of reusable components, a clean and modern design pattern, it really took me quite some time and effort to build it. It has so many "hidden" features, such as error handling, both on the front end and the back end, as well as some nice security counter measures on the server side, that you actually need to sit and look carefuly at it to understand. ${
                  /*It has customizable validation, customizable error handling, customizable hooks both on the front and the back end and so so much more that it's even hard to describe it here without being too prolix. The last thing I want to add is that from this app to a real world fully fledged Real Estate app there's only time left in the way. */ ""
                } 
                  `}
                name="Snug Homes (real estate)"
              />
            )}

            {stack === "Javascript" && (
              <ProjectCard
                tags={[tags.js, tags.api, tags.css, tags.html]}
                links={{
                  github: "https://github.com/rmc-softdev/pokedex",
                  demo: "http://vanillajs-pokedex.surge.sh/",
                }}
                image="https://i.ibb.co/fps7TB3/download-2.png"
                category={"Javascript"}
                description={`This project could easily be labeled as a true "Higher Order Functions Extravaganza", with almost three hundred lines of vanilla JS, it was such a nice ride. I still remember how troublesome it was at the time to do this project, which is why it became quite dear to me, for it has taught me quite a lot. The design pattern is quite poor, simply because I was a junior at the time, but I still think the solutions I came about were quite ingenous honestly, specially because the API was pretty troublesome, I actually had to use two different APIs concurrently to make it work nicely and done.
                `}
                name="Dex"
              />
            )}

            {stack === "Menu" && showAllMain()}
          </div>
          <h3 className="portfolio__content__title">Reference Projects</h3>
          <div className="portfolio__content__cards">
            {stack === "React" && (
              <ProjectCard
                tags={[
                  tags.react,
                  tags.hooks,
                  tags.animations,
                  tags.css,
                  tags.js,
                  tags.framer,
                ]}
                links={{
                  github:
                    "https://github.com/rmc-softdev/Pizza-Joint-animation-showcase-",
                }}
                image="https://i.ibb.co/mcxBSJX/download-1.png"
                category={"React"}
                description={`This is a bit sized project designed to showcase some intriguing animations done with React. It also uses modern features, such as the hook system. This project was made with the framer-motion library.`}
                name="Ordering Menu"
              />
            )}
            {stack === "Fullstack" && (
              <ProjectCard
                tags={[
                  tags.react,
                  tags.redux,
                  tags.mongo,
                  tags.express,
                  tags.node,
                  tags.fullapi,
                  tags.auth,
                ]}
                links={{
                  github: "https://github.com/rmc-softdev/contactmanager",
                  demo: "https://calm-hamlet-08878.herokuapp.com/ ",
                }}
                image="https://i.ibb.co/Rp3DrKs/download.png"
                category={"Full Stack"}
                description={`This is reference project, showcasing all core full stack skills, such as private authentication, route protection and much more. I am very fond of its design pattern.Redux is also used to manage user data and login funcionality, also local storage keeps the user logged in for a while. `}
                name="Contact Keeper"
              />
            )}
            {stack === "Javascript" && (
              <ProjectCard
                tags={[tags.js, tags.html, tags.css, tags.landingpage]}
                links={{
                  github: "https://github.com/rmc-softdev/netflixclone",
                  demo: "https://netflix-landingclone.surge.sh",
                }}
                image="https://i.ibb.co/kgWb8Nr/download-1.png"
                category={"Javascript"}
                description={`This is a very simple clone, I thought it would be a nice addition to leave a trivial HTML/CSS/JS project here as well. Being a Netflix Clone, I quite liked the design, so I chose it to be displayed here, as I already have many technical projects exposed here.`}
                name="Netflix Clone"
              />
            )}
            {stack === "Menu" && showAllReference()}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PortfolioShowCase;
