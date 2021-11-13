import React from 'react';
import {Box, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

import {Link} from "react-router-dom"

const CoordinatorPannelCard = ({title, subtitle, to}) => {
    const classes = useStyles();

    return (
        <Box className={classes.container} component={to && Link} to={to}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{subtitle}</Typography>
        </Box>
    )
}



const useStyles = makeStyles(theme => ({
    container: {
        height: "7em",
        width: "10em",
        padding: 20, 
        border: `2px solid rgba(0, 0, 0, 0.18)`,
        borderRadius: 10,
        cursor: "pointer", 
        "&:hover":{
            border: `2px solid ${theme.palette.primary.light}`,
        }, 
        display: "flex", 
        flexDirection: "column",
        justifyContent:"center", 
        margin: 10, 
        textDecoration: "none", 
        color: theme.palette.primary.main
    }
}))


export default CoordinatorPannelCard
