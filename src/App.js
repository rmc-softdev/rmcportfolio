import React, { Suspense } from "react";

import SkillsCard from "./components/SkillsCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingSpinner from "./utils/LoadingSpinner";

import "./App.css";

const Home = React.lazy(() => import("./components/Home"));
const PortfolioShowCase = React.lazy(() =>
  import("./components/PortfolioShowCase")
);

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact>
          <Suspense fallback={<LoadingSpinner asOverlay />}>
            <Home />
            <SkillsCard />
          </Suspense>
        </Route>
        <Route exact path="/portfolio">
          <Suspense fallback={<LoadingSpinner asOverlay />}>
            <PortfolioShowCase />
          </Suspense>
        </Route>
      </Router>
    </>
  );
};

export default App;
