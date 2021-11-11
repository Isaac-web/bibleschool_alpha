import React from 'react'
import {ListItem, ListItemText, ListItemAvatar} from "@mui/material";
import {FileCopy} from "@mui/icons-material";
const FileListItem = ({title}) => {
    return (
        <ListItem style={{
                borderRadius: 10, 
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
                margin: "10px 0"
                }}>
            <ListItemAvatar>
                <FileCopy style={{color: "grey"}}/>
            </ListItemAvatar>
            <ListItemText primary={title}/>
        </ListItem>
    )
}

export default FileListItem
