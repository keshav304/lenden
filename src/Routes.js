import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import Login from "./components/login/Login";
import Register from "./components/register/Register";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
