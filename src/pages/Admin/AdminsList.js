import React, {useState, useEffect} from 'react';
import {Avatar, Button, List, ListItem, ListItemText, ListItemAvatar, 
        ListItemSecondaryAction, Typography} from '@mui/material';
import {useSelector, useDispatch} from "react-redux";
import {makeStyles} from "@mui/styles";



import SearchInput from '../../components/SearchInput';
import {fetchAdmins} from "../../actions/Admin/admins";
import Loading from '../../components/Loading';


const AdminList = ({data}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {data: admins, loading} = useSelector(state => state.admins);
    const [searchResults, setSearchResults] = useState([]);

    const handleRemove = (id) => {
        console.log(id);
    }



    const formatText = (text) => {
        return text.trim().toLowerCase();
    }

     const handleSearch = (item) => {
         const results = admins.filter(c => formatText(c.name).includes(formatText(item)));
         setSearchResults(results);
     }


     useEffect(() => {
         dispatch(fetchAdmins());
     }, []);



    
    if(loading) return <Loading />;


    const finalData = searchResults.length ? searchResults : admins;
    return (
        <>
            <Typography variant="h4">Admins</Typography>
            <SearchInput placeholder="Search admins..." onChange={handleSearch}/>
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
        </>
    )
}




const useStyles = makeStyles(theme => ({
    button: {
        textTransform: "none", 
    }
}))

export default AdminList
