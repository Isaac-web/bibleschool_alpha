import React from 'react';
import {useParams} from "react-router-dom";
import {Box, Container, Grid, Typography, useMediaQuery} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";


import Main from './Main';
import Sidebar from './Sidebar';



const EnrollmentCourse = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const {enrollmentId} = useParams();
    

    return (
      <Container maxWidth="xl">
          <Grid container>
            <Box className={classes.mainContainer} style={{flex: matchesSM && 1}}>
                <Main/>
            </Box>
            <Box className={classes.aside} style={{flex: matchesSM && 0}}>
                <Sidebar/>
            </Box>
          </Grid>
      </Container>
    )
}



const useStyles = makeStyles(theme => ({
    aside: {
        display: "flex", 
        flex: 0.25,
        height: "88vh", 
        overflow: "hidden"
    },
    mainContainer:{
        display: "flex", 
        flex: 0.75,
        height: "88vh", 
        overflow: "hidden"
    }
}))

export default EnrollmentCourse