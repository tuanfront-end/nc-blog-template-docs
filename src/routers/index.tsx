import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Page404 from "containers/Page404";
import SwithNightMode from "Components/SwithNightMode";
import LandingPage from "containers/LandingPage/LandingPage";
import Docs from "containers/Docs/Docs";

export const pages: Page[] = [
  { path: "/", exact: true, component: Docs },
  { path: "/docs", exact: true, component: Docs },
  { path: "/page404", exact: true, component: Page404 },
  { path: "/landing", exact: true, component: LandingPage },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Switch>
        {pages.map(({ component, path, exact }) => {
          return <Route key={path} component={component} exact path={path} />;
        })}
        <Route component={Page404} />
      </Switch>

      <div className="hidden md:block fixed bottom-10 md:bottom-16 right-5 z-50">
        <SwithNightMode />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
