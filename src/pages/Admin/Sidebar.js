import React, {useState} from 'react';
import {Button, Paper, Avatar, Grid, Typography, InputBase, InputAdornment, Dialog, 
        DialogTitle, DialogContent, DialogActions} from "@mui/material";
import {makeStyles} from '@mui/styles';
import {Settings, Search} from "@mui/icons-material";
import { useDispatch } from 'react-redux';


import GridButton from "./GridButton";
import AppButton from "../../components/AppButton";
import {searchUsers} from "../../actions/Users/users";
import CreateCourseDialog from "./CreateCourseDialog";
import UsersDialog from './UsersDialog';



const Sidebar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [openUserDialog, setOpenUsersDialog] = useState(false);
    const [openCourseDialog, setOpenCourseDialog] = useState(false);



    const closeUsersDialog = () => {
        setOpenUsersDialog(false);
    }

    const openUsersDialog = () => {
        setOpenUsersDialog(true);
    }

    const handleOpenCourseDialog = () => {
        setOpenCourseDialog(true);
    }

    const handleCloseCourseDialog = () => {
        setOpenCourseDialog(false);
    }


    const handleUserSelect = (item) => {
        console.log(item)
    }



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
                    <GridButton Icon={<Settings/>} onClick={handleOpenCourseDialog} tooltip="Add Course"/>
                </Grid>

                <Grid item className={classes.profileButtonContainer}>
                    <AppButton style={{padding: "10px 2em"}} rounded>View Profile</AppButton>
                </Grid>
            </Grid>

            <UsersDialog 
                open={openUserDialog} 
                onClose={closeUsersDialog}
            />

            
            <CreateCourseDialog 
                open={openCourseDialog} 
                onClose={handleCloseCourseDialog}
                title="New Course"
            />
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