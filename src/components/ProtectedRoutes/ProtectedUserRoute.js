import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as auth from "../../services/userServices";

const ProtectedUserRoute = ({
  path,
  component: Component,
  render,
  ...rest
}) => {
  const user = auth.getCurrentUser();

  if (!user) return <Redirect to="/login" />;

  return <Route path={path} component={Component} render={render} {...rest} />;
};

export default ProtectedUserRoute;
