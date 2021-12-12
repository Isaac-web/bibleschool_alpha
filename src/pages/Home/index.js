import React from 'react'
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

const Index = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("register");
  };

  return (
    <Box>
      <Container maxWidth="xl" style={{}}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item style={{ height: "90vh" }}>
              <Typography
                variant="h3"
                align="left"
                style={{ marginTop: "3em" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                adipisicing.
              </Typography>

              <Button
                variant="outlined"
                style={{
                  padding: "1em",
                  width: "12em",
                  margin: "30px 0",
                  borderRadius: "50px",
                }}
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Grid
        container
        style={{ backgroundColor: "black", height: "30vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          align="center"
          variant="subtitle2"
          style={{ color: "white" }}
        >
          copyright@2021
        </Typography>
      </Grid>
    </Box>
  );
};

export default Index;
