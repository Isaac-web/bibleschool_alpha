import React, {useEffect, useState} from 'react'
import {Box, Fab, Paper, Typography, useMediaQuery, IconButton} from "@mui/material";
import {makeStyles, useTheme} from "@mui/styles";
import {Add, Delete, Menu} from "@mui/icons-material"
import {useSelector, useDispatch} from "react-redux";



import AddModuleDialog from './AddModuleDialog';
import AppSnackbar from '../../../components/AppSnackbar';
import AppDrawer from '../../../components/AppDrawer';
import SearchInput from '../../../components/SearchInput';
import formatSearchText from "../../../utils/formatSearchText"
import List from '../../../components/List'
import {fetchModules, deleteModule} from "../../../actions/Coordinator/modules";
import {setCurrentModule} from "../../../actions/Coordinator/currentModule";


const Index = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const theme = useTheme();
    const [openNewModuleDialog, setOpenNewModuleDialog] = useState(false);
    const [drawerOpen, setdrawerOpen] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [snackbar, setSnackbar] = useState({open: false, message: "", color: ""});
    const {data: modules} = useSelector(state => state.coordinatorModules);
    const {data: currentModule} = useSelector(state => state.currentModule);
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));




    useEffect(() => {
        dispatch(fetchModules());
    }, [])


    const handleOpenNewModuleDialog = () => {
        setOpenNewModuleDialog(true);
    }

    const handleCloseNewModuleDialog = () => {
        setOpenNewModuleDialog(false);
    }

    const handleSearch = (text) => {
        const result = modules.filter(m => formatSearchText(m.title).includes(formatSearchText(text)));
        setSearchResults(result);
    }



    const notify = (message, color) => {
        setSnackbar({...snackbar, open: true, message, color});
    }


    const handleItemSelect = (item) => {
        dispatch(setCurrentModule(item));
    }


    const handleDelete = (module) => {
        const isCurrentModule = module._id === currentModule?._id;
        console.log(isCurrentModule)
        dispatch(deleteModule(module, notify, modules, isCurrentModule));
    }


    const handleCloseDrawer = () => {
        setdrawerOpen(false)
    }
    const handleOpenDrawer = () => {
        setdrawerOpen(true)
    }


    const handleShowDrawer = () => {
        setdrawerOpen(prev => !prev)
    }


    
    const finalData = searchResults.length ? searchResults : modules;
    return (
        <>
            {matchesSM && <IconButton 
                className={classes.menuIcon} 
                onClick={handleShowDrawer}
                style={{position: "fixed", top: 60, right: 20}}
            >
                <Menu/>
            </IconButton>}
            
            {!matchesSM ? 
            <Box className={classes.sidebar}>
                <Paper className={classes.paper}>
                    <Box className={classes.header}>
                        <Typography variant="h5">Course title</Typography>
                        <SearchInput placeholder="Search..." onChange={handleSearch}/>
                    </Box>
                    <Box className={classes.content}>
                        <List 
                            onItemSelect={(item) => handleItemSelect(item)}
                            onSecondaryAction={handleDelete}
                            data={finalData} 
                            actionIcon={<Delete style={{fontSize: 18}}/>}
                        />     
                    </Box>
                </Paper>
            </Box>:
            <AppDrawer
                open={drawerOpen}
                onClose={handleCloseDrawer}
                onOpen={handleOpenDrawer}
                style={{width: "100%"}}
            >
                <Box>
                    <Paper className={classes.paper}>
                            <Box className={classes.header}>
                                <Typography variant="h5">Course title</Typography>
                                <SearchInput placeholder="Search..." onChange={handleSearch}/>
                            </Box>
                            <Box className={classes.content}>
                                <List 
                                    onItemSelect={(item) => handleItemSelect(item)}
                                    onSecondaryAction={handleDelete}
                                    data={finalData} 
                                    actionIcon={<Delete style={{fontSize: 18}}/>}
                                />     
                            </Box>
                        </Paper>

                            {matchesSM && drawerOpen && <Fab
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
                        </Fab>}
                </Box>
            </AppDrawer>
            }

            {!matchesSM && <Fab
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
            </Fab>}

            <AddModuleDialog 
                open={openNewModuleDialog} 
                onClose={handleCloseNewModuleDialog}
                title="New Module"
            />

            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                color={snackbar.color}
                onClose={() => setSnackbar({...snackbar, open: false})}
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
    menuIcon: {
        position: "fixed", 
        top: 50,
        right: 10, 
        display: "none"
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
