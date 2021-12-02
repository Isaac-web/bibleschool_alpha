import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as auth from "../../services/userServices";
import { Grid, Typography } from "@mui/material";

const ProtectedCoordinatorRoute = ({
  path,
  component: Component,
  render,
  ...rest
}) => {
  const user = auth.getCurrentUser();

  // if(!user) return <Redirect to="/login"/>

  // if(user.status !== "coordinator") return (
  //                                     <Grid
  //                                         style={{height: "77vh", paddingTop: "10vh"}}
  //                                         justifyContent="center"
  //                                         alignItems="center"
  //                                     >
  //                                         <Typography variant="h5" align="center" style={{color: "rgba(0, 0, 0, 0.2)"}}>403 | Access Denied</Typography>
  //                                     </Grid>);

  return <Route path={path} component={Component} render={render} {...rest} />;
};

export default ProtectedCoordinatorRoute;
