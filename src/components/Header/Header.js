import React, { useEffect } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  useTheme,
  useMediaQuery,
  Typography,
  Avatar,
} from "@mui/material";
import { useHistory, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { logout } from "../../actions/auth/login";
import * as userService from "../../services/userServices";

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        className={classes.appbar}
        style={{
          background: "white",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar>
          <Typography
            color="primary"
            variant="h6"
            style={{ textDecoration: "none" }}
            component={Link}
            to="/"
          >
            Header
          </Typography>
          <AuthBox />
        </Toolbar>
      </AppBar>
      <div
        className={classes.headerMargin}
        style={{ marginBottom: matchesSM && 100 }}
      />
    </>
  );
};

const AuthBox = () => {
  const token = localStorage.getItem("token");
  const user = userService.getCurrentUser();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const showAuthButton =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  useEffect(() => {}, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout(history));
  };

  if (token)
    return (
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Avatar style={{ margin: "0 10px" }}>{user.name.charAt(0)}</Avatar>
        <Typography variant="body2" style={{ color: "black", marginRight: 12 }}>
          {user.name}
        </Typography>
        <Button
          style={{ textTransform: "none" }}
          color="secondary"
          variant="contained"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    );

  return (
    <div style={{ marginLeft: "auto" }}>
      {!showAuthButton && (
        <Button
          style={{ textTransform: "none" }}
          variant="contained"
          onClick={() => history.push("/login")}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default Header;
