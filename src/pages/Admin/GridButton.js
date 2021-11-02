import React from 'react';
import {Grid, IconButton, useTheme, Tooltip} from "@mui/material";


const GridButton = ({onClick, Icon, tooltip}) => {
    const theme = useTheme();


    if(!tooltip)
        return <Grid item style={{margin: "0 1em"}}>
            <IconButton style={{color:theme.palette.primary.main}} onClick={onClick}>
                {Icon}
            </IconButton>
        </Grid>

    return (
        <Grid item style={{margin: "0 1em"}}>
            <Tooltip title={tooltip}>
                <IconButton style={{color:theme.palette.primary.main}} onClick={onClick}>
                    {Icon}
                </IconButton>
            </Tooltip>
        </Grid>
    )
}

export default GridButton
