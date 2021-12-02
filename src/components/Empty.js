import React from 'react';
import {Grid, Typography} from "@mui/material";

import defaultImage from "../static/empty.png"

const Empty = ({title, subtitle, image, boxPadding=true}) => {
    const gridPadding = boxPadding ? "9em 15em" : "5em";
    const containerHeight = boxPadding ? "80vh":"auto";
    return (
        <Grid container justifyContent="center" alignItems="center" style={{height: containerHeight}}>
            <Grid item style={{padding: gridPadding, background: "rgba(0, 0, 0, 0.03)", borderRadius: "5em"}}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <img src={image ? image : defaultImage} style={{width: "10em", height: "10em"}}/>
                    <Typography variant="h6" align="center">{title}</Typography>
                    <Typography variant="subtitle2" align="center" style={{color: "rgba(0, 0, 0, 0.3)"}}>{subtitle}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Empty;
