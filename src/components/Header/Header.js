import React from 'react'
import {AppBar, Toolbar, useTheme, useMediaQuery, Typography} from "@mui/material";

import useStyles from './styles';


const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <AppBar className={classes.appbar} style={{background: "white", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"}}>
                <Toolbar>
                    <Typography color="primary" variant="h6">Header</Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.headerMargin} style={{marginBottom: matchesSM && 100}}/>
        </>
    )
}

export default Header
