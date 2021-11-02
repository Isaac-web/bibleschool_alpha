import React, {useEffect} from 'react'
import {Avatar, Button, List, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, useTheme} from "@mui/material";
import {useSelector, useDispatch} from "react-redux";


import {getUsers} from "../../actions/Users/users";
import Loading from '../../components/Loading';



const UsersList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {data, loading} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [])


    if(loading) return <Loading/>

    return (
        <List>
            {
                data.map(item =>{  
                    const isAdded = item.status.toLowerCase() === "admin" || item.status.toLowerCase() === "coordinator";
                    
                    return <ListItem key={item._id}>
                        <ListItemAvatar>
                            <Avatar src={item.image}/>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={item.status}/>
                        <ListItemSecondaryAction>
                            <Button 
                                style={{
                                    textTransform: "none", 
                                    color: isAdded ? "gold": theme.palette.common.success
                                    }} 
                                disabled={isAdded} 
                                size="small"
                            >
                                    {isAdded ? "Added" : "Add"}
                            </Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                })
            }
        </List>
    )
}

export default UsersList
