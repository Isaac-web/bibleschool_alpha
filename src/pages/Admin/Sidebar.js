import React, {useState} from 'react';
import {Paper, Avatar, Grid, Typography, InputBase, InputAdornment} from "@mui/material";
import {makeStyles} from '@mui/styles';
import {Settings, Search} from "@mui/icons-material";


import GridButton from "./GridButton";
import AppButton from "../../components/AppButton";
import MiniDialog from '../../components/Dialog/MiniDialog';
import UsersList from "./UsersList";




const Sidebar = () => {
    const classes = useStyles();
    const [openUserDialog, setOpenUsersDialog] = useState(false);


    const closeUsersDialog = () => {
        setOpenUsersDialog(false);
    }

    const openUsersDialog = () => {
        setOpenUsersDialog(true);
    }
    

    const data = [];

    return (
        <Paper className={classes.sidebarPaper}>
            {/* SIDEBAR */}
            <Grid container direction="column" alignItems="center" justifyContent="space-around" className={classes.container}>
                <Grid item>
                    <Avatar style={{height: "5em", width: "5em", backgroundColor: "rgba(0, 0, 0, 0.1)", marginBottom: 20}}/>
                </Grid>
                <Grid item className={classes.textContainer}>
                    <Typography variant="h5" align="center">Admin Name</Typography>
                    <Typography variant="body2" align="center" className={classes.subTitle}>Admin</Typography>
                </Grid>

                <Grid container justifyContent="center">
                    <GridButton Icon={<Settings/>} onClick={openUsersDialog} tooltip="Add Coordinator"/>
                    <GridButton Icon={<Settings/>} onClick={() => console.log("Button Clicked...")}/>
                    <GridButton Icon={<Settings/>} onClick={() => console.log("Button Clicked...")}/>
                </Grid>

                <Grid item className={classes.profileButtonContainer}>
                    <AppButton style={{padding: "10px 2em"}} rounded>View Profile</AppButton>
                </Grid>
            </Grid>


            {/* DIALOG */}
            <MiniDialog
                open={openUserDialog}
                Header={
                    <InputBase 
                        fullWidth
                        autoFocus
                        startAdornment={<InputAdornment style={{marginRight: 10}}><Search size={30} color="primary"/></InputAdornment>}
                        placeholder="Search Coordinators..."
                        style={{fontSize: 20}}
                    />
                }
                onClose={closeUsersDialog}
            >
                <UsersList data={data}/>
            </MiniDialog>
        </Paper>
    )
}



const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: 50, 
        paddingBottom: 30
    },
    profileButtonContainer: { 
        padding: "3em 0"
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
    }, 
    textContainer: {
        paddingTop: "2em", 
        paddingBottom: "5em"
    }
}))


export default Sidebar