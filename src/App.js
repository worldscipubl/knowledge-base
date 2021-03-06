import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ExplorerPage from "./pages/ExplorerPage";
import { NotFoundPage } from "./domain/NotFoundPage/NotFoundPage";
import ViewerPage from "./pages/ViewerPage";
import "./common/style/app.scss";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

export const App = () => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <div className="app">
        <Header className="app__header" />
        <NavBar className="app__navbar" title={title} id={id} />

        <div className="app__content">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/explorer" />
            </Route>

            <Route path="/explorer/:folderId?">
              <ExplorerPage setTitle={setTitle} />
            </Route>

            <Route path="/viewer/:fileId?">
              <ViewerPage setTitle={setTitle} setId={setId} />
            </Route>

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
