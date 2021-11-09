import React from 'react'
import {Avatar, Button, ListItem as MuiListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction} from "@mui/material";

const ListItem = ({image, title, subtitle, actions}) => {
    return (
        <MuiListItem>
            {image && <ListItemAvatar>
                <Avatar/>
            </ListItemAvatar>}

            <ListItemText primary={title} secondary={subtitle}/>

            <ListItemSecondaryAction>
                {actions}
            </ListItemSecondaryAction>
        </MuiListItem>
    )
}

export default ListItem
