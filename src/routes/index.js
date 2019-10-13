import React from "react";
import Login from '../screens/Login';
import AdminHome from '../screens/AdminHome';
import CsrHome from '../screens/CsrHome';
import NotFound from '../components/NotFound.js';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/' }} />}
    />
  )
}

// We have routes defined below
// for now and even for long term we will be using these
// 4 different routes across our application
// each has its descrition below
//  this way we can make sure a SPA (Single Page Application)
// to an extent. Cheers :)

const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        {/* this is main landing page of the app */}
        <Route exact path="/" component={Login} />
        {/* this will be the admin/sudo user landing page after login
        further sudo related components will be integrated here  */}
        <PrivateRoute authed={true} path='/admin' component={AdminHome} />
        {/* this will be the csr user/s landing page after login
        further csr related components will be integrated here  */}
        <PrivateRoute authed={true} path='/csr' component={CsrHome} />
        {/*Any other route will be rediretected to this page */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
