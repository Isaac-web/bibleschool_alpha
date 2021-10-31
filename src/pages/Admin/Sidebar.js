import React from 'react';
import {Paper, Avatar, Grid, Typography, Button} from "@mui/material";
import {makeStyles} from '@mui/styles';


const Sidebar = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.sidebarPaper}>
            <Grid container direction="column" alignItems="center" className={classes.container}>
                <Grid item>
                    <Avatar style={{height: "5em", width: "5em", backgroundColor: "rgba(0, 0, 0, 0.1)", marginBottom: 20}}/>
                </Grid>
                <Grid item>
                    <Typography variant="h5" align="center">Admin Name</Typography>
                    <Typography variant="body2" align="center" className={classes.subTitle}>Admin</Typography>
                </Grid>
                <Grid item>
                    <Button>View Profile</Button>
                </Grid>
            </Grid>
    </Paper>
    )
}



const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: 50, 
        paddingBottom: 30
    },
    sidebar: {
        flex: 0.23, 
        background: theme.palette.common.dark, 
        height: "88vh", 
        padding: "0 10px"
    }, 
    sidebarPaper: {
        height: "inherit"
    },
    subTitle: {
        color: theme.palette.common.dark, 
        marginBottom: 20
    }
}))


export default Sidebar