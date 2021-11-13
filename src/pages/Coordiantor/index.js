import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom"



import CoordinatorPanelCard from "./CoordinatorPannelCard";


const index = () => {
    return (
       <Container maxWith="xl">
           <Grid container alignItems="center">
               <Grid item>
                   <Typography variant="h4">Welcome Back | Coordinator Name |</Typography>
               </Grid>
               <Grid item container>
                   <CoordinatorPanelCard title="Course" subtitle="Universe conflict" to="/coordinator/course"/>
                   <CoordinatorPanelCard title="Enrollments" subtitle="43" to="/coordinator/enrollments"/>
               </Grid>
           </Grid>
       </Container>
    )
}

export default index
