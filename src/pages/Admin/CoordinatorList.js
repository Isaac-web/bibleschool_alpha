import React, {useState, useEffect} from 'react';
import {Avatar, Button, Box, List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction,Typography} from '@mui/material';

import {useSelector, useDispatch} from "react-redux";

import {makeStyles} from "@mui/styles";
import SearchInput from '../../components/SearchInput';
import Loading from '../../components/Loading';


const CoordinatorList = () => {
    const classes = useStyles();
    const {data: coordinators, loading} = useSelector(state => state.adminCoordinators);
    const [searchResults, setSearchResults] = useState([]);


    const handleRemove = (id) => {
        console.log(id);
    }


    const state = useSelector(state => state.adminCoordinators)


    const formatText = (text) => {
        return text.trim().toLowerCase();
    }

     const handleSearch = (item) => {
         const results = coordinators.filter(c => formatText(c.name).includes(formatText(item)));
         setSearchResults(results);
     }


     useEffect(() => {
         //fetch coodeinators
     }, [])

     
    if(loading) return <Loading/>

    const finalData = searchResults.length ? searchResults : coordinators;
    return (
        <Box>
            <Typography variant="h4">Coordinators</Typography>
            <SearchInput placeholder="Search Coordinators..." onChange={handleSearch}/>
            <List>
            {finalData.map(item  =>
                <ListItem key={item._id} divider>
                    <ListItemAvatar>
                        <Avatar src={item.profilePic}/>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} secondary={item.status} />
                    <ListItemSecondaryAction>
                        <Button 
                            className={classes.button}
                            onClick={() => handleRemove(item._id)}
                            size="small" 
                            style={{textTransform: "none", color: "rgba(255, 80, 1)"}} 
                        >
                            Remove
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
                )}
            </List>
        </Box>
    )
}




const useStyles = makeStyles(theme => ({
    button: {
        textTransform: "none", 
    }
}))

export default CoordinatorList
