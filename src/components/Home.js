import React, { Suspense } from "react";
import { Link } from "react-router-dom";

import Icons3D from "./Icons3D";
import Spinner from "../utils/Spinner";

const ProfileImage = React.lazy(() => import("./ProfileImage"));

const Home = () => {
  return (
    <main>
      <div className="showcase__content">
        <div className="showcase__content__infos">
          <>{<Icons3D />}</>
          <h4 className="title"> Rafael Marques</h4>
          <h5 style={{ fontWeight: "500" }}> Software Developer</h5>
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
            foward to apply such technologies.
          </p>
          <Link to="/portfolio">
            {" "}
            <span className="showcase__portfolio"> See Portfolio </span>{" "}
          </Link>
        </div>
        <Suspense fallback={<Spinner />}>
          <ProfileImage />
        </Suspense>
      </div>
      <div className="skills__slogan" style={{ textAlign: "center" }}>
        <h1> What I have been doing lately </h1>
        <div className="separator"></div>
      </div>
    </main>
  );
};

export default Home;
