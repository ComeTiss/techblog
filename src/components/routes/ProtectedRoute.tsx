import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router-dom";

type Props = {
  isUserLoggedIn: boolean;
  route: any;
};

function ProtectedRoute(props: Props) {
  const {
    isUserLoggedIn,
    route: { component: Component, path }
  } = props;

  return (
    <Route
      path={path}
      render={props =>
        isUserLoggedIn ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
}

export default ProtectedRoute;
