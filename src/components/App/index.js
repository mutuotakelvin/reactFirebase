import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation/index";
import LandingPage from "../Landing/index";
import SignUpPage from "../SignUp/index";
import SignInPage from "../SignIn/index";
import PasswordForgetPage from "../PasswordForget/index";
import HomePage from "../Home/index";
import AccountPage from "../Account/index";
import AdminPage from "../Admin/index";

import * as ROUTES from "../../constrains/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        compoent={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} compoent={AdminPage} />
    </div>
  </Router>
);
export default App;
