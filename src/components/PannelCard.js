import React from 'react';
import {Card, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles"


const PannelCard = ({title, border, subTitle, onClick}) => {
    const classes = useStyles();

    return (
        <Grid item>
            <div className={classes.root} onClick={onClick} style={{boxShadow: border && "0 0 0 3px #2781fe67", borderRadius: 8}}>
                <Typography variant="h4" color="primary">{title}</Typography>
                <Typography variant="body2">{subTitle}</Typography>
            </div>
        </Grid>
    )
}




const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
        height: "6em", 
        width: "8em", 
        boxSizing: 'border-box', 
        padding: 10, 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-end", 
        cursor: "pointer", 
        marginBottom: 30, 
    }, 
    title: {
        color: theme.palette.common.light
    }
}))

export default PannelCard
