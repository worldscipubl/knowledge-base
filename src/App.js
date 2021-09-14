import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./common/style/app.scss";
import ExplorerPage from "./pages/ExplorerPage";
import { NotFoundPage } from "./domain/NotFoundPage/NotFoundPage";
import ViewerPage from "./pages/ViewerPage";

export const App = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <div className="app">
        {/*<Header />*/}
        <Switch>
          <Route path="/" exact>
            <ExplorerPage />
          </Route>

          <Route path="/viewer" exact>
            <ViewerPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
