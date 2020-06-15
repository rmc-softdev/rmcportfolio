import React, { Suspense } from "react";

import SkillsCard from "./components/SkillsCard";
import { Route, Switch, useLocation } from "react-router-dom";

import LoadingSpinner from "./utils/LoadingSpinner";
import { AnimatePresence } from "framer-motion";

import "./App.css";

const HomeContent = React.lazy(() => import("./components/HomeContent"));
const PortfolioShowCase = React.lazy(() =>
  import("./components/PortfolioShowCase")
);

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/" exact>
          <Suspense fallback={<LoadingSpinner asOverlay />}>
            <HomeContent />
            <SkillsCard />
          </Suspense>
        </Route>
        <Route exact path="/portfolio">
          <Suspense fallback={<LoadingSpinner asOverlay />}>
            <PortfolioShowCase />
          </Suspense>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default App;
