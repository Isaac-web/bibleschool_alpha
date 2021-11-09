import React from 'react';
import {Box} from "@mui/material"
import {makeStyles} from '@mui/styles';




const Index = () => {
    const classes = useStyles();
    return (<Box className={classes.main}>MAIN</Box>)
}


const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: 'pink',
        flex: 0.75,
    }
}));


export default Index
