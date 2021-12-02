import React from 'react'
import {Avatar, ListItem as MuiListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction} from "@mui/material";

const ListItem = ({image, title, subtitle, actions, onClick, Icon, currentItem}) => {
    return (
        <MuiListItem onClick={onClick} style={{backgroundColor: currentItem && "rgba(0, 0, 0, 0.05)", cursor: "pointer"}}>
            {image && <ListItemAvatar>
                {!Icon ? <Avatar/>: Icon}
            </ListItemAvatar>}
            <ListItemText primary={title} secondary={subtitle}/>

            <ListItemSecondaryAction>
                {actions}
            </ListItemSecondaryAction>
        </MuiListItem>
    )
}

export default ListItem
