import React, {useState} from 'react';
import {Box, List, ListItem, ListItemText, Typography, TextField, 
Hidden, SwipeableDrawer, IconButton, useMediaQuery} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {useTheme} from "@mui/styles";
import {useDispatch} from "react-redux";


import {setCurrentEnrollmentModule} from "../../../actions/Users/currentEnrollmentModule"




const data = [
    {   _id: "title1",
        title: "Title1", 
        subtitle: "subtitle"},
    {   _id: "title2",
        title: "Title2", 
        subtitle: "subtitle"},
    {   _id: "title3",
        title: "Title3", 
        subtitle: "subtitle"},
    {   _id: "title4",
        title: "Title4", 
        subtitle: "subtitle"},
    {   _id: "title5",
        title: "Title5", 
        subtitle: "subtitle"},
    {   _id: "title6",
        title: "Title6", 
        subtitle: "subtitle"},
    {   _id: "title7",
        title: "Title7", 
        subtitle: "subtitle"},
    {   _id: "title8",
        title: "Title8", 
        subtitle: "subtitle"},
    {   _id: "title9",
        title: "Title9", 
        subtitle: "subtitle"},
    {   _id: "title10",
        title: "Title10", 
        subtitle: "subtitle"},
    {   _id: "title11",
        title: "Title11", 
        subtitle: "subtitle"},
]



const Sidebar = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [searchResults, setSearchResult] = useState([]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [currentItemId, setCurrentItemId] = useState("");

    const handleSearch = ({target:input}) => {
        setSearchResult([...data.filter(item => item.title.includes(input.value))])
    }

    const handleOpenDrawer = () => setOpenDrawer(true);
    const handleCloseDrawer = () => setOpenDrawer(false);


    const handleModuleSelect = (id) => {
        dispatch(setCurrentEnrollmentModule(id));
    }

    const finalData = searchResults.length ? searchResults : data;
    
    const readyUi = <Box style={{width: "100%"}}>
                        <Box style={{margin: "0 0.5em", marginBottom: 10}}>
                            <Typography variant="h5" style={{marginBottom: 10}}>Course Title</Typography>
                            <TextField variant="outlined" placeholder="Search..." fullWidth onChange={handleSearch}/>
                        </Box>
                        <Box className={{overflow: "hidden"}}>
                            <ModuleList
                                data={finalData}
                                currentItemId={currentItemId}
                                onSetCurrentItemId={handleModuleSelect}
                            />
                        </Box>
                    </Box>
    return (!matchesSM ? <Hidden smDown>
                {readyUi}
            </Hidden>:
            <>
                <Hidden mdUp>
                    <IconButton 
                        onClick={handleOpenDrawer}
                        style={{position: "fixed", top: 60, right: 10}}
                    >
                        <Menu/>
                    </IconButton>
                </Hidden>
                <SwipeableDrawer
                    open={openDrawer}
                    onClose={handleCloseDrawer}
                    onOpen={handleOpenDrawer}
                    anchor="right"
                >
                    {readyUi}
            </SwipeableDrawer>
            </>
    )
}


const ModuleList = ({data, currentItemId, onSetCurrentItemId}) => {
    if(!data) return null;


    return (
        <Box style={{height: "75vh", overflow: "auto", margin: "0 10px"}}>
            <List>
              {data.map(item => {
                return <ListItem 
                    key={item._id} 
                    style={{cursor: "pointer", backgroundColor: currentItemId === item._id ? "rgba(0, 0, 0, 0.05)" : "white"}} 
                    button onClick={() => onSetCurrentItemId(item._id)}
                >
                    <ListItemText primary={item.title} secondary={item.subtitle}/>
                </ListItem>})}
            </List>
        </Box>
    )
}

export default Sidebar
