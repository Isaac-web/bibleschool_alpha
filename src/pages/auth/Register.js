import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Alert } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import GridInput from "../../components/GridInput";
import SubmitButton from "./SubmitButton";
import { registerUser } from "../../actions/auth/login";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().min(3).max(100).required(),
  lastname: Yup.string().min(3).max(100).required(),
  email: Yup.string().email().required(),
  mobile: Yup.string().min(3).max(15),
  password: Yup.string().min(7).max(200).required(),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const notify = (data) => {
    setErrorMessage(data);
  };

  const handleSubmit = (data) => {
    dispatch(registerUser(data, history, notify));
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
  };

  return (
    <Container>
      <Paper style={{ maxWidth: "60em", margin: "auto", padding: "3em 0" }}>
        <Typography align="center" variant="h4">
          Sign Up
        </Typography>
        <Typography
          align="center"
          variant="body1"
          style={{ color: "rgba(0, 0, 0, 0.5)", marginBottom: "2em" }}
        >
          Fill out the fields below to sign up
        </Typography>
        {errorMessage && (
          <Alert style={{ marginTop: "1em" }} severity="error">
            {errorMessage}
          </Alert>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Grid
              container
              justifyContent="center"
              style={{ maxWidth: "50em", margin: "auto" }}
            >
              <GridInput half name="firstname" label="Firstname*" />
              <GridInput half name="lastname" label="Lastname*" />
              <GridInput half name="email" label="Email*" />
              <GridInput half name="mobile" label="Mobile" type="tel" />
              <GridInput name="address" label="Address" />
              <GridInput name="password" label="Password*" type="password" />
              <SubmitButton>Sign Up</SubmitButton>
              <Typography
                align="center"
                color="secondary"
                component={Link}
                to="/login"
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  marginBottom: "2em",
                  textDecoration: "none",
                }}
                variant="body1"
              >
                Already have an account? Login
              </Typography>
            </Grid>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default SignUp;
