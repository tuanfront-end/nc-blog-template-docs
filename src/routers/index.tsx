import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Page404 from "containers/Page404";
import LandingPage from "containers/LandingPage/LandingPage";
import Docs from "containers/Docs/Docs";

export const pages: Page[] = [
  { path: "/docs", component: Docs },
  { path: "/*", component: LandingPage },
  { path: "/page404", component: Page404 },
];

const Routes = () => {
  return (
    <BrowserRouter basename="/ncmaz-landing">
      <ScrollToTop />

      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route key={path} component={component} exact={exact} path={path} />
          );
        })}
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
