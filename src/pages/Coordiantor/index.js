import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { Switch, Route, Redirect, Link, useLocation } from "react-router-dom";

import Main from "./Course";
import Enrollments from "./Enrollments";

const Index = () => {
  const theme = useTheme();
  const location = useLocation();
  const classes = useStyles();

  const coursePath = location.pathname.includes("course");
  const enrollmentPath = location.pathname.includes("enrollment");
  const activeButtonStyle = {
    backgroundColor: theme.palette.primary.light,
    color: "white",
  };

  return (
    <Container maxWidth="xl">
      <Grid container alignItems="center" alignItems="flex-start">
        <Grid className={classes.leftSidebar} item>
          <Grid container direction="column">
            <Grid
              className={classes.leftSidebarButton}
              style={coursePath ? activeButtonStyle : null}
              component={Link}
              to="/coordinator/course"
            >
              Course
            </Grid>
            <Grid
              className={classes.leftSidebarButton}
              style={enrollmentPath ? activeButtonStyle : null}
              component={Link}
              to="/coordinator/enrollments"
            >
              Enrollments
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.main} item container>
          <Switch>
            <Route path="/coordinator/enrollments" component={Enrollments} />
            <Redirect from="/coordinator" exact to="/coordinator/course" />
            <Route path="/coordinator/course" component={Main} />
          </Switch>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  leftSidebar: {
    flex: 0.2,
  },
  leftSidebarButton: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: 15,
    marginBottom: 5,
    fontSize: "1rem",
    borderRadius: 10,
    fontFamily: "roboto",
    color: "rgba(0, 0, 0, 0.8)",
    cursor: "pointer",
    textDecoration: "none",
  },
  main: {
    flex: 0.8,
  },
}));

export default Index;
