import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ExplorerPage from "./pages/ExplorerPage";
import { NotFoundPage } from "./domain/NotFoundPage/NotFoundPage";
import ViewerPage from "./pages/ViewerPage";
import "./common/style/app.scss";

export const App = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <div className="app">
        {/*<Header />*/}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/explorer" />
          </Route>

          <Route path="/explorer/:folderId?">
            <ExplorerPage />
          </Route>

          <Route path="/viewer/:fileId?">
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
