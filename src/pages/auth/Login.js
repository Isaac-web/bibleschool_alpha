import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { loginUser } from "../../actions/auth/login";

const validationSchema = Yup.object().shape({
  username: Yup.string().email().required(),
  password: Yup.string().min(7).max(200).required(),
});

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = { username: "", password: "" };

  const redirect = (path) => {
    history.replace(path);
  };

  const notify = (data) => {
    setErrorMessage(data);
  };

  const handleSubmit = (data) => {
    dispatch(loginUser(data, redirect, notify));
  };

  return (
    <Container>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item style={{ width: "100%", marginBottom: "1.5em" }}>
                <Typography align="center" variant="h5">
                  Welcome Back
                </Typography>
                <Typography align="center" variant="body2">
                  Use your credentials to login
                </Typography>
                {errorMessage && (
                  <Alert style={{ marginTop: "1em" }} severity="error">
                    {errorMessage}
                  </Alert>
                )}
              </Grid>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                  <Grid item container direction="column">
                    <Grid item style={{ marginBottom: 20 }}>
                      <TextField
                        error={
                          touched.username && Boolean(errors?.username?.length)
                        }
                        helperText={touched.username && errors.username}
                        value={values.username}
                        onChange={handleChange("username")}
                        fullWidth
                        variant="standard"
                        label="Username"
                      />
                    </Grid>
                    <Grid item style={{ marginBottom: 20 }}>
                      <TextField
                        error={
                          touched.password && Boolean(errors?.password?.length)
                        }
                        helperText={touched.password && errors.password}
                        value={values.password}
                        onChange={handleChange("password")}
                        fullWidth
                        variant="standard"
                        type="password"
                        label="Password"
                      />
                    </Grid>

                    <Grid item style={{ marginBottom: 20 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Login
                      </Button>
                    </Grid>
                    <Grid
                      item
                      container
                      justifyContent="center"
                      style={{ marginBottom: 20 }}
                    >
                      <Typography
                        align="center"
                        color="secondary"
                        component={Link}
                        to="/register"
                        style={{
                          color: "rgba(0, 0, 0, 0.5)",
                          marginBottom: "2em",
                          textDecoration: "none",
                        }}
                        variant="body1"
                      >
                        Dont have an account? Sign Up
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </Formik>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2em 1em",
    marginTop: "3em",
  },
}));

export default Login;
