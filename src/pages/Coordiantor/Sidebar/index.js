import React, {useEffect, useState} from 'react'
import {Box, Fab, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Add, Delete} from "@mui/icons-material"
import {useSelector, useDispatch} from "react-redux";



import SearchInput from '../../../components/SearchInput';
import List from '../../../components/List'
import {fetchModules} from "../../../actions/Coordinator/modules";
import AddModuleDialog from './AddModuleDialog';


const Index = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [openNewModuleDialog, setOpenNewModuleDialog] = useState(false);
    const {data: modules} = useSelector(state => state.coordinatorModules);




    useEffect(() => {
        dispatch(fetchModules());
    }, [])


    const handleOpenNewModuleDialog = () => {
        setOpenNewModuleDialog(true);
    }

    const handleCloseNewModuleDialog = () => {
        setOpenNewModuleDialog(false);
    }

    
    return (
        <>
            <Box className={classes.sidebar}>
                <Paper className={classes.paper}>
                    <Box className={classes.header}>
                        <Typography variant="h5">Course title</Typography>
                        <SearchInput placeholder="Search..."/>
                    </Box>
                    <Box className={classes.content}>
                        <List 
                            data={modules} 
                            actionIcon={<Delete style={{fontSize: 18}}/>}
                        />     
                    </Box>
                </Paper>
            </Box>

            <Fab
                className={classes.fab} 
                onClick={handleOpenNewModuleDialog}
                style={{
                       backgroundColor: 'white', 
                       position: 'absolute', 
                       bottom: "1.5em", 
                       right: "3.5em"
                   }}
            >
                <Add color="primary"/>
            </Fab>

            <AddModuleDialog 
                open={openNewModuleDialog} 
                onClose={handleCloseNewModuleDialog}
                title="New Module"
            />
        </>
    )
}


const useStyles = makeStyles(theme => ({
    content: {
        padding: "0 1em", 
        height: "72%", 
        overflow: "auto"
    },
    paper: {
        height: "99.9%", 
        overflow: "hidden",
        position: "relative"
    },
    sidebar: {
        flex: 0.25, 
        height: "88vh",
        padding: "0 0.5em", 
        boxSizing: "border-box",
        overflow: "hidden",
    },
    header: {
        padding: "1em 0.5em",
    }
}));





export default Index
